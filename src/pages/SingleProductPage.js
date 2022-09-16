import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import useCoffeeService from '../../services/useCoffeeService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import Header from '../header/Header';
import AboutOurProduct from '../aboutOurProduct/AboutOurProduct';
import Footer from '../footer/Footer';

const SingleProductPage = () => {
  const { loading, error, clearError, allCoffeeData } = useCoffeeService();

  const { id } = useParams();
  const navigate = useNavigate();

  const [infoForProduct, setInfoForProduct] = useState(null);

  useEffect(() => {
    if (!+id || id > 7 || id < 2) {
      navigate('/notfound', { replace: true });
    }
    clearError();
    allCoffeeData().then(onCoffeeLoaded);
  }, [id]);

  const onCoffeeLoaded = (allCoffee) => {
    setInfoForProduct(...allCoffee.filter((item) => item.id === +id));
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !infoForProduct) ? (
    <View infoForProduct={infoForProduct} />
  ) : null;
  return (
    <>
      <Header screen="second" title="Our Coffee" />
      <Link
        style={{
          display: 'block',
          textAlign: 'center',
          fontWeight: '400',
          fontSize: '24px',
          marginTop: '30px',
          textDecoration: 'underline',
        }}
        to="/ourcoffee"
      >
        Back to all
      </Link>
      {spinner}
      {errorMessage}
      {content}
      <Footer />
    </>
  );
};

const View = ({ infoForProduct }) => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={`Here you get the description of ${infoForProduct.name}`}
        />
        <title>{`${infoForProduct.name}`}</title>
      </Helmet>
      <AboutOurProduct
        key={infoForProduct.id}
        img={infoForProduct.img}
        imgwidth="wide"
        title={infoForProduct.name}
        country={infoForProduct.country}
        description={infoForProduct.description}
        price={infoForProduct.price}
      />
    </>
  );
};
export default SingleProductPage;
