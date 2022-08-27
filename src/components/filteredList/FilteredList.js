import { useState, useEffect } from 'react';

import { productsArr } from '../../mocks/productsArr';

import Filters from '../filters/Filters';
import ProductsList from '../productsList/ProductsList';

const FilteredList = () => {
  const [idForFilter, setIdForFilter] = useState(null);

  const [textFromFilter, setTextFromFilter] = useState('');

  const [productsList, setProductsList] = useState(productsArr);

  const filterClickHandler = (id) => {
    setIdForFilter(id);
  };

  const filterTypingHandler = (text) => {
    setTextFromFilter(text);
  };
  const clickCheck = () => {
    if (!idForFilter || idForFilter === 'All') {
      setProductsList(productsArr);
    } else if (idForFilter && idForFilter !== 'All') {
      setProductsList(productsArr.filter((item) => item.country === idForFilter));
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
    clickCheck(idForFilter);
  }, [idForFilter]);

  useEffect(() => {
    inputCheck(textFromFilter);
  }, [textFromFilter]);
  return (
    <>
      <Filters
        valueForInput={textFromFilter}
        onChangeId={filterClickHandler}
        onFilterTyping={filterTypingHandler}
      />
      <ProductsList filteredProductsList={productsList} />
    </>
  );
};

export default FilteredList;
