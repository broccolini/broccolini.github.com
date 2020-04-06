import React from 'react'
import Layout from '../layout'
import {
  Box,
  Container,
  Heading1,
  SubHeading,
  HeadingAccent,
  LeadText,
  LinkDark,
  Link,
  Text,
  ImageFit,
  GradientBox,
} from '../components'

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
              Diana Mounter
          </Heading1>
          <Text fontFamily='mono' fontSize={2} mb={5}>
          I’m a designer with an interest in systems thinking, <Link href='https://runemadsen.com/' title='Coined by Rune Madsen'>code as a material</Link>, and inclusive design. I work remotely for GitHub as their Director of Design Infrastructure, and organize the <Link href='http://designsystems.nyc'>Design Systems Coalition NYC</Link> meetup. Living in Brooklyn, NY, and currently staying inside.
          </Text>
          <HeadingAccent mb={3}>
            A bit about me
          </HeadingAccent>
          <Text fontFamily='mono' fontSize={2}  mb={3}>
          I grew up in the UK (Dorset and Hampshire mostly) and I started my career in print design in the UK. I lived in Paris for a few magical years when I was a teenager, where I think I caught the itch to travel. In my early 20's I went back-packing to Australia to see how I'd "survive" on my own, and ended up living there for ~8 years, and became a citizen. While I was there I worked in a state government organization for 5 years and formed a community and conference series for local government web developers. My desire to do meaningful work took me to a small design agency in Syndey that specialized in environmental and social change projects, and I got to do some of my best work and really grow as a designer.
          </Text> 
          
          <Text fontFamily='mono' fontSize={2}  my={3}>
          After taking a trip to the U.S. in 2011 to compete in the Startup Bus hackathon, I moved to San Francisco and got to experience the wonders of the Silicon Valley tech scene. I worked for a big data company called Vast, and then and iOS app startup called Snapguide.
          </Text> 
          
          <Text fontFamily='mono' fontSize={2}  mb={4}>
          In 2013 I moved to NYC for a job with Etsy, where I helped re-design their seller tools, taught new designers how to push code, and was part of a small team that built a new design system.
          </Text>

          <ImageFit width='66.6%' src="/map.png" />
      
          <Text fontFamily='mono' fontSize={2}  my={4}>
          I still live in Brooklyn with my cat, Leia, and my husband, Jackson, working remotly for GitHub. I never had a plan to live in NYC, but there is something about the place that has kept me here, and—at the moment at least—it feels like home. Don't ask me which place I've lived I think is best, I believe in living in the moment. Wherever I am right now is best place to me ;)
          </Text>
          
          
        </Box>
      </Container>
    </Box>
    <GradientBox>
      <Container>
        <Box ml={['10%','0']}>
          <Text fontWeight='500' fontSize={3} py={3} pl={2} pr={[2,2,2,3,3]}>
          <LinkDark href='https://twitter.com/broccolini' mr={2}>Twitter</LinkDark>
          <LinkDark href='https://github.com/broccolini' mr={2}>GitHub</LinkDark>
          <LinkDark href='https://medium.com/@broccolini' mr={2}>Medium</LinkDark>
          <LinkDark href='https://www.linkedin.com/in/dianamounter/' mr={2}>LinkedIn</LinkDark>
          </Text>
        </Box>
      </Container>
    </GradientBox>
  </Layout>