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
    if (!idFromFilter || idFromFilter === 'All') {
      onCoffeeLoaded();
    } else {
      onCoffeeUpdateId();
    }
  }, [idFromFilter]);
  useEffect(() => {
    if (!textFromFilter) {
      onCoffeeLoaded();
    } else {
      onCoffeeUpdateInput();
    }
  }, [textFromFilter]);
  useEffect(() => {
    clearError();
    onCoffeeLoaded();
  }, []);

  const onCoffeeLoaded = () => {
    allCoffeeData().then((response) => {
      setProductsList(response);
    });
  };
  const onCoffeeUpdateInput = () => {
    allCoffeeData().then((response) => {
      setProductsList(
        response.filter(
          (item) =>
            item.name.trim().toLowerCase().includes(textFromFilter) ||
            item.price.trim().includes(textFromFilter),
        ),
      );
    });
  };
  const onCoffeeUpdateId = () => {
    allCoffeeData().then((response) => {
      setProductsList(response.filter((item) => item.country === idFromFilter));
    });
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
