import React from 'react';
import { Box } from './Box';
import { Heading, SubHeading } from './Typography';
import { Link } from './Link';

interface CardProps {
  href: string;
  src: string;
  title: string;
}

export const Card: React.FC<CardProps> = ({ href, src, title }) => {
  return (
    <Box width="100%">
      <Link href={href}>
        <img 
          src={src} 
          alt={title}
          style={{ 
            width: '100%', 
            height: 'auto',
            display: 'block'
          }} 
        />
        <SubHeading mt={2}>{title}</SubHeading>
      </Link>
    </Box>
  );
};

interface VideoCardProps {
  href: string;
  src: string;
  title: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({ href, src, title }) => {
  return (
    <Box width="100%">
      <Link href={href}>
        <img 
          src={src} 
          alt={title}
          style={{ 
            width: '100%', 
            height: 'auto',
            objectFit: 'cover',
            display: 'block'
          }} 
        />
        <Heading mt={2} fontSize={4} fontWeight="700">
          {title}
        </Heading>
      </Link>
    </Box>
  );
};

export default Card;