// In-memory token bucket rate limiter for auth & public submission endpoints
interface RateRecord {
  count: number;
  resetAt: number;
}

const ipMap = new Map<string, RateRecord>();

// Cleanup stale records periodically
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    ipMap.forEach((value, key) => {
      if (now > value.resetAt) {
        ipMap.delete(key);
      }
    });
  }, 60000);
}

export function checkRateLimit(
  identifier: string,
  limit = 5,
  windowSeconds = 60
): { success: boolean; remaining: number; resetInSeconds: number } {
  const now = Date.now();
  const windowMs = windowSeconds * 1000;
  const record = ipMap.get(identifier);

  if (!record || now > record.resetAt) {
    ipMap.set(identifier, {
      count: 1,
      resetAt: now + windowMs,
    });
    return { success: true, remaining: limit - 1, resetInSeconds: windowSeconds };
  }

  if (record.count >= limit) {
    const resetInSeconds = Math.ceil((record.resetAt - now) / 1000);
    return { success: false, remaining: 0, resetInSeconds };
  }

  record.count += 1;
  const resetInSeconds = Math.ceil((record.resetAt - now) / 1000);
  return { success: true, remaining: limit - record.count, resetInSeconds };
}
