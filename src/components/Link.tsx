import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  title?: string;
  mr?: number;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, title, mr, className = '' }) => {
  const style: React.CSSProperties = {
    color: 'var(--color-black)',
    textDecoration: 'none',
  };
  
  if (mr !== undefined) {
    style.marginRight = `var(--space-${mr})`;
  }
  
  return (
    <a 
      href={href} 
      title={title} 
      className={className}
      style={style}
      onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-blue)'}
      onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-black)'}
    >
      {children}
    </a>
  );
};

export const LinkDark: React.FC<LinkProps> = (props) => {
  return <Link {...props} />;
};

export default Link;