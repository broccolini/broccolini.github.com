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
import Post2019_04_01 from './post_2019-04-01.mdx'
import Post2019_04_02 from './post_2019-04-02.mdx'
import Post2019_04_03 from './post_2019-04-03.mdx'
import Post2019_07_01 from './post_2019-07-01.mdx'
import Post2019_09_28 from './post_2019-09-28.mdx'
import Post2019_11_19 from './post_2019-11-19.mdx'
import Post2019_12_25 from './post_2019-12-25.mdx'
import Post2020_02_08 from './post_2020-02-08.mdx'
import Post2020_03_14 from './post_2020-03-14.mdx'
import Post2020_03_17 from './post_2020-03-17.mdx'

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
            <Post2020_02_08 />
          </PostItem>
          <PostItem>
            <Post2019_12_25 />
          </PostItem>
          <PostItem>
            <Post2019_11_19 />
          </PostItem>
          <PostItem>
            <Post2019_09_28 />
          </PostItem>
          <PostItem>
            <Post2019_07_01 />
          </PostItem>
          <PostItem>
            <Post2019_04_03 />
          </PostItem>
          <PostItem>
            <Post2019_04_02 />
          </PostItem>
          <PostItem>
            <Post2019_04_01 />
          </PostItem>
        </Box>      
      </Container>
    </Box>
  </Layout>
