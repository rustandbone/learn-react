import useFetchData from './useFetchData';

const endpoint = `http://127.0.0.1:3000/api/collections/products/records`;

function useProductList() {
  return useFetchData(endpoint);
}

export default useProductList;
