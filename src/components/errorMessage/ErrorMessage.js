import errorImg from '../../resources/errorImg.png';

const ErrorMessage = () => {
  return (
    <img
      style={{
        display: 'block',
        width: '500px',
        height: '500px',
        objectFit: 'contain',
        margin: '0 auto',
      }}
      src={errorImg}
      alt="Error"
    />
  );
};

export default ErrorMessage;
