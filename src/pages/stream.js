import React from 'react'
import Layout from '../layout'
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
} from '../components'

export default () =>
  <Layout>
    <Box ml={['10%','0']}>
      <Container mt={5} mb={2}>
        <Box width={[1,1,1,2/3]} pl={2} pr={3}>
          <LeadText>
            <LinkDark href='http://broccolini.net'>
              broccolini
            </LinkDark>
          </LeadText>
          <Heading1>
            Stream ↝
          </Heading1>
          <Text fontSize={3}>Broccolini’s stream of consciousness</Text>
        </Box>      
      </Container>
      <Container mt={5} mb={2}>
        <Box width={[1,1,1,2/3]} pl={2} pr={3}>
          <StreamItem p={2}>
            <Card
              src='stream/gradients.png'
              title='Gradients'
            />
          </StreamItem>
          <StreamItem p={2}>
            <Text>
              Perfection is the enemy of good.
            </Text>
          </StreamItem>
          <StreamItem p={2}>
            <Card
              src='stream/type-space-color.png'
              title='Theme: typography, spacing, color'
            />
          </StreamItem>
        </Box>      
      </Container>
    </Box>
  </Layout>