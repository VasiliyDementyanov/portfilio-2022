import { FC } from 'react';
import { WorkPlace } from '../../../types/WorkPlace';
import workCardStyles from './workCard.module.scss';

interface Props {
  workPlace: WorkPlace;
}

const WorkCard: FC<Props> = ({
  workPlace: { projectName, location, duration, theses, technologies }
}) => {
  return (
    <div className={workCardStyles.container}>
      <div className={workCardStyles.head}>
        <div className={workCardStyles.projectName}>{projectName}</div>
        <div className={workCardStyles.locationDuration}>
          <div>{location}</div>
          <div>{duration}</div>
        </div>
      </div>
      <div className={workCardStyles.thesesContainer}>
        {theses.map((th) => (
          <div className={workCardStyles.thesis}>
            <div className={workCardStyles.thesisLeft}>
              <span>{th.name}</span>
            </div>
            <div className={workCardStyles.thesisRight}>
              <ul>
                {th.hasOwnProperty('link') && th.descriptionLines.length === 1 ? (
                  <li>
                    <a href={th.link} target="_blank" rel="noreferrer">
                      {th.descriptionLines[0]}
                    </a>
                  </li>
                ) : (
                  th.descriptionLines.map((d) => <li>{d}</li>)
                )}
              </ul>
            </div>
          </div>
        ))}
        <div className={workCardStyles.thesis}>
          <div className={workCardStyles.thesisLeft}>
            <span>Technologies:</span>
          </div>
          <div className={workCardStyles.thesisRight}>
            {technologies.map((t) => (
              <div className={workCardStyles.tech}>
                <div className={workCardStyles.techHeader}>{t.name}</div>
                <ul>
                  {t.descriptionLines.map((d) => (
                    <li>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
