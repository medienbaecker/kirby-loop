import type { Comment, CommentPayload, Reply, ReplyPayload } from '../types';

export const store: { comments: Comment[] } = $state({
  comments: []
});

const apiPrefix = 'loop';
const KirbyLoop = document.querySelector('kirby-loop');
const csrfToken = KirbyLoop?.getAttribute('csrf-token');
const headers = {
  'Content-Type': 'application/json',
  'X-CSRF-Token': csrfToken || ''
};

export const getComments = async (pageId: string, language?: string) => {
  const url = language ? `/${language}/${apiPrefix}/comments/${pageId}` : `/${apiPrefix}/comments/${pageId}`;
  const response = await fetch(url, {
    headers
  });
  const data = await response.json();
  store.comments = data.comments;
}

export const addComment = async (comment: CommentPayload) => {
  const url = comment.lang ? `/${comment.lang}/${apiPrefix}/comment/new` : `/${apiPrefix}/comment/new`;
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(comment)
  });
  const data: { comment: Comment } = await response.json();
  store.comments = [data.comment, ...store.comments];
}

export const resolveComment = async (comment: Comment) => {
  const url = comment.lang ? `/${comment.lang}/${apiPrefix}/comment/resolve` : `/${apiPrefix}/comment/resolve`;
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ id: comment.id })
  });
  const data: { success: boolean } = await response.json();
  if (data.success) {
    const commentIndex = store.comments.findIndex(c => c.id === comment.id);
    if (commentIndex !== -1) {
      store.comments[commentIndex].status = 'RESOLVED';
    }
  }
  return data.success;
}

export const unresolveComment = async (comment: Comment) => {
  const url = comment.lang ? `/${comment.lang}/${apiPrefix}/comment/unresolve` : `/${apiPrefix}/comment/unresolve`;
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ id: comment.id })
  });
  const data: { success: boolean } = await response.json();
  if (data.success) {
    const commentIndex = store.comments.findIndex(c => c.id === comment.id);
    if (commentIndex !== -1) {
      store.comments[commentIndex].status = 'OPEN';
    }
  }
  return data.success;
}

export const setGuestName = async (name: string) => {
  const response = await fetch(`/${apiPrefix}/guest/name`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ name })
  });
  return await response.json();
}

export const addReply = async (reply: ReplyPayload) => {
  const language = KirbyLoop?.getAttribute('language');
  const url = language ? `/${language}/${apiPrefix}/comment/reply` : `/${apiPrefix}/comment/reply`;
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(reply)
  });
  const data: { reply: Reply } = await response.json();
  const parent = store.comments.find(c => c.id === data.reply.parentId)
  if (parent) parent.replies = [...parent.replies, data.reply];
}

export default store;
