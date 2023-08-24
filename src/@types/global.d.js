import { shape, string, number } from 'prop-types';

export const ProductType = shape({
  id: string,
  photo: string,
  title: string,
  color: string,
  price: number,
});
