import { FC } from 'react';
import WorkCard from './workCard/WorkCard';
import { workPlaces } from './workPlaces';
import workStyles from './Work.module.scss';
import Divider from '../divider/divider';

const Education: FC = () => {
  return (
    <div className={workStyles.container}>
      {workPlaces.map((wp, i) => {
        if (workPlaces.length - 1 !== i) {
          return (
            <>
              <WorkCard key={i} workPlace={wp} />
              <Divider key={i + 'unique'} />
            </>
          );
        }
        return <WorkCard key={i} workPlace={wp} />;
      })}
    </div>
  );
};

export default Education;
