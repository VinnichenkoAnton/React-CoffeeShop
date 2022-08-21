import { useState, useEffect } from 'react';

import { productsArr } from '../../mocks/productsArr';

import Filters from '../filters/Filters';
import ProductsList from '../productsList/ProductsList';

const FilteredList = () => {
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
