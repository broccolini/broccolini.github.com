import React from 'react'
import Layout from '../layout'
import {
  Box,
  Flex,
  Card,
  Container,
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
      <Container mb={[5,6,7]}>
        <Box ml={2} bg='yellow'>
          <Box width={[1,1,1,2/3,1/2]}>
            <Text py={3} pl={3} pr={[2,2,2,3,3]}>
            I’m a designer with a passion for the web. I specialize in design systems and have a background in user-centered design. Currently leading design operations & systems at GitHub and organizer for <LinkDark href='http://designsystems.nyc'>Design Systems Coalition NYC</LinkDark>. I write and speak about design, code, and working with people.  Living in Brooklyn, NY, and loving it.
            </Text>
          </Box>
        </Box>
      </Container>

      <Container mb={6}>
        <Box py={2} ml={2}>
          <Nav>
            <NavList width={1/5}
              href='#writing'
              title='Writing'
            />
            <NavList
              href='#highlights'
              title='Highlights'
            />
            <NavList
              href='#talks'
              title='Talks'
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
            <HeadingAccent mb={4} id='writing'>
              Writing
            </HeadingAccent>
            <Box width={[1,1,1,2/3,1/2]} pr={[2,2,2,3,3]}>
              <Media
              href='https://medium.com/@broccolini/design-systems-at-github-c8e5378d2542'
              title='Design Systems at GitHub'
              text='For years GitHub designers have documented UI patterns and shared common styles, but it wasn’t until 2016 that the design systems team was formed. This post shares a brief history of how the team grew, what we’ve been working on, and what’s next.'/>
              <Media
              href='https://hackdesign.org/lessons/96-design-system-fundamentals'
              title='Hack Design: Design System Fundamentals'
              text='With so many examples of design systems out there, it can be hard to know where to start or know what is right for your company. This lesson introduces you to the fundamentals of building design systems.'/>
              <Media
              href='https://the-pastry-box-project.net/diana-mounter/2018-january-25'
              title='The Peacock’s Demo: a design fable'
              text='I’m contributing to The Pastry Box Project by writing design fables. The fables I choose to write about are inspired by my own experiences as a designer and working in the tech industry.'/>
              <Media
              href='https://www.designbetter.co/design-systems-handbook/putting-design-system-practice'
              title='Design Systems Handbook: putting your design system into practice'
              text='This chapter focusses on how to encourage adoption of your design system, publishing and distribution methods, and considerations for making your design system public vs private.'/>
              <Media
              href='http://www.creativebloq.com/web-design/empower-designers-code-41619919'
              title='How to Empower Designers to Code'
              text='For many designers the best way to learn front-end development is on the job. Many companies want to attract designers who code, but may fall short of providing enough support.'/>
              <Media
              href='https://codeascraft.com/2015/02/05/rebuilding-the-foundation-of-etsy-seller-tools/'
              title='Rebuilding the Foundation of Etsy’s Seller Tools'
              text='How we redesigned the seller-facing web app, and built a new style guide in the process. Written for Etsy’s Code as Craft blog, in collaboration with coworkers from the shop management team.'/>
              <Media
              href='https://medium.com/@broccolini/embracing-change-in-your-workplace-544ec73db0c8'
              title='Embracing Change in Your Workplace'
              text='The biggest challenges you face in a workplace are often not in how to build the product but in how to build a healthy work environment.'/>
              <Media
              href='https://medium.com/@broccolini/embracing-change-in-your-workplace-544ec73db0c8'
              title='Move Fast and Make Something (of your life)'
              text='I spent the majority of my first trip to America looking at a computer screen, while sat on a bus that traveled from San Francisco to Austin. It turned out to be a life-changing experience.'/>
            </Box>
          </Box>
        </Container>
      </Flex>

      <Box mb={5}>
        <Container>
          <HeadingAccent mb={4} ml={2} id='highlights'>
            Highlights
          </HeadingAccent>
          <Flex ml={2} mb={3} wrap>
            <Box width={[1, 3/4, 1/2, 1/3]} pr={'24px'} mb={[3,3,4]}>
              <Card
              src='http://broccolini.net/images/dsc-yellow.png'
              href='http://designsystems.nyc/'
              title='Design Systems Coalition NYC'
              />
              <Text mt={1}>The <LinkDark href='http://design.systems/coalition/'>DSC</LinkDark> is a community for people who build design systems to share and learn from each other. I organize the NYC chapter which I formed in December 2016.
              </Text>
            </Box>
            <Box width={[1,3/4,1/2,1/3]} pl={1} pr={2} mb={[3,3,4]}>
              <Card
              src='http://broccolini.net/images/primer.svg'
              href='http://primer.github.io/'
              title='Primer design system'
              />
              <Text mt={1}>I helped form the GitHub design systems team in early 2016. I contribute to and guide the evolution of Primer, our (proudly) open-sourced design system.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Flex>
        <Container>
          <HeadingAccent mb={4} ml={2} id='talks'>
            Talks
          </HeadingAccent>
        </Container>
      </Flex>
      <Container mb={[4]}>
        <Box ml={2} bg='black'>
            <Box width={[1,3/4,1,2/3]} p={3} pr={2}>
              <VideoCard
                src='https://user-images.githubusercontent.com/334891/41517856-4c054a1c-728c-11e8-8e80-f57ed29b6780.png'
                href='https://youtu.be/AbpS3Z3xXE0'
                title='Interaction of Color Systems @ CSS Conf Australia'
                />
            </Box>
          </Box>
        </Container>
        <Flex>
          <Container mb={5}>
          <Box ml={2}>
            <Box width={[1,1,1,2/3,1/2]} pr={[2,2,2,3,3]}>
              <MediaSmall
              href='https://github.com/broccolini/design-systems-and-react'
              title='Design Systems and React'
              text='ZEIT React Meetup, August 2018'
              />
              <MediaSmall
              href='https://designsystems.rethinkhq.com/schedule/'
              title='You vs. the design system they told you not to worry about'
              text='RETHINK Design Systems, June 2018'
              />
              <MediaSmall
              href='https://www.webconf.asia/speakers'
              title='Interaction of Color Systems'
              text='Web Conf Asia, June 2018'
              />
              <MediaSmall
              href='https://designersandgeeks.com/events/colorful-journey-into-design-systems'
              title='A Colorful Journey Into Design Systems'
              text='Designers and Geeks, May 2018'
              />

              <MediaSmall
              href='https://www.webaquebec.org/programmation/interaction-of-color-systems'
              title='Interaction of Color Systems'
              text='Web A Québec, April 2018'
              />
              <MediaSmall
              href='https://youtu.be/AbpS3Z3xXE0'
              title='Interaction of Color Systems'
              text='CSS Conf Australia, March 2018'
              />
              <MediaSmall
              href='https://www.clarityconf.com/the-interaction-of-color-systems/'
              title='Interaction of Color Systems'
              text='Clarity, November 2017'
              />
              <MediaSmall
              href='https://youtu.be/FZSi1bK-BRM'
              title='Introducing Systems into Chaos'
              text='RETHINK Product Design Series, August 2017'
              />
              <MediaSmall
              href='https://youtu.be/Hx02SaL_IH0'
              title='Design Systems: when and how much?'
              text='Active Ingredients, April 2017'/>
              <MediaSmall
              href='http://firstmarkcap.com/insights/color-systems-at-github/'
              title='Color Systems'
              text='Design Driven, March 2017'/>
              <MediaSmall
              href='http://aigany.org/event/real-talk-about-design-systems/'
              title='Panel: Real Talk About Design Systems'
              text='AIGA, February 2017'/>
              <MediaSmall
              href='https://speakerdeck.com/broccolini/building-design-systems-at-github'
              title='Building Design Systems at GitHub'
              text='Design Systems Coalition NYC, December 2016'/>
              <MediaSmall
              href='https://speakerdeck.com/broccolini/competence-compassion-and-confidence'
              title='Competence, Compassion, and Confidence'
              text='Wildhacks, November 2016'/>
              <MediaSmall
              href='https://speakerdeck.com/broccolini/empowering-designers-to-code-2'
              title='Empowering Designers to Code - 2nd edition'
              text='Awwwards, November 2016'/>
              <MediaSmall
              href='http://dwc.io/events/2016/design-night-at-mongodb-hq/'
              title='How to Build Style Guides Everyone Loves'
              text='Designers Who Code, June 2016'/>
              <MediaSmall
              href='https://speakerdeck.com/broccolini/all-the-things-i-know-about-building-design-systems'
              title='All The Things I Know About Design Systems'
              text='Clarity, March 2016'/>
              <MediaSmall
              href='https://speakerdeck.com/broccolini/empowering-designers-to-code'
              title='Empowering Designers to Code'
              text='FOWD, November 2015'/>
              <MediaSmall
              href='http://slides.com/dianamounter/building-scalable-design#/'
              title='Building Scalable Design'
              text='Design Driven, November 2014'/>
              <MediaSmall
              href='http://www.thisismetis.com/blog/design-for-people'
              title='Design for People'
              text='Metis, November 2014'/>
              <MediaSmall
              href='https://speakerdeck.com/broccolini/responding-to-change'
              title='Responding to Change'
              text='Agile Asbury, October 2014'/>
              <Text pt={4}>More talks on <Link href='https://speakerdeck.com/broccolini'>speakerdeck</Link> and <Link href='https://www.slideshare.net/diana.mounter/presentations'>slideshare</Link>.</Text>
            </Box>
          </Box>
        </Container>
      </Flex>
      <Box mb={5}>
        <Container>
          <HeadingAccent mb={4} ml={2} id='side-projects'>
            Side projects
          </HeadingAccent>
        </Container>
        <Flex mb={3} ml={['0','20%','0','0']} wrap>
          <Box width={[1,3/4,1/3,1/4]} px={2}>
          </Box>
          <Box width={[1,3/4,1/3,1/4]} px={2} mb={[3,3,4]}>
            <Card
            src='http://broccolini.net/images/50-shades.svg'
            href='http://broccolini.net/50shadesofblk/'
            title='50 Shades of black'
            />
          </Box>
          <Box width={[1,3/4,1/3,1/4]} px={2} mb={[3,3,4]}>
            <Card
            src='http://broccolini.net/images/wkyuan.svg'
            href='http://whatkeepsyouupatnight.io/'
            title='What keeps you up at night?'
            />
          </Box>
          <Box width={[1,3/4,1/3,1/4]} px={2} mb={[3,3,4]}>
            <Card
            src='http://broccolini.net/images/swiss.svg'
            href='http://broccolini.net/swiss/'
            title='Swiss Jekyll theme'
            />
          </Box>
          <Box width={[1,3/4,1/3,1/4]} px={2} mb={[3,3,4]}>
            <Card
            src='http://broccolini.net/images/athena.svg'
            href='http://broccolini.net/athena/'
            title='Athena Jekyll theme'
            />
          </Box>
          <Box width={[1,3/4,1/3,1/4]} px={2} mb={[3,3,4]}>
            <Card
            src='http://broccolini.net/images/soundsradcakes.svg'
            href='http://soundsradcakes.com/'
            title='Soundsradcakes'
            />
          </Box>
          <Box width={[1,3/4,1/3,1/4]} px={2} mb={[3,3,4]}>
            <Card
            src='http://broccolini.net/images/robotodex.svg'
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
              <Media
              href='https://spec.fm/podcasts/design-details/141132'
              title='Design Details: Cats & Design Systems'
              text='In this episode with Brent Jackson, we dig into the tools and workflows we’ve developed when working on systems, what we’re excited about in design systems, and talk about the technologies that are changing the way we build.'/>
              <Media
              href='https://www.designbetter.co/podcast/diana-mounter'
              title='Design Better Podcast: from design silos to design system'
              text='From design silos to design systems. I talk with Eli Woolery and Aaron Walter from InVision about navigating the path from style guide contributor to full-time design systems manager.'/>
              <Media
              href='http://journalmetro.com/opinions/urelles/1500030/diana-mounter-lexperte-de-la-couleur-sur-le-web/'
              title='Interview avec Chloe Freslon pour URelles.com'
              text='De travailler avec la couleur dans l’imprimé et sur le web, les défis techniques, et pourquoi il est difficile de devenir un expert en couleur.'/>
              <Media
              href='http://www.fullstackradio.com/75'
              title='Full Stack Radio, episode 75'
              text='In this interview I talk about using design systems to tame legacy CSS, and how GitHub is using utility classes to make it easier to build more consistent, maintainable user interfaces.'/>
              <Media
              href='https://www.uxpin.com/studio/blog/githubs-design-system-interview-diana-mounter/'
              title='UXPin interview'
              text='In this interview I talk about lessons learned in building and maintaining GitHub’s design system, Primer.'/>
              <Media
              href='http://spec.fm/podcasts/design-details/19431'
              title='Design Details:  Itchy Feet'
              text='In this episode I talk about my journey to Etsy, the startup bus, why Git is a valuable tool for designers and the hardest part about onboarding designers.'/>
            </Box>
          </Box>
        </Container>
      </Flex>
    </Box>
    <Box bg='yellow'>
      <Container>
        <Box ml={['10%','0']}>
          <Text py={3} pl={2} pr={[2,2,2,3,3]}>
          <LinkDark href='https://twitter.com/broccolini' mr={2}>Twitter</LinkDark>
          <LinkDark href='https://github.com/broccolini' mr={2}>GitHub</LinkDark>
          <LinkDark href='https://medium.com/@broccolini' mr={2}>Medium</LinkDark>
          </Text>
        </Box>
      </Container>
    </Box>
  </Layout>
