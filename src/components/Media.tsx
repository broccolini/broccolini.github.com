import React from 'react';
import { Box } from './Box';
import { Heading, Text } from './Typography';
import { Link } from './Link';

interface MediaSmallProps {
  href: string;
  title: string;
  text: string;
}

export const MediaSmall: React.FC<MediaSmallProps> = ({ href, title, text }) => {
  return (
    <Box mb={2}>
      <Link href={href}>
        <Heading as="h3" fontSize={2} mb={1}>
          {title}
        </Heading>
      </Link>
      <Text fontFamily="mono" fontSize={2}>
        {text}
      </Text>
    </Box>
  );
};

interface GradientBoxProps {
  children: React.ReactNode;
}

export const GradientBox: React.FC<GradientBoxProps> = ({ children }) => {
  const gradientStyle: React.CSSProperties = {
    backgroundImage: 'linear-gradient(57.09deg, rgba(245, 250, 28, 0.9) 0%, rgba(252, 255, 101, 0) 37.99%), linear-gradient(162.34deg, #6AFFC9 25.23%, rgba(70, 255, 188, 0) 70.88%), linear-gradient(95.09deg, #FCFF6D 1.14%, rgba(101, 220, 176, 0.86) 33.44%, rgba(253, 125, 225, 0.86) 62.8%, rgba(211, 155, 255, 0.58) 99.02%)',
    margin: 0,
  };
  
  return (
    <Box style={gradientStyle}>
      {children}
    </Box>
  );
};

export default MediaSmall;