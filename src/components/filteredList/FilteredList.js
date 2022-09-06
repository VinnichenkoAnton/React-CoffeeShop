import { useState, useEffect } from 'react';

import { productsArr } from '../../mocks/productsArr';

import Filters from '../filters/Filters';
import ProductsList from '../productsList/ProductsList';

const FilteredList = () => {
  const [idFromFilter, setIdFromFilter] = useState(null);

  const [textFromFilter, setTextFromFilter] = useState('');

  const [productsList, setProductsList] = useState(productsArr);

  const filterClickHandler = (id) => {
    setIdFromFilter(id);
  };

  const filterTypingHandler = (text) => {
    setTextFromFilter(text);
  };
  const clickCheck = () => {
    if (!idFromFilter || idFromFilter === 'All') {
      setProductsList(productsArr);
    } else if (idFromFilter && idFromFilter !== 'All') {
      setProductsList(productsArr.filter((item) => item.country === idFromFilter));
    }
  };
  const inputCheck = () => {
    if (!textFromFilter) {
      setProductsList(productsArr);
    } else if (textFromFilter) {
      setProductsList(
        productsArr.filter(
          (item) =>
            item.name.trim().toLowerCase().includes(textFromFilter) ||
            item.price.trim().includes(textFromFilter),
        ),
      );
    }
  };

  useEffect(() => {
    clickCheck(idFromFilter);
  }, [idFromFilter]);

  useEffect(() => {
    inputCheck(textFromFilter);
  }, [textFromFilter]);
  return (
    <>
      <Filters
        inputValue={textFromFilter}
        enteredId={filterClickHandler}
        enteredText={filterTypingHandler}
      />

      <ProductsList filteredProductsList={productsList} />
    </>
  );
};

export default FilteredList;
