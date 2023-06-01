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
  SubHeading,
  VideoCard,
  LinkLight,
} from '../components'

export default () =>
  <Layout>
    <Box ml={['10%','0']}>
      <Container mt={[5,6,6,'20%']} mb={2}>
        <Box width={[1,1,1,2/3]} pl={2} pr={3}>
          <LeadText>
            <LinkDark href='http://broccolini.net'>
              broccolini
            </LinkDark>
          </LeadText>
          <Heading1>
            Diana Mounter
          </Heading1>
        </Box>
      </Container>
      <Container mb={[3,4,5]}>
          <Box width={[1,1,1,3/4,1/2]}>
            <Text fontFamily='mono' fontSize={2} pl={2} pr={[2,2,2,3,3]}>
            I’m a designer with an interest in systems thinking, <LinkDark href='https://runemadsen.com/' title='Coined by Rune Madsen'>code as a material</LinkDark>, and inclusive design. I work remotely for GitHub as their Head of Design. I live in Brooklyn, NY, with my husband and two cats. You are a valuable design le
            </Text>
          </Box>
      </Container>

      <Container mb={[5,6,7]}>
        <Box py={2} ml={2}>
          <Nav>
          <NavList width={1/5}
              color='black'
              href='#work'
              title='Work'
            />
            <NavList
              href='#talks'
              title='Talks'
            />
            <NavList width={1/5}
              color='black'
              href='#writing'
              title='Writing'
            />
            <NavList
              href='#side-projects'
              title='Side projects'
            />
            <NavList
              href='#interviews'
              title='Interviews'
            />
          </Nav>
        </Box>
      </Container>

      <Flex>
        <Container mb={4}>
          <Box ml={2}>
            <HeadingAccent mb={4} id='work'>
              Work
            </HeadingAccent>
            <Box width={[1,1,1,3/4,1/2]}>
            
            <Heading fontSize="3" mb={1}>GitHub: Dec 2015 - present</Heading>
            <Text fontFamily='mono' fontSize={2} mb={2} pr={[2,2,2,3,3]}>
            As GitHub's Head of Design I lead a cross-functional team including Product Design, Customer Research, Brand and Marketing Design, Design Infrastructure, Design Engineering, and Design Operations. My team is responsible for the end-to-end user experience of GitHub's products, brand direction for key events such as <Link href='https://twitter.com/broccolini/status/1590889579389005824'>GitHub Universe</Link>, and delivering compelling launch campaigns such as <Link href='https://youtu.be/4RfD5JiXt3A'>Copilot X</Link>. 
            </Text>
            <Text fontFamily='mono' fontSize={2} mb={2} pr={[2,2,2,3,3]}>
            Since joining GitHub in 2015, I led the <Link href='http://primer.style/'>Primer</Link> design systems team and developed Primer from a CSS framework to mature design system of components, documentation, and tooling. Under my leadership, the team also shipped a significant <Link href='https://twitter.com/broccolini/status/1265746006974611461?s=20'>visual rededesign</Link> and the biggest <Link href='https://github.blog/changelog/2020-06-23-design-updates-to-repositories-and-github-ui/'>changes to the repository homepage</Link> in 5+ years. In 2020, my team delivered one of GitHub's most highly requested features – <Link href='https://twitter.com/github/status/1336362679506784256'>Dark mode</Link>.
            </Text>
            <Text fontFamily='mono' fontSize={2} mb={3} pr={[2,2,2,3,3]}>
            In the first half of 2022 we were in a hyper-growth phase and I grew the team by 42%, onboarding designers, researchers, design engineers, managers and directors across the organization. I've developed the team’s practices and processes, and built new specialist design teams such as growth design and accessibility design. Through my role leading design systems and now leading the Design Org, I've also been working to build a more <Link href='https://github.blog/2023-05-17-designs-journey-towards-accessibility/'>inclusive design culture</Link> and experience for our customers.
            </Text>
            <Heading fontSize="3" mb={1}>Etsy: Dec 2013 - Dec 2015</Heading>
            <Text fontFamily='mono' fontSize={2} mb={3} pr={[2,2,2,3,3]}>
            Prior to joining GitHub, I spent several years at Etsy, where I worked on <Link href='https://www.etsy.com/codeascraft/rebuilding-the-foundation-of-etsy-seller-tools/'>re-designing seller tools</Link>, developed the design onboarding process, taught new designers how to push code, and was part of a small team that <Link href='http://slides.com/dianamounter/building-scalable-design#/'>built a new design system</Link>. 
            </Text>
            <Text fontFamily='mono' fontSize={2} mb={4} pr={[2,2,2,3,3]}>
            Check out my <Link href='https://www.linkedin.com/in/dianamounter/'>LinkedIn</Link> profile for more details on my work history. 
            </Text>
          </Box>
          </Box>
        </Container>
      </Flex>

      <Flex>
        <Container>
          <HeadingAccent mb={4} ml={2} id='talks'>
            Talks
          </HeadingAccent>
        </Container>
      </Flex>
      <Flex>
        <Container mb={4}>
        <Box ml={2}>
        <Box mb={2} width={[1,1,1,3/4,1/2]}>
            <Text fontFamily='mono' fontSize={2} mb={2} pr={[2,2,2,3,3]}>
            I speak at design and technology events across the U.S. and around the world. I am motivated by the opportunity to share my experiences and learnings with others and to help others grow in their careers. Many of my talks have been focused on design systems, but I also speak about leadership, design culture, and inclusive design. 
            </Text>
          </Box>
        </Box>
        </Container>
      </Flex>
      <Container mb={[4]}>
        <Box ml={2} bg='black'>
            <Box width={[1,3/4,1,2/3]} p={[2,2,2,3]} pr={[2,2,2,2]}>
              <VideoCard
                src='dsl.png'
                href='https://youtu.be/hftvh9SNEZQ'
                title='Design System APIs @ Design Systems London'
                />
            </Box>
          </Box>
        </Container>

        <Flex>
          <Container mb={4}>
          
          <Box ml={2}>
            <Box width={[1,1,1,2/3,1/2]} pr={[2,2,2,3,3]}>
              <Heading fontSize="4" mb={1}>Next speaking at:</Heading>
              <Link href='https://www.designconference.aiga.org/event/craft'>
              <SubHeading>Figma Config - San Francisco, June 2023</SubHeading>
              </Link>

              <Heading fontSize="4" pt={4} mb={3}>A selection of my talks:</Heading>

              <MediaSmall
              href='https://youtu.be/_-8RKnpwu9U'
              title='The Diff After Dark Mode'
              text='Clarity Conf, October 2021'
              />
              <MediaSmall
              href='https://reactconfau.com/talks/themeability-is-the-path-to-dark-mode?from=schedule'
              title='Themeability is the path to dark mode'
              text='ReactConf AU, February 2020'
              />
              <MediaSmall
              href='https://vimeo.com/showcase/6133041/video/351297451'
              title='The Secret Lives of Color Systems'
              text='Smashing Conf Toronto, June 2019'
              />
              <MediaSmall
              href='https://youtu.be/K3Aycyfgicc'
              title='Color from Chaos'
              text='AIGA Design Conference, April 2019'
              />
              <MediaSmall
              href='https://github.com/broccolini/design-systems-and-react'
              title='Design Systems and React'
              text='ZEIT React Meetup, August 2018'
              />
              <MediaSmall
              href='https://www.rethinkhq.com/videos/you-vs-the-design-system-they-told-you-not-to-worry-about-diana-mounter-github'
              title='You vs. the design system they told you not to worry about'
              text='RETHINK Design Systems, June 2018'
              />
              <MediaSmall
              href='https://www.webconf.asia/speakers'
              title='Interaction of Color Systems'
              text='Web Conf Asia, June 2018'
              />
              <MediaSmall
              href='https://youtu.be/AbpS3Z3xXE0'
              title='Interaction of Color Systems'
              text='CSS Conf Australia, March 2018'
              />
              <MediaSmall
              href='https://youtu.be/Hx02SaL_IH0'
              title='Design Systems: when and how much?'
              text='Active Ingredients, April 2017'
              />
              <MediaSmall
              href='http://aigany.org/event/real-talk-about-design-systems/'
              title='Panel: Real Talk About Design Systems'
              text='AIGA, February 2017'/>
              <MediaSmall
              href='http://slides.com/dianamounter/building-scalable-design#/'
              title='Building Scalable Design'
              text='Design Driven, November 2014'/>
              
            </Box>
          </Box>
        </Container>
      </Flex>
      <Flex>
        <Container mb={4}>
          <Box ml={2}>
            <HeadingAccent mb={4} id='writing'>
              Writing
            </HeadingAccent>
            <Box width={[1,1,1,2/3,1/2]} pr={[2,2,2,3,3]}>
            <MediaSmall
              href='https://github.blog/2023-05-17-designs-journey-towards-accessibility/'
              title='Design’s journey towards Accessibility'
              text='May, 2023'/>
              <MediaSmall
              href='https://medium.com/@broccolini/design-systems-at-github-c8e5378d2542'
              title='Design Systems at GitHub'
              text='July, 2018'/>
              <MediaSmall
              href='https://hackdesign.org/lessons/96-design-system-fundamentals'
              title='Hack Design: Design System Fundamentals'
              text='This lesson introduces you to the fundamentals of building design systems.'/>
              <MediaSmall
              href='https://the-pastry-box-project.net/diana-mounter/2018-january-25'
              title='The Peacock’s Demo: a design fable'
              text='January, 2018'/>
              <MediaSmall
              href='https://www.designbetter.co/design-systems-handbook/putting-design-system-practice'
              title='Design Systems Handbook: putting your design system into practice'
              text='An online and printed handbook on design systems.'/>
              <MediaSmall
              href='http://www.creativebloq.com/web-design/empower-designers-code-41619919'
              title='How to Empower Designers to Code'
              text='April, 2016'/>
              <MediaSmall
              href='https://codeascraft.com/2015/02/05/rebuilding-the-foundation-of-etsy-seller-tools/'
              title='Rebuilding the Foundation of Etsy’s Seller Tools'
              text='February, 2015'/>
              <MediaSmall
              href='https://medium.com/@broccolini/embracing-change-in-your-workplace-544ec73db0c8'
              title='Embracing Change in Your Workplace'
              text='January, 2015'/>
              <MediaSmall
              href='https://medium.com/@broccolini/move-fast-and-make-something-of-your-life-34b7feabb86f'
              title='Move Fast and Make Something (of your life)'
              text='June, 2013'/>
            </Box>
          </Box>
        </Container>
      </Flex>
      <Box mb={4}>
        <Container>
          <HeadingAccent mb={4} ml={2} id='side-projects'>
            Side projects
          </HeadingAccent>
                    
            <Box ml={2} mb={4} width={[1,1,1,3/4,1/2]}>
            <Text fontFamily='mono' fontSize={2} mb={2} pr={[2,2,2,3,3]}>
            Most of these side projects are no longer active, but sometimes I like to look back at them and remember what inspired me to do them at the time. 
            </Text>
            </Box>
        </Container>
        <Flex mb={3} ml={['0','20%','0','0']} flexWrap='wrap'>
          <Box width={[1,3/4,1/3,1/4]} px={2}>
          </Box>
          <Box width={[1,3/4,1/3,1/4]} px={2} mb={[3,3,4]}>
            <Card
            src='50-shades.svg'
            href='http://broccolini.net/50shadesofblk/'
            title='50 Shades of black'
            />
          </Box>
          <Box width={[1,3/4,1/3,1/4]} px={2} mb={[3,3,4]}>
            <Card
            src='wkyuan.svg'
            href='http://whatkeepsyouupatnight.io/'
            title='What keeps you up at night?'
            />
          </Box>
          <Box width={[1,3/4,1/3,1/4]} px={2} mb={[3,3,4]}>
            <Card
            src='swiss.svg'
            href='http://broccolini.net/swiss/'
            title='Swiss Jekyll theme'
            />
          </Box>
          <Box width={[1,3/4,1/3,1/4]} px={2} mb={[3,3,4]}>
            <Card
            src='athena.svg'
            href='http://broccolini.net/athena/'
            title='Athena Jekyll theme'
            />
          </Box>
          <Box width={[1,3/4,1/3,1/4]} px={2} mb={[3,3,4]}>
            <Card
            src='soundsradcakes.svg'
            href='http://soundsradcakes.com/'
            title='Soundsradcakes'
            />
          </Box>
          <Box width={[1,3/4,1/3,1/4]} px={2} mb={[3,3,4]}>
            <Card
            src='robotodex.svg'
            href='http://robotodex.com/'
            title='Robotodex'
            />
          </Box>
        </Flex>
      </Box>
      <Flex>
        <Container mb={5}>
          <Box ml={2}>
            <HeadingAccent mb={4} id='interviews'>
            Interviews
            </HeadingAccent>
            <Box width={[1,1,1,2/3,1/2]} pr={[2,2,2,3,3]}>
              <MediaSmall
              href='https://reactpodcast.com/25'
              title='React Podcast: Make Brilliant Messes'
              text='In this episode with Emily Plummer, we talk with Chantastic about Rails, Lerna, monorepos, Figma, component APIs, and the importance of supporting designers and engineers with your design system.'/>
              <MediaSmall
              href='https://spec.fm/podcasts/design-details/141132'
              title='Design Details: Cats & Design Systems'
              text='In this episode with Brent Jackson, we dig into the tools and workflows we’ve developed when working on systems, what we’re excited about in design systems, and talk about the technologies that are changing the way we build.'/>
              <MediaSmall
              href='https://www.designbetter.co/podcast/diana-mounter'
              title='Design Better Podcast: from design silos to design system'
              text='From design silos to design systems. I talk with Eli Woolery and Aaron Walter from InVision about navigating the path from style guide contributor to full-time design systems manager.'/>
              <MediaSmall
              href='http://journalmetro.com/opinions/urelles/1500030/diana-mounter-lexperte-de-la-couleur-sur-le-web/'
              title='Interview avec Chloe Freslon pour URelles.com'
              text='De travailler avec la couleur dans l’imprimé et sur le web, les défis techniques, et pourquoi il est difficile de devenir un expert en couleur.'/>
              <MediaSmall
              href='http://www.fullstackradio.com/75'
              title='Full Stack Radio, episode 75'
              text='In this interview I talk about using design systems to tame legacy CSS, and how GitHub is using utility classes to make it easier to build more consistent, maintainable user interfaces.'/>
              <MediaSmall
              href='https://www.uxpin.com/studio/blog/githubs-design-system-interview-diana-mounter/'
              title='UXPin interview'
              text='In this interview I talk about lessons learned in building and maintaining GitHub’s design system, Primer.'/>
              <MediaSmall
              href='http://spec.fm/podcasts/design-details/19431'
              title='Design Details:  Itchy Feet'
              text='In this episode I talk about my journey to Etsy, the startup bus, why Git is a valuable tool for designers and the hardest part about onboarding designers.'/>
            </Box>
          </Box>
        </Container>
      </Flex>
    </Box>
    <GradientBox>
      <Container>
        <Box ml={['10%','0']}>
          <Text fontWeight='500' fontSize={[1,2,2,2]} py={2} pl={2} pr={[2,2,2,3,3]}>
          <LinkDark href='/about/' mr={2}>About</LinkDark>
          <LinkDark href='/reading/' mr={2}>Reading</LinkDark>
          <LinkDark href='https://twitter.com/broccolini' mr={2}>Twitter</LinkDark>
          <LinkDark href='https://github.com/broccolini' mr={2}>GitHub</LinkDark>
          <LinkDark href='https://www.linkedin.com/in/dianamounter/'>LinkedIn</LinkDark>
          </Text>
        </Box>
      </Container>
    </GradientBox>
  </Layout>
