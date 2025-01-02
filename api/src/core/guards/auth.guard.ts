import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      delete request.user; // In case a user is already set
      const authorization: string | undefined = request.headers.authorization;
      if (!authorization || authorization.trim() === '') {
        throw new UnauthorizedException('Please provide token');
      }
      const authToken = authorization.replace(/bearer/gim, '').trim();

      const resp = await this.jwtService.verifyAsync(authToken, {
        secret: process.env.JWTKEY,
      });
      request.user = resp.user;
      return true;
    } catch (error) {
      console.log('Error in AuthGuard: ', error.message);
      throw new ForbiddenException(
        error.message || 'Session expired! Please Sign In'
      );
    }
  }
}
