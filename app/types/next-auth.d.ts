import 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            email: string;
        };
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id: string;
    }
}

//used so session.user.id type checks