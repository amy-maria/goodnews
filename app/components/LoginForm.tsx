'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState<{
        type: 'success' | 'error';
        text: string;
    } | null>(null);

    const handleLogin = async () => {
        setLoginMessage(null);

        const result = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });//redirect false tells signin not to redirect to a new page but return to a result object

        if (result?.error) {
            setLoginMessage({ type: 'error', text: 'Invalid email or password' });
            return;
        }
        setLoginMessage({ type: 'success', text: 'Logged In' });
        setEmail('');
        setPassword('');
        //session provider tracks the loggin in session
    };

    return (
        <div>
            <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Log In</button>

            {loginMessage && (
                <p className={loginMessage.type === 'error' ? 'text-red-600' : 'text-green-600'}
                >
                {loginMessage.text}
        </p>
    )}
        </div>
    );
}