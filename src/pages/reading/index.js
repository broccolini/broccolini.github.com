import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../layout'
import {
  Box,
  Container,
  Heading1,
  LeadText,
  LinkDark,
  Text,
  PostItem,
} from '../../components'

// todo: filter by path if using MDX elsewhere in the site
export const query = graphql`
query {
  posts: allMdx(
    sort: {
      fields: frontmatter___date,
      order: DESC
    },
    filter: {
      fields: {
        category: {
          eq: "reading"
        }
      }
    }
  ) {
    nodes {
      id
      body
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
}
`

export default ({
  data,
}) => {
  const posts = data.posts.nodes

  return (
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
              Reading
            </Heading1>
            <Text fontFamily='mono' fontSize={2}>Fiction books · Non-fiction books · Online books · Articles</Text>
          </Box>
          <Box width={[1,1,1,2/3]} pl={2} pr={[1,2,3,3]}>
            {posts.map(post => (
              <PostItem key={post.id}>
                <pre>{post.frontmatter.date}</pre>
                <MDXRenderer
                  children={post.body}
                />
              </PostItem>
            ))}
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}
