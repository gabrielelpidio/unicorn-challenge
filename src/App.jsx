import React from 'react';
import { useMediaQuery } from 'react-responsive'

import Sidebar from './sidebar/sidebar';
import './App.css';
import Header from './header/header';
import Card from './cards/card';
import AboutMe from './about_me/aboutMe';
import ImageCard from './cards/imageCard';

import designImage from './assets/icons/design.png';
import developImage from './assets/icons/development.png';
import grinchImage from './assets/images/grinch.png';
import platziVideoImage from './assets/images/platziVideo.png';

import Rocket from './about_me/rocket';
import FadeWrapper from './utilities/fadeWrapper';
import MenuButton from './menu/menuButton';
import Menu from './menu/menu';


function App() {
  // TODO do the responsive version (its easier to say1)

  const visibleMenu = useMediaQuery({
    query: '(max-width: 850px)',
  });

  return (
    <div className="App">
      {
      visibleMenu
        ? <MenuButton />
        : <Sidebar />
      }
      <div className="App-main">
        <div id="start" />
        <Header visibleMenu={visibleMenu} />
        <div className="App-main-grid">
          <div className="strongs" id="aboutMe">
            <Card
              title="Desarrollo Web"
              description="HTML + CSS + Responsive Design"
              image={developImage}
            />
            <Card
              title="Diseño Web"
              description="UI/UX + Adobe XD/Figma + Zeplin"
              image={designImage}
              style={{ justifySelf: 'end' }}
            />
          </div>
          <Rocket />
          <AboutMe
            style={{
              gridRow: 'third-row / span 1',
              gridColumn: 'first-column / span 1',
              alignSelf: 'end',
            }}
          />
          <FadeWrapper className="portfolio" id="portfolio">
            <h2 className="portfolio-title">Proyectos</h2>
            <div className="portfolio-images">
              <ImageCard
                title="Platzi Video"
                image={platziVideoImage}
                href="https://github.com/gabrielelpidio/Platzi-Video"
              />
              <ImageCard
                title="Grinch Challenge"
                image={grinchImage}
                href="https://github.com/gabrielelpidio/Grinch"
              />
            </div>
          </FadeWrapper>
        </div>
        <div className="footer">
          <p>
            Designed by
            {' '}
            <a className="footer-link" href="https://platzi.com/@juandc/">
              @juandc
            </a>
            {' '}
            🎨 | Developed by
            {' '}
            <a
              className="footer-link"
              href="https://platzi.com/@GabrielElpidio/"
            >
              @GabrielElpidio
            </a>
            {' '}
            💻
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
