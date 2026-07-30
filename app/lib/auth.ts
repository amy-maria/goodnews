import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { sql } from './db';
//CredentialsProviders allows me to supply authorize functions instead of 3rd part oauth
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: {
                    label: 'Password', type: 'password'
                },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
            return null;
        }
        
        const result = await sql`
        SELECT id, email, password_hash FROM users WHERE email = ${credentials.email}`
        ;
        const user = result[0];//Neon returns results as an array of row objexts, result is either one row of unique email or undefined. If undefined, then null
        
        if (!user) {
            return null;
        }
        const passwordMatches = await bcrypt.compare(credentials.password, user.password_hash);
//compares two arguments instead of two hashes directly
        
        if (!passwordMatches) {
            return null;
        }

        return { id: String(user.id), email: user.email };//loggin user
    },
    }),
],
session: {
        strategy: 'jwt',//session tracking in a signed encrypted cookie
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        },      
},
pages: {
        signIn: '/profile',
    },
    secret: process.env.NEXTAUTH_SECRET,
};