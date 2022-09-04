import { Link } from 'react-router-dom';

import errorImg from '../../resources/errorImg.png';

const Page404 = () => {
  return (
    <div>
      <img style={{ display: 'block', margin: '0 auto' }} src={errorImg} alt="Error" />
      <p style={{ textAlign: 'center', fontWeight: '700', fontSize: '36px' }}>Page doesn't exist</p>
      <Link
        style={{
          display: 'block',
          textAlign: 'center',
          fontWeight: '400',
          fontSize: '24px',
          marginTop: '30px',
          textDecoration: 'underline',
        }}
        to=".."
      >
        Back to main page
      </Link>
    </div>
  );
};

export default Page404;
