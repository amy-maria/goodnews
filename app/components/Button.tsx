import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

const variantStyles = {
    primary: 'bg-accent text-light hover:bg-accent-hover',
    secondary: 'bg-dark-elevated text-muted hover:bg-dark',
};

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    className = '',
    children,

    ...rest
    }) => {
    return (
        <button
        className = {
        `px-4 py-2 rounded-full font-semibold ${variantStyles[variant]} ${className}`
}
        {...rest}>
            { children }
          </button>
);
   
};

export default Button;
