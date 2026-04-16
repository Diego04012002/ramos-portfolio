import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '',
  target,
  rel,
  style,
  ...props 
}) => {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseClass} ${className}`}
        target={target}
        rel={rel}
        style={style}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      onClick={onClick} 
      className={`${baseClass} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
