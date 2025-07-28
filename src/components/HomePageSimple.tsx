import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div style={{ marginLeft: '10%' }}>
      <div className="container" style={{ marginTop: '20%', marginBottom: 'var(--space-2)' }}>
        <div style={{ width: '66.666%', paddingLeft: 'var(--space-2)', paddingRight: 'var(--space-3)' }}>
          <div style={{ fontSize: 'var(--font-size-6)', fontWeight: 700 }}>
            <a href="http://broccolini.net" style={{ color: 'var(--color-black)', textDecoration: 'none' }}>
              broccolini
            </a>
          </div>
          <h1 style={{ fontSize: 'var(--font-size-8)', fontWeight: 700, lineHeight: '1.25', margin: 0 }}>
            Diana Mounter
          </h1>
        </div>
      </div>
      
      <div className="container" style={{ marginBottom: 'var(--space-5)' }}>
        <div style={{ width: '50%' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-2)', paddingLeft: 'var(--space-2)', paddingRight: 'var(--space-3)' }}>
            I'm a designer with an interest in systems thinking, <a href="https://runemadsen.com/" title="Coined by Rune Madsen" style={{ color: 'var(--color-black)' }}>code as a material</a>, and inclusive design. I work remotely for GitHub as their Head of Design. I live in Brooklyn, NY, with my husband and two cats.
          </div>
        </div>
      </div>

      <div className="container" style={{ marginBottom: 'var(--space-7)' }}>
        <div style={{ paddingTop: 'var(--space-2)', marginLeft: 'var(--space-2)' }}>
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
            <a href="#work" style={{ fontSize: 'var(--font-size-5)', fontWeight: 'bold', color: 'var(--color-black)', textDecoration: 'none', padding: 'var(--space-1)', borderRadius: '4px' }}>Work</a>
            <a href="#talks" style={{ fontSize: 'var(--font-size-5)', fontWeight: 'bold', color: 'var(--color-black)', textDecoration: 'none', padding: 'var(--space-1)', borderRadius: '4px' }}>Talks</a>
            <a href="#writing" style={{ fontSize: 'var(--font-size-5)', fontWeight: 'bold', color: 'var(--color-black)', textDecoration: 'none', padding: 'var(--space-1)', borderRadius: '4px' }}>Writing</a>
            <a href="#side-projects" style={{ fontSize: 'var(--font-size-5)', fontWeight: 'bold', color: 'var(--color-black)', textDecoration: 'none', padding: 'var(--space-1)', borderRadius: '4px' }}>Side projects</a>
            <a href="#interviews" style={{ fontSize: 'var(--font-size-5)', fontWeight: 'bold', color: 'var(--color-black)', textDecoration: 'none', padding: 'var(--space-1)', borderRadius: '4px' }}>Interviews</a>
          </nav>
        </div>
      </div>

      <div className="container" style={{ marginBottom: 'var(--space-4)' }}>
        <div style={{ marginLeft: 'var(--space-2)' }}>
          <h2 id="work" style={{ fontSize: 'var(--font-size-6)', marginBottom: 'var(--space-4)' }}>
            Work
          </h2>
          <div style={{ width: '50%' }}>
            <h3 style={{ fontSize: 'var(--font-size-3)', marginBottom: 'var(--space-1)' }}>GitHub: Dec 2015 - present</h3>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-2)', marginBottom: 'var(--space-2)' }}>
              As GitHub's Head of Design I lead a cross-functional team including Product Design, Customer Research, Brand and Marketing Design, Design Infrastructure, Design Engineering, and Design Operations.
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginBottom: 'var(--space-4)' }}>
        <div style={{ marginLeft: 'var(--space-2)' }}>
          <h2 id="talks" style={{ fontSize: 'var(--font-size-6)', marginBottom: 'var(--space-4)' }}>
            Talks
          </h2>
          <div style={{ width: '50%' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-2)', marginBottom: 'var(--space-2)' }}>
              I speak at design and technology events across the U.S. and around the world.
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginBottom: 'var(--space-4)' }}>
        <div style={{ marginLeft: 'var(--space-2)' }}>
          <h2 id="writing" style={{ fontSize: 'var(--font-size-6)', marginBottom: 'var(--space-4)' }}>
            Writing
          </h2>
          <div style={{ width: '50%' }}>
            <div style={{ marginBottom: 'var(--space-2)' }}>
              <a href="https://github.blog/2023-05-17-designs-journey-towards-accessibility/" style={{ color: 'var(--color-black)', textDecoration: 'none' }}>
                <h3 style={{ fontSize: 'var(--font-size-2)', marginBottom: 'var(--space-1)' }}>Design's journey towards Accessibility</h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-2)' }}>May, 2023</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginBottom: 'var(--space-4)' }}>
        <div style={{ marginLeft: 'var(--space-2)' }}>
          <h2 id="side-projects" style={{ fontSize: 'var(--font-size-6)', marginBottom: 'var(--space-4)' }}>
            Side projects
          </h2>
          <div style={{ width: '50%', marginBottom: 'var(--space-4)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-2)', marginBottom: 'var(--space-2)' }}>
              Most of these side projects are no longer active, but sometimes I like to look back at them and remember what inspired me to do them at the time.
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 'var(--space-3)' }}>
          <div style={{ width: '25%', padding: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
            <a href="http://broccolini.net/50shadesofblk/" style={{ color: 'var(--color-black)', textDecoration: 'none' }}>
              <img src="/50-shades.svg" alt="50 Shades of black" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <h3 style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-4)' }}>50 Shades of black</h3>
            </a>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginBottom: 'var(--space-5)' }}>
        <div style={{ marginLeft: 'var(--space-2)' }}>
          <h2 id="interviews" style={{ fontSize: 'var(--font-size-6)', marginBottom: 'var(--space-4)' }}>
            Interviews
          </h2>
          <div style={{ width: '50%' }}>
            <div style={{ marginBottom: 'var(--space-2)' }}>
              <a href="https://reactpodcast.com/25" style={{ color: 'var(--color-black)', textDecoration: 'none' }}>
                <h3 style={{ fontSize: 'var(--font-size-2)', marginBottom: 'var(--space-1)' }}>React Podcast: Make Brilliant Messes</h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-2)' }}>In this episode with Emily Plummer, we talk with Chantastic about Rails, Lerna, monorepos, Figma, component APIs, and the importance of supporting designers and engineers with your design system.</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="gradient-bg">
        <div className="container">
          <div style={{ marginLeft: '10%' }}>
            <div style={{ fontWeight: '500', fontSize: 'var(--font-size-2)', paddingTop: 'var(--space-2)', paddingBottom: 'var(--space-2)', paddingLeft: 'var(--space-2)', paddingRight: 'var(--space-3)' }}>
              <a href="/about/" style={{ marginRight: 'var(--space-2)', color: 'var(--color-black)', textDecoration: 'none' }}>About</a>
              <a href="/reading/" style={{ marginRight: 'var(--space-2)', color: 'var(--color-black)', textDecoration: 'none' }}>Reading</a>
              <a href="https://twitter.com/broccolini" style={{ marginRight: 'var(--space-2)', color: 'var(--color-black)', textDecoration: 'none' }}>Twitter</a>
              <a href="https://github.com/broccolini" style={{ marginRight: 'var(--space-2)', color: 'var(--color-black)', textDecoration: 'none' }}>GitHub</a>
              <a href="https://www.linkedin.com/in/dianamounter/" style={{ color: 'var(--color-black)', textDecoration: 'none' }}>LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;