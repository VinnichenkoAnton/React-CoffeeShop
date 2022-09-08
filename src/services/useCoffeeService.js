import { useHttp } from '../hooks/http.hook';

const useCoffeeService = () => {
  const { loading, request, error, clearError } = useHttp();

  const url = 'https://api-cofee-products.herokuapp.com/api/products/';

  const allCoffeeData = async () => {
    const res = await request(`${url}`);
    return res;
  };
  const bestCoffeeData = async () => {
    const res = await request(`${url}`);
    const bestProducts = res.filter((best) => best.id < 5);
    return bestProducts;
  };

  return { loading, error, clearError, allCoffeeData, bestCoffeeData };
};

export default useCoffeeService;
