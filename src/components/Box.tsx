import React from 'react';

interface BoxProps {
  children?: React.ReactNode;
  width?: string | string[];
  p?: number | number[];
  px?: number | number[];
  py?: number | number[];
  pl?: number | number[];
  pr?: number | number[];
  pt?: number | number[];
  pb?: number | number[];
  m?: number | number[];
  mx?: number | number[];
  my?: number | number[];
  ml?: number | number[];
  mr?: number | number[];
  mt?: number | number[];
  mb?: number | number[];
  bg?: string;
  color?: string;
  fontSize?: number | number[];
  fontFamily?: string;
  fontWeight?: string | number;
  lineHeight?: string | number;
  textAlign?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

const convertToCSS = (value: any, property: string): string => {
  if (Array.isArray(value)) {
    // Handle responsive arrays - for now just use the first value
    return convertToCSS(value[0], property);
  }
  
  if (typeof value === 'number') {
    if (property.includes('font-size') || property.includes('fontSize')) {
      return `var(--font-size-${value})`;
    }
    if (property.includes('spacing') || ['p', 'px', 'py', 'pl', 'pr', 'pt', 'pb', 'm', 'mx', 'my', 'ml', 'mr', 'mt', 'mb'].some(p => property.includes(p))) {
      return `var(--space-${value})`;
    }
    return `${value}px`;
  }
  
  if (property === 'color' || property === 'bg') {
    if (value === 'black') return 'var(--color-black)';
    if (value === 'white') return 'var(--color-white)';
    if (value === 'blue') return 'var(--color-blue)';
    // Add more color mappings as needed
  }
  
  if (property === 'fontFamily') {
    if (value === 'mono') return 'var(--font-mono)';
    if (value === 'serif') return 'var(--font-serif)';
    if (value === 'body') return 'var(--font-body)';
  }
  
  return value;
};

export const Box: React.FC<BoxProps> = ({ 
  children, 
  width, 
  p, px, py, pl, pr, pt, pb,
  m, mx, my, ml, mr, mt, mb,
  bg, color, fontSize, fontFamily, fontWeight, lineHeight, textAlign,
  id, className,
  style: propStyle,
  ...props 
}) => {
  const style: React.CSSProperties = { ...propStyle };
  
  if (width) style.width = Array.isArray(width) ? width[0] : width;
  if (p !== undefined) style.padding = convertToCSS(p, 'padding');
  if (px !== undefined) { style.paddingLeft = convertToCSS(px, 'padding'); style.paddingRight = convertToCSS(px, 'padding'); }
  if (py !== undefined) { style.paddingTop = convertToCSS(py, 'padding'); style.paddingBottom = convertToCSS(py, 'padding'); }
  if (pl !== undefined) style.paddingLeft = convertToCSS(pl, 'padding');
  if (pr !== undefined) style.paddingRight = convertToCSS(pr, 'padding');
  if (pt !== undefined) style.paddingTop = convertToCSS(pt, 'padding');
  if (pb !== undefined) style.paddingBottom = convertToCSS(pb, 'padding');
  
  if (m !== undefined) style.margin = convertToCSS(m, 'margin');
  if (mx !== undefined) { style.marginLeft = convertToCSS(mx, 'margin'); style.marginRight = convertToCSS(mx, 'margin'); }
  if (my !== undefined) { style.marginTop = convertToCSS(my, 'margin'); style.marginBottom = convertToCSS(my, 'margin'); }
  if (ml !== undefined) style.marginLeft = convertToCSS(ml, 'margin');
  if (mr !== undefined) style.marginRight = convertToCSS(mr, 'margin');
  if (mt !== undefined) style.marginTop = convertToCSS(mt, 'margin');
  if (mb !== undefined) style.marginBottom = convertToCSS(mb, 'margin');
  
  if (bg) style.backgroundColor = convertToCSS(bg, 'bg');
  if (color) style.color = convertToCSS(color, 'color');
  if (fontSize !== undefined) style.fontSize = convertToCSS(fontSize, 'fontSize');
  if (fontFamily) style.fontFamily = convertToCSS(fontFamily, 'fontFamily');
  if (fontWeight) style.fontWeight = fontWeight;
  if (lineHeight) style.lineHeight = lineHeight;
  if (textAlign) style.textAlign = textAlign as any;
  
  return (
    <div style={style} id={id} className={className} {...props}>
      {children}
    </div>
  );
};

export const Flex: React.FC<BoxProps> = (props) => {
  return <Box {...props} style={{ display: 'flex', ...props.style }} />;
};

export const Text: React.FC<BoxProps> = (props) => {
  return <Box as="span" {...props} />;
};