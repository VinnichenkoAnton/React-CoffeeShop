import { useHttp } from '../hooks/http.hook';

const useCoffeeService = () => {
  const { loading, request, error, clearError } = useHttp();

  const url = 'https://api-cofee-products.herokuapp.com/api/products/?format=json';

  const getCoffeeData = async () => {
    const res = await request(`${url}`);
    return res;
  };

  return { loading, error, clearError, getCoffeeData };
};

export default useCoffeeService;
