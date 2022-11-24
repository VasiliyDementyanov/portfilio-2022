import { FC, useEffect, useState } from 'react';
import visitorCounterStyles from './VisitorCounter.module.scss';
import { KEY, NAMESPACE, COUNT_URL } from './extra';

const VisitorCounter: FC = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getVisitorCount = async () => {
      const res = await fetch(`${COUNT_URL}/get/${NAMESPACE}/${KEY}`);
      if (!res.ok) {
        setIsError(true);
        return;
      }

      const data = await res.json();

      setIsLoading(false);
      setCount(data.value);
    };

    getVisitorCount();
  }, []);

  return (
    <section className={visitorCounterStyles.container}>
      {isLoading && <p>loading...</p>}
      {isError && <p>sorry, can't show the counter</p>}
      {!isLoading && !isError && <p>this page was visited for {count} times</p>}
    </section>
  );
};

export default VisitorCounter;
