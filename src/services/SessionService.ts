import express from 'express';
import { UnauthorizedException } from '@/http/nodegen/errors';

/**
 * The authenticated subject attached to every request as req.sessionData.
 * Extend this interface with whatever your auth layer resolves (user, roles, tenant...).
 */
export interface SessionData {
  userId: string;
  sessionId: string;
}

/**
 * SessionService (stub, implement your own)
 *
 * The generated http layer is auth-agnostic. Resolve the session with your auth library of choice
 * here and inject `SessionService.middleware()` via config.appMiddlewareOptions.authentication,
 * see src/http/nodegen/middleware/applicationMiddleware.ts
 */
class SessionService {
  middleware(): express.RequestHandler {
    return (req, res, next) => {
      next(new UnauthorizedException('No authentication configured, implement src/services/SessionService.ts'));
    };
  }
}

export default new SessionService();
