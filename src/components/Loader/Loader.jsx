import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      color="rgba(62, 133, 243, 1)"
      wrapperStyle={{ position: 'absolute', left: '500px', top: '-140px' }}
      radius="9"
      ariaLabel="three-dots-loading"
    />
  );
};

export default Loader;
