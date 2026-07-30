'use client';

import { SessionProvider } from 'next-auth/react';

export default function AuthProvider({
    children,
}: {
        children: React.ReactNode;
    }) {
    return <SessionProvider>{children}</SessionProvider>;
}

//any client component can use useSesion to check login/signin etc 