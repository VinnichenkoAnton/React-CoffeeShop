import { NavLink } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import errorImg from '../resources/errorImg.png';

const Page404 = () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="The page you are trying to get doesnt exist" />
        <title>404</title>
      </Helmet>
      <img style={{ display: 'block', margin: '0 auto' }} src={errorImg} alt="Error" />
      <p style={{ textAlign: 'center', fontWeight: '700', fontSize: '36px' }}>Page doesn't exist</p>
      <NavLink
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
      </NavLink>
    </div>
  );
};

export default Page404;
