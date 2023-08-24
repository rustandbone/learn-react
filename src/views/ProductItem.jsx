import { ProductType } from "@/@types/global.d";
import { getPbImageURL, numberWithComma } from "@/utils";
import { shape, string, number }  from "prop-types";

function ProductItem({item /* {id, created, title, color, price, photo} */}) {
  return (
    <li>
      <figure className="flex flex-col items-start">
        <img src={getPbImageURL(item, 'photo')} className="h-96 w-auto" alt="" />
        <figcaption className="flex flex-col">
          <span className="title">{item.title}[{item.color}]</span>
          <span className="price">KRW {numberWithComma(item.price)}</span>
        </figcaption>
      </figure>
    </li>
  )
}

export const PRODUCT_TYPE = shape({
  id: string,
  photo: string,
  title: string,
  color: string,
  price: number,
})

ProductItem.propTypes = {
  item: ProductType.isRequired
  // item: PRODUCT_TYPE.isRequired
}

export default ProductItem;