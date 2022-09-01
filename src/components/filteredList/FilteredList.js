import { useState, useEffect } from 'react';

import { productsArr } from '../../mocks/productsArr';

import Filters from '../filters/Filters';
import ProductsList from '../productsList/ProductsList';

function useFilter(initialValue, array) {
  const [productsList, setProductsList] = useState(array);
  const [value, setValue] = useState(initialValue);

  const filterHandler = (e) => {
    setValue(e);
  };

  const clickCheck = () => {
    if (!value || value === 'All') {
      setProductsList(array);
    } else if (value && value !== 'All') {
      setProductsList(array.filter((item) => item.country === value));
    }
  };
  const inputCheck = () => {
    if (!value) {
      setProductsList(array);
    } else if (value) {
      setProductsList(
        array.filter(
          (item) =>
            item.name.trim().toLowerCase().includes(value) || item.price.trim().includes(value),
        ),
      );
    }
  };

  // useEffect(() => {
  //   clickCheck(value);
  // }, [value]);
  useEffect(() => {
    inputCheck(value);
  }, [value]);

  return {
    value,
    productsList,
    filterHandler,
  };
}

const FilteredList = () => {
  const idForFilter = useFilter(null, productsArr);
  const textFromFilter = useFilter('', productsArr);

  return (
    <>
      <Filters
        valueForInput={textFromFilter.value}
        onChangeId={idForFilter.filterHandler}
        onFilterTyping={textFromFilter.filterHandler}
      />
      <ProductsList filteredProductsList={textFromFilter.productsList} />
    </>
  );
};

// const FilteredList = () => {
//   const [idForFilter, setIdForFilter] = useState(null);

//   const [textFromFilter, setTextFromFilter] = useState('');

//   const [productsList, setProductsList] = useState(productsArr);

//   const filterClickHandler = (id) => {
//     setIdForFilter(id);
//   };

//   const filterTypingHandler = (text) => {
//     setTextFromFilter(text);
//   };
//   const clickCheck = () => {
//     if (!idForFilter || idForFilter === 'All') {
//       setProductsList(productsArr);
//     } else if (idForFilter && idForFilter !== 'All') {
//       setProductsList(productsArr.filter((item) => item.country === idForFilter));
//     }
//   };
//   const inputCheck = () => {
//     if (!textFromFilter) {
//       setProductsList(productsArr);
//     } else if (textFromFilter) {
//       setProductsList(
//         productsArr.filter(
//           (item) =>
//             item.name.trim().toLowerCase().includes(textFromFilter) ||
//             item.price.trim().includes(textFromFilter),
//         ),
//       );
//     }
//   };

//   useEffect(() => {
//     clickCheck(idForFilter);
//   }, [idForFilter]);

//   useEffect(() => {
//     inputCheck(textFromFilter);
//   }, [textFromFilter]);
//   return (
//     <>
//       <Filters
//         valueForInput={textFromFilter}
//         onChangeId={filterClickHandler}
//         onFilterTyping={filterTypingHandler}
//       />
//       <ProductsList filteredProductsList={productsList} />
//     </>
//   );
// };

export default FilteredList;
