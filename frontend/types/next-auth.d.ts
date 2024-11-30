import { User as UserInterface, JWT as JWTInterface } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
    };
    auth_token: string;
  }

  interface User extends UserInterface {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  }
}
declare module 'next-auth/jwt' {
  interface JWT extends JWTInterface {
    token: string;
    user: User;
  }
}
