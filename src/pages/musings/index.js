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
  Prose,
  Post,
  PostItem,
} from '../../components'
import Post2019_12_25 from './post_2019-12-25.mdx'
import Post2020_02_16 from './post_2020-02-16.mdx'
import Post2020_03_14 from './post_2020-03-14.mdx'
import Post2020_03_17 from './post_2019-03-17.mdx'

export default () =>
  <Layout>
    <Box ml={['10%','0']}>
      <Container mt={5} mb={2}>
      <Box width={[1,1,1,2/3]} pl={2} pr={3} mb={5}>
          <LeadText>
            <LinkDark href='http://broccolini.net'>
              broccolini
            </LinkDark>
          </LeadText>
          <Heading1 mb={1}>
            Musings
          </Heading1>
          <Text fontFamily='mono' fontSize={2}>Thoughts, explorations, daydreaming, and reflection</Text>
        </Box>
        <Box width={[1,1,1,2/3]} pl={2} pr={3}>
          <PostItem>
            <Post2020_03_17 />
          </PostItem>
          <PostItem>
            <Post2020_03_14 />
          </PostItem>
          <PostItem>
            <Post2020_02_16 />
          </PostItem>
          <PostItem>
            <Post2019_12_25 />
          </PostItem>
        </Box>      
      </Container>
    </Box>
  </Layout>
