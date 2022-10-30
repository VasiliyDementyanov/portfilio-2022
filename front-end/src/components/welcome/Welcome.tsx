import { FC } from 'react';
import welcomeStyle from './Welcome.module.scss';
import react from './images/react.png';
import go from './images/go.png';
import postgresql from './images/postgresql.png';
import photo from './images/photo.png';

const Welcome: FC = () => {
  return (
    <section className={welcomeStyle.container}>
      <div className={welcomeStyle.leftSide}>
        <div className={welcomeStyle.greetings}>
          <p>
            <span className={welcomeStyle.helloEng}>Hello! I am</span>
            <span className={welcomeStyle.helloJp}>こんにちは! 私は</span>
          </p>
          <p>
            <span className={welcomeStyle.myNameEng}>Vasliliy Dementyanov</span>
          </p>
          <p>
            <span className={welcomeStyle.myNameJp}>ヴァスリー・デメンチャノフ</span>
          </p>
          <p>
            <span className={welcomeStyle.grade}>Full Stack Developer</span>
          </p>
        </div>
        <div className={welcomeStyle.stack}>
          <p className={welcomeStyle.stackText}>React - Go - Postgresql</p>
          <div className={welcomeStyle.stackImages}>
            <img src={react} />
            <img src={go} />
            <img src={postgresql} />
          </div>
        </div>
        <div className={welcomeStyle.footnote}>
          <p>
            *this portfolio was created using
            <br /> React (TypeScript), Go
            <br /> and deployed on VDS as a docker container
          </p>
        </div>
      </div>
      <div className={welcomeStyle.rightSide}>
        <img className={welcomeStyle.photo} src={photo} />
        <div className={welcomeStyle.square} />
      </div>
    </section>
  );
};

export default Welcome;
