import React from 'react';

interface TextProps {
  children: React.ReactNode;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: string | number;
  color?: string;
  mb?: number;
  mt?: number;
  pr?: number | number[];
  pl?: number;
  py?: number;
  id?: string;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ 
  children, 
  fontFamily, 
  fontSize, 
  fontWeight,
  color,
  mb, 
  mt,
  pr,
  pl,
  py,
  id,
  className = ''
}) => {
  const style: React.CSSProperties = {
    lineHeight: '1.5',
    margin: 0,
  };
  
  if (fontFamily === 'mono') style.fontFamily = 'var(--font-mono)';
  else if (fontFamily === 'serif') style.fontFamily = 'var(--font-serif)';
  else if (fontFamily) style.fontFamily = fontFamily;
  
  if (fontSize !== undefined) style.fontSize = `var(--font-size-${fontSize})`;
  if (fontWeight) style.fontWeight = fontWeight;
  if (color) style.color = color === 'black' ? 'var(--color-black)' : color;
  if (mb !== undefined) style.marginBottom = `var(--space-${mb})`;
  if (mt !== undefined) style.marginTop = `var(--space-${mt})`;
  if (pl !== undefined) style.paddingLeft = `var(--space-${pl})`;
  if (py !== undefined) {
    style.paddingTop = `var(--space-${py})`;
    style.paddingBottom = `var(--space-${py})`;
  }
  
  if (pr !== undefined) {
    if (Array.isArray(pr)) {
      style.paddingRight = `var(--space-${pr[0]})`;
    } else {
      style.paddingRight = `var(--space-${pr})`;
    }
  }
  
  return (
    <div style={style} id={id} className={className}>
      {children}
    </div>
  );
};

interface HeadingProps extends TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading: React.FC<HeadingProps> = ({ as = 'h2', fontSize = 5, fontWeight = 700, ...props }) => {
  const Component = as;
  
  const style: React.CSSProperties = {
    lineHeight: '1.25',
    fontWeight,
    fontSize: `var(--font-size-${fontSize})`,
    margin: 0,
  };
  
  if (props.mb !== undefined) style.marginBottom = `var(--space-${props.mb})`;
  if (props.mt !== undefined) style.marginTop = `var(--space-${props.mt})`;
  if (props.color) style.color = props.color === 'black' ? 'var(--color-black)' : props.color;
  
  return (
    <Component style={style} id={props.id} className={props.className}>
      {props.children}
    </Component>
  );
};

export const Heading1: React.FC<HeadingProps> = (props) => {
  return <Heading as="h1" fontSize={8} {...props} />;
};

export const HeadingAccent: React.FC<HeadingProps> = (props) => {
  return <Heading fontSize={6} {...props} />;
};

export const SubHeading: React.FC<HeadingProps> = (props) => {
  return <Heading as="h3" fontSize={4} {...props} />;
};

export const LeadText: React.FC<TextProps> = (props) => {
  return <Text fontSize={6} fontWeight={700} {...props} />;
};

export default Text;