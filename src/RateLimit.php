<?php

namespace Moinframe\Loop;

use Kirby\Http\Response;

class RateLimit
{
    /**
     * Check if request is rate limited
     * @return Response|null Returns error response if rate limited, null if allowed
     */
    public static function check(): ?Response
    {
        // Skip rate limiting if disabled
        if (!Options::rateLimitEnabled()) {
            return null;
        }

        $ip = kirby()->request()->ip();
        $currentTime = time();
        $window = Options::rateLimitWindow();
        $maxRequests = Options::rateLimitRequests();

        // Create anonymous hash of IP with daily salt for privacy
        $dailySalt = date('Y-m-d') . kirby()->option('keys.session', 'default-salt');
        $anonymousKey = hash('sha256', $ip . $dailySalt);
        
        // Create cache key for current time window
        $windowStart = floor($currentTime / $window) * $window;
        $cacheKey = "rate_limit_{$anonymousKey}_{$windowStart}";

        // Get plugin cache
        $cache = kirby()->cache('moinframe.loop.rateLimit');
        
        // Get current request count for this window
        $requestCount = $cache->get($cacheKey, 0);

        // Check if rate limit exceeded
        if ($requestCount >= $maxRequests) {
            return Response::json([
                'status' => 'error',
                'message' => 'Rate limit exceeded. Please try again later.',
                'code' => 'RATE_LIMIT_EXCEEDED',
                'retryAfter' => $windowStart + $window - $currentTime
            ], 429);
        }

        // Increment request count
        $cache->set($cacheKey, $requestCount + 1, $window + 60); // Cache expires 60s after window

        return null;
    }
}