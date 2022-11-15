import { FC } from 'react';
import welcomeStyle from './Welcome.module.scss';

import reactBlack from './images/react_black.png';
import reactColored from './images/react_colored.png';

import goBlack from './images/go_black.png';
import goColored from './images/go_colored.png';

import postgresqlBlack from './images/postgresql_black.png';
import postgresqlColored from './images/postgresql_colored.png';

import photo from './images/photo.png';

const Welcome: FC = () => {
  return (
    <section className={welcomeStyle.container}>
      <section className={welcomeStyle.leftSide}>
        <section className={welcomeStyle.greetings}>
          <p>
            <span className={welcomeStyle.helloEng}>Hello! I am</span>
            <span className={welcomeStyle.helloJp}>こんにちは! 私は</span>
          </p>
          <p>
            <span className={welcomeStyle.myNameEng}>Vasiliy Dementyanov</span>
          </p>
          <p>
            <span className={welcomeStyle.myNameJp}>ヴァシリー・デメンチャノフ</span>
          </p>
          <p>
            <span className={welcomeStyle.grade}>Full Stack Developer</span>
          </p>
        </section>
        <section className={welcomeStyle.stack}>
          <p className={welcomeStyle.stackText}>React - Go - Postgresql</p>
          <section className={welcomeStyle.stackImages}>
            <img
              src={reactBlack}
              alt={'react'}
              onMouseOver={(e) => (e.currentTarget.src = reactColored)}
              onMouseOut={(e) => (e.currentTarget.src = reactBlack)}
            />
            <img
              src={goBlack}
              alt={'go'}
              onMouseOver={(e) => (e.currentTarget.src = goColored)}
              onMouseOut={(e) => (e.currentTarget.src = goBlack)}
            />
            <img
              src={postgresqlBlack}
              alt={'postgresql'}
              onMouseOver={(e) => (e.currentTarget.src = postgresqlColored)}
              onMouseOut={(e) => (e.currentTarget.src = postgresqlBlack)}
            />
          </section>
        </section>
      </section>
      <section className={welcomeStyle.rightSide}>
        <img className={welcomeStyle.photo} src={photo} />
        <section className={welcomeStyle.square} />
      </section>
      <section className={welcomeStyle.footnote}>
        <p>
          *this portfolio was created using
          <br /> React (TypeScript), Go
          <br /> and deployed on Ubuntu VDS as a docker container
          <br /> the code of this site on{' '}
          <a
            href="https://github.com/VasiliyDementyanov/portfolio-2022"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </section>
    </section>
  );
};

export default Welcome;
