import Link from 'next/link';
import { buttonStyles } from '@/app/lib/constants';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'white';
  icon?: string;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  icon, 
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = buttonStyles[variant];
  const content = (
    <>
      {icon && <span>{icon}</span>}
      <span>{children}</span>
      {variant === 'primary' && (
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link 
        href={href} 
        className={`group ${baseStyles} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick}
      type={type}
      className={`group ${baseStyles} ${className}`}
    >
      {content}
    </button>
  );
}