import { FC } from 'react';
import { StudyPlace } from '../../../types/StudyPlace';
import educationCardStyles from './educationCard.module.scss';

interface Props {
  studyPlace: StudyPlace;
}

const EducationCard: FC<Props> = ({
  studyPlace: { universityName, location, years, faculty, degree, major }
}) => {
  return (
    <div className={educationCardStyles.container}>
      <div className={educationCardStyles.head}>
        <div className={educationCardStyles.universityName}>{universityName}</div>
        <div className={educationCardStyles.locationYears}>
          <div>{location}</div>
          <div>{years}</div>
        </div>
      </div>
      <ul>
        <li>{universityName}</li>
        <li>{faculty}</li>
        <li>{degree}</li>
        <li>{major}</li>
      </ul>
    </div>
  );
};

export default EducationCard;
