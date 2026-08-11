'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";
import Button from './Button';

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
      <div className='m-4'>
        <p className='mb-2'>
          To edit filter keywords, enter email and password to log in to your
          account.
        </p>
        <label htmlFor='login-email' className='sr-only'>
          Email
        </label>
        <input
          id='login-email'
          className='border-2 mr-4'
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='login-password' className='sr-only'>
          Password
        </label>
        <input
          id='login-password'
          className='border-2 mr-4'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Log In</Button>

        {loginMessage && (
          <p
            className={
              loginMessage.type === 'error'
                ? 'text-red-600 mt-2'
                : 'text-green-600 mt-2'
            }>
            {loginMessage.text}
          </p>
        )}
      </div>
    );
}