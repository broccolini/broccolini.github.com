import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`container ${className}`} style={{
      width: '100%',
      marginLeft: 0,
    }}>
      {children}
    </div>
  );
};

export default Container;