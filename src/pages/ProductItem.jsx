import { getPbImageURL, numberWithComma } from "@/utils";

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

export default ProductItem;