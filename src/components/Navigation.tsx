import React from 'react';
import { Box } from './Box';

interface NavProps {
  children: React.ReactNode;
}

export const Nav: React.FC<NavProps> = ({ children }) => {
  return (
    <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
      {children}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  children, 
  color = 'black', 
  fontSize = 5, 
  fontWeight = 'bold' 
}) => {
  const style: React.CSSProperties = {
    lineHeight: '1.5',
    fontSize: `var(--font-size-${fontSize})`,
    fontWeight,
    color: color === 'black' ? 'var(--color-black)' : color,
    textDecoration: 'none',
    padding: 'var(--space-1)',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
  };
  
  return (
    <a 
      href={href} 
      style={style}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-green)';
        e.currentTarget.style.color = 'var(--color-black)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = color === 'black' ? 'var(--color-black)' : color;
      }}
    >
      {children}
    </a>
  );
};

interface NavListProps {
  href: string;
  title: string;
  color?: string;
  width?: string;
}

export const NavList: React.FC<NavListProps> = ({ href, title, color, width }) => {
  return (
    <Box width={width}>
      <NavLink color={color} href={href}>
        {title}
      </NavLink>
    </Box>
  );
};

export default Nav;