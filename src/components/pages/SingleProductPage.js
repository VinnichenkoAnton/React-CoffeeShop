import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Header from '../header/Header';
import Product from '../product/Product';
import Footer from '../footer/Footer';

import { productsArr } from '../../mocks/productsArr';

const SingleProductPage = () => {
  let { id } = useParams();

  const [infoForProduct, setInfoForProduct] = useState(null);

  useEffect(() => {
    updatePage();
  }, [id]);

  const updatePage = () => {
    setInfoForProduct(productsArr.find((item) => item.id === id));
  };

  const content =
    !infoForProduct || id > productsArr.length ? (
      <ErrorMessage />
    ) : (
      <View infoForProduct={infoForProduct} />
    );

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
      {content}
      <Footer />
    </>
  );
};

const View = ({ infoForProduct }) => {
  return (
    <Product
      key={infoForProduct.id}
      img={infoForProduct.img}
      imgwidth="wide"
      title={infoForProduct.name}
      country={infoForProduct.country}
      description={infoForProduct.description}
      price={infoForProduct.price}
    />
  );
};
export default SingleProductPage;
