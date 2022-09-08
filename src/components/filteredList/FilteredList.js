import { useState, useEffect } from 'react';

import useCoffeeService from '../../services/useCoffeeService';

import Filters from '../filters/Filters';
import ProductsList from '../productsList/ProductsList';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

const FilteredList = () => {
  const { loading, error, allCoffeeData, clearError } = useCoffeeService();

  const [idFromFilter, setIdFromFilter] = useState(null);

  const [textFromFilter, setTextFromFilter] = useState('');

  const [productsList, setProductsList] = useState([]);

  const filterClickHandler = (id) => {
    setIdFromFilter(id);
  };

  const filterTypingHandler = (text) => {
    setTextFromFilter(text);
  };

  useEffect(() => {
    clickCheck(idFromFilter);
  }, [idFromFilter]);

  useEffect(() => {
    inputCheck(textFromFilter);
  }, [textFromFilter]);

  useEffect(() => {
    clearError();
    allCoffeeData().then(onCoffeeLoaded);
  }, []);

  const clickCheck = () => {
    if (!idFromFilter || idFromFilter === 'All') {
      allCoffeeData().then(onCoffeeLoaded);
    } else if (idFromFilter && idFromFilter !== 'All') {
      allCoffeeData().then(onCoffeeUpdateTwo);
    }
  };
  const inputCheck = () => {
    if (!textFromFilter) {
      allCoffeeData().then(onCoffeeLoaded);
    } else if (textFromFilter) {
      allCoffeeData().then(onCoffeeUpdate);
    }
  };

  const onCoffeeLoaded = (coffeeLoaded) => {
    setProductsList(coffeeLoaded);
  };
  const onCoffeeUpdate = (coffeeLoaded) => {
    setProductsList(
      coffeeLoaded.filter(
        (item) =>
          item.name.trim().toLowerCase().includes(textFromFilter) ||
          item.price.trim().includes(textFromFilter),
      ),
    );
  };

  const onCoffeeUpdateTwo = (coffeeLoaded) => {
    setProductsList(coffeeLoaded.filter((item) => item.country === idFromFilter));
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  return (
    <>
      <Filters
        inputValue={textFromFilter}
        enteredId={filterClickHandler}
        enteredText={filterTypingHandler}
      />
      {errorMessage}
      {spinner}
      <ProductsList filteredProductsList={productsList} />
    </>
  );
};

export default FilteredList;
