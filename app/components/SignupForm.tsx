'use client';
import { useState } from "react";
import Button from './Button';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupMessage, setSignupMessage] =    useState< {
        type: 'success' | 'error'; 
        text: string;
    } | null>(null);//only one can be true at once to not allow both error and success msgs at the same time

    const handleSignup = async () => {
        setSignupMessage(null);

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                setSignupMessage({ type: 'error', text: data.error });
                return; //only rejects promise on network level problems
            }
            setSignupMessage({
                type: 'success', text: 'Account created. You can now log in.'
            });
            setEmail('');
            setPassword('');
            //clears email and passwork only on success, allows user to correct error with info present
        } catch (error) {
            console.error('Signup request failed:', error);
            setSignupMessage({ type: 'error', text: 'Something went wrong.Please try again.' });
        }
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
        <Button onClick={handleSignup}>Sign Up</Button>

        {signupMessage && (
          <p
            className={
              signupMessage.type === 'error' ? 'text-red-600' : 'text-green-600'
            }>
            {signupMessage.text}
          </p>
        )}
      </div>
    );
}
