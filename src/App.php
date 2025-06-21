<?php

namespace Moinframe\Loop;

use Kirby\Cms\Page;
use Moinframe\Loop\Models\Comment;
use Moinframe\Loop\Models\Reply;

class App
{
    private static ?Database $instance = null;

    /**
     * Renders the loop component HTML
     * @return string Component HTML
     */
    public static function render(): string
    {
        $user = kirby()->user();

        if (null === $user) {
            return '';
        }

        return '';
    }

    /**
     * Gets the database instance (singleton)
     * @return Database
     */
    protected static function db(): Database
    {
        if (self::$instance === null) {
            self::$instance = new Database();
        }

        return self::$instance;
    }

    /**
     * Converts array data to Comment objects
     * @param array<mixed> $commentsData
     * @return Comment[]
     */
    private static function convertToCommentObjects(array $commentsData): array
    {
        $comments = [];
        foreach ($commentsData as $commentData) {
            $comment = Comment::fromArray($commentData);
            $comments[] = $comment;
        }
        return $comments;
    }
    /**
     * Get comments by kirby page
     * @param Page $page
     * @param string $lang Language code
     * @return Comment[]
     */
    public static function getCommentsByPage(\Kirby\Cms\Page $page, string $lang = ''): array
    {
        try {
            // @phpstan-ignore method.notFound
            $pageUuid = $page->content()->uuid()->value();
            $db = self::db();

            // Use optimized query that filters at database level
            $commentsData = $db::getCommentsByPage($pageUuid, $lang)->toArray();

            return self::convertToCommentObjects($commentsData);
        } catch (\Exception $e) {
            return [];
        }
    }


    /**
     * Retrieves all comments organized in a nested structure
     * @return Comment[] array of Comment objects with nested replies
     * @remarks Top-level comments have replies as children
     */
    public static function getComments(): array
    {
        try {
            $db = self::db();
            // Use optimized query that fetches comments with replies in 2 queries instead of N+1
            $commentsData = $db::getCommentsWithReplies()->toArray();

            return self::convertToCommentObjects($commentsData);
        } catch (\Exception $e) {
            return [];
        }
    }

    /**
     * Creates a Comment from array data
     * @param array<mixed> $data
     * @return Comment|null The created comment or null if validation fails
     */
    public static function createComment(array $data): ?Comment
    {
        try {
            return Comment::fromArray($data);
        } catch (\InvalidArgumentException $e) {
            error_log(tt('moinframe.loop.comment.creation.failed', ['error' => $e->getMessage()]));
            return null;
        }
    }

    /**
     * Creates a Reply from array data
     * @param array<mixed> $data
     * @return Reply|null The created reply or null if validation fails
     */
    public static function createReply(array $data): ?Reply
    {
        try {
            return Reply::fromArray($data);
        } catch (\InvalidArgumentException $e) {
            error_log(tt('moinframe.loop.reply.creation.failed', ['error' => $e->getMessage()]));
            return null;
        }
    }

    /**
     * Adds a new comment to the database
     * @param Comment $comment Comment to add
     * @return Comment|null The added comment or null on failure
     */
    public static function addComment(Comment $comment): ?Comment
    {
        try {
            if (!$comment->isValid()) {
                error_log(tt('moinframe.loop.comment.validation.error', ['errors' => implode(', ', $comment->validate())]));
                return null;
            }

            $comment = self::db()::addComment($comment);
            return $comment;
        } catch (\Exception $e) {
            error_log(tt('moinframe.loop.comment.add.failed', ['error' => $e->getMessage()]));
            return null;
        }
    }

    /**
     * Adds a new reply to the database
     * @param Reply $reply Reply to add
     * @return Reply|null The added reply or null on failure
     */
    public static function addReply(Reply $reply): ?Reply
    {
        try {
            if (!$reply->isValid()) {
                error_log(tt('moinframe.loop.reply.validation.error', ['errors' => implode(', ', $reply->validate())]));
                return null;
            }

            $reply = self::db()::addReply($reply);
            return $reply;
        } catch (\Exception $e) {
            error_log(tt('moinframe.loop.reply.add.failed', ['error' => $e->getMessage()]));
            return null;
        }
    }

    public static function resolveComment(string $commentId): bool
    {
        try {
            $success = self::db()::updateCommentStatus($commentId, 'RESOLVED');
            return $success;
        } catch (\Exception $e) {
            return false;
        }
    }

    public static function unresolveComment(string $commentId): bool
    {
        try {
            $success = self::db()::updateCommentStatus($commentId, 'OPEN');
            return $success;
        } catch (\Exception $e) {
            return false;
        }
    }
}
