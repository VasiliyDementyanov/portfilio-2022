import { FC } from 'react';
import EducationCard from './educationCard/EducationCard';
import { studyPlaces } from './studyPlaces';
import educationStyles from './Education.module.scss';
import Divider from '../divider/divider';

const Education: FC = () => {
  return (
    <div className={educationStyles.container}>
      {studyPlaces.map((u, i) => {
        if (studyPlaces.length - 1 !== i) {
          return (
            <>
              <EducationCard key={i} studyPlace={u} />
              <Divider key={i + 'unique'} />
            </>
          );
        }
        return <EducationCard key={i} studyPlace={u} />;
      })}
    </div>
  );
};

export default Education;
