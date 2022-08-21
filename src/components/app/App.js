import { useState, useEffect } from 'react';

import { productsArr } from '../../mocks/productsArr';

import Mainscreen from '../mainScreen/Mainscreen';
import AboutUs from '../aboutUs/AboutUs';
import OurBest from '../ourBest/OurBest';
import Footer from '../footer/Footer';
import DescrCard from '../descrCard/DescrCard';
import Filters from '../filters/Filters';
import ProductsList from '../productsList/ProductsList';

import aboutOurBeansImg from '../../resources/aboutOurBeans.jpg';

function App() {
  const [idForFilter, setIdForFilter] = useState(null);

  const inintialProductsList = [
    productsArr[0],
    productsArr[1],
    productsArr[2],
    productsArr[1],
    productsArr[1],
    productsArr[1],
  ];

  const [textFromFilter, setTextFromFilter] = useState('');

  const [productsList, setProductsList] = useState(inintialProductsList);

  const filterClickHandler = (id) => {
    setIdForFilter(id);
  };

  const filterTypingHandler = (text) => {
    setTextFromFilter(text);
  };

  const clickCheck = () => {
    if (!idForFilter || idForFilter === 'All') {
      setProductsList(inintialProductsList);
    } else if (idForFilter && idForFilter !== 'All') {
      setProductsList(inintialProductsList.filter((item) => item.country === idForFilter));
    }
  };
  const inputCheck = () => {
    if (!textFromFilter) {
      setProductsList(inintialProductsList);
    } else if (textFromFilter) {
      setProductsList(
        inintialProductsList.filter((item) =>
          item.name.trim().toLowerCase().includes(textFromFilter),
        ),
      );
    }
  };

  useEffect(() => {
    clickCheck(idForFilter);
  }, [idForFilter]);

  useEffect(() => {
    inputCheck(textFromFilter);
  }, [textFromFilter]);

  // const [idForFilter, setIdForFilter] = useState(null);

  // const inintialProductsList = [
  //   productsArr[0],
  //   productsArr[1],
  //   productsArr[2],
  //   productsArr[1],
  //   productsArr[1],
  //   productsArr[1],
  // ];

  // const [productsList, setProductsList] = useState(inintialProductsList);

  // const [textFromFilter, setTextFromFilter] = useState('');

  // useEffect(() => {
  //   if (!idForFilter || idForFilter === 'All') {
  //     setProductsList(inintialProductsList);
  //   } else {
  //     setProductsList(inintialProductsList.filter((item) => item.country === idForFilter));
  //   }
  // }, [idForFilter]);

  // const filterClickHandler = (id) => {
  //   setIdForFilter(id);
  //   if (!idForFilter || idForFilter === 'All') {
  //     setProductsList(inintialProductsList);
  //   } else {
  //     setProductsList(inintialProductsList.filter((item) => item.country === idForFilter));
  //   }
  // };

  // const filterTypingHandler = (text) => {
  //   setTextFromFilter(text);

  //   if (textFromFilter.length === 0) {
  //     return;
  //   }

  //   console.log(textFromFilter);
  //   setProductsList(
  //     inintialProductsList.filter((item) =>
  //       item.name.trim().toLowerCase().includes(textFromFilter),
  //     ),
  //   );
  // };

  return (
    <>
      {/* <Mainscreen screen = 'first' title='Everything You Love About Coffee'/>
      <AboutUs/>
      <OurBest/>
      <Footer/>  */}
      <Mainscreen screen="second" title="Our Coffee" />
      <DescrCard
        img={aboutOurBeansImg}
        title="About our beans"
        descr={
          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            <br></br>
            <br></br>
            Afraid at highly months do things on at. Situation recommend objection do intention
            <br></br>
            so questions.<br></br> As greatly removed calling pleased improve an. Last ask him cold
            feel<br></br>
            met spot shy want. Children me laughing we prospect answered followed. At it went
            <br></br>
            is song that held help face.
          </p>
        }
      />
      <Filters
        valueForInput={textFromFilter}
        onChangeId={filterClickHandler}
        onFilterTyping={filterTypingHandler}
      />
      <ProductsList filteredProductsList={productsList} />
      <Footer />
    </>
  );
}

export default App;
