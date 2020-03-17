import React from 'react'
import Layout from '../../layout'
import {
  Box,
  Flex,
  Card,
  Container,
  GradientBox,
  Heading,
  Heading1,
  HeadingAccent,
  LeadText,
  Link,
  LinkDark,
  Media,
  MediaSmall,
  Nav,
  NavList,
  Text,
  VideoCard,
  StreamItem,
} from '../../components'
import Post2019_12_25 from './post_2019-12-25.mdx'
import Post2020_02_16 from './post_2020-02-16.mdx'
import Post2020_03_14 from './post_2020-03-14.mdx'

export default () =>
  <Layout>
    <Box ml={['10%','0']}>
      <Container mt={5} mb={2}>
        <Box width={[1,1,1,2/3]} pl={2} pr={3}>
	  <Post2020_03_14 />
	  <Post2020_02_16 />
	  <Post2019_12_25 />
        </Box>      
      </Container>
    </Box>
  </Layout>
