import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { signIn } from 'next-auth/react';
import LoginForm from './LoginForm';

vi.mock('next-auth/react', () => ({
    signIn: vi.fn(),
}));

describe('Login form', () => {
    function fillOutForm(email: string, password: string) {
        fireEvent.change(screen.getByPlaceholderText('Email'), {
            target: { value: email },
        });
        fireEvent.change(screen.getByPlaceholderText('Password'), {
            target: { value: password },
        });
    }

    it('calls signIn with the entered credentials', async () => {
        vi.mocked(signIn).mockResolvedValueOnce({ ok: true, error: undefined } as any);
        render(<LoginForm />);
        fillOutForm('test@example.com', 'password123');
        fireEvent.click(screen.getByText('Log In'));
        await screen.findByText('Logged In');
        expect(signIn).toHaveBeenCalledWith('credentials', {
            email: 'test@example.com',
            password: 'password123',
            redirect: false,
        });
    });

    it('shows an error message when signIn returns an error', async () => {
        vi.mocked(signIn).mockResolvedValueOnce({
            ok: false,
            error: 'CredentialsSignIn'
        } as any);
        render(<LoginForm />);
        fillOutForm('test@example.com', 'wrongpassword');
        fireEvent.click(screen.getByText('Log In'));
        expect(await screen.findByText('Invalid email or password')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Email')).toHaveValue('test@example.com');
    });
    
    it('shows a success message and clears the inputs after a successful login', async () => {
        vi.mocked(signIn).mockResolvedValueOnce({ ok: true, error: undefined } as any);

        render(<LoginForm />);
        fillOutForm('test@example.com', 'password123');
        fireEvent.click(screen.getByText('Log In'));
        expect(await screen.findByText('Logged In')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Email')).toHaveValue('');
        expect(screen.getByPlaceholderText('Password')).toHaveValue('');

    });
});