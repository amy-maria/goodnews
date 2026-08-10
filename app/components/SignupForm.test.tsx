import { describe, it, expect, vi , beforeEach} from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignupForm from './SignupForm';

describe('Signup Form', () => {
    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn());
    });
    
    function fillOutForm(email: string, password: string) {
        fireEvent.change(screen.getByPlaceholderText('Email'), {
            target: { value: email },
        });
        fireEvent.change(screen.getByPlaceholderText('Password'), {
            target: { value: password },
        });
    }
    it('sends email and password to /api/signup on submit', async () => {
        (fetch as any).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ success: true }),
        });
        render(<SignupForm />);
        fillOutForm('test@example.com', 'password123');
        fireEvent.click(screen.getByText('Sign Up'));
        await waitFor(() => {
            expect(fetch).toHaveBeenCalledWith('/api/signup',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: 'test@example.com', password: 'password123' }),
                    
                });
        });
    });

    it('shows success message and clear the input after a successful signup', async () => {
        (fetch as any).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ success: true }),
        });
        render(<SignupForm />);
        fillOutForm('test@example.com', 'password123');
        fireEvent.click(screen.getByText('Sign Up'));
        expect(await screen.findByText('Account created. You can now log in.')).toBeInTheDocument();
expect(screen.getByPlaceholderText('Email')).toHaveValue('');
        expect(screen.getByPlaceholderText('Password')).toHaveValue('');
    });
    it('shows the server error message and keeps the inputs when signup fails', async () => {
        (fetch as any).mockResolvedValueOnce({
            ok: false,
            json: async () => ({ error: 'An account with that email already exists.' }),
        });
        render(<SignupForm />);
        fillOutForm('test@example.com', 'password123');
        fireEvent.click(screen.getByText('Sign Up'));

        expect(await screen.findByText('An account with that email already exists.')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Email')).toHaveValue('test@example.com');
    });
    it('shows a generic error message when the request fails', async () => {
        (fetch as any).mockRejectedValueOnce(new Error('Network error'));

        render(<SignupForm />);
        fillOutForm('test@example.com', 'password123');
        fireEvent.click(screen.getByText('Sign Up'));
        
        expect(await screen.findByText('Something went wrong.Please try again.')).toBeInTheDocument();
    });
});