import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    it('renders its children as text', () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText(/Click me/i)).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Save</Button>);
        fireEvent.click(screen.getByText('Save'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});