import { useEffect } from 'react';

import { LoaderWrapper, RockinGoose } from './Loader.styled';

const Loader = () => {
  useEffect(() => {
    return () => {
      setTimeout(console.log('click'), 100000);
    };
  }, []);

  return (
    <LoaderWrapper>
      <RockinGoose />
    </LoaderWrapper>
  );
};

export default Loader;
