import Spinner from "@/components/Spinner";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import useFetchData from "@/hooks/useFetchData";
import { getPbImageURL } from './../../utils/getPbImageURL';
import { Link } from "react-router-dom";
import { numberWithComma } from "@/utils";
import { useEffect } from "react";
import { useProducts } from "@/api/useProducts";

//PB -> READ / CREATE / UPDATE / DELETE
//HTTP METHOD
//CREATE -> POST
//READ -> GET
//UPDATE -> PUT or PATCH
//DELETE -> DELETE

const endpoint = `${import.meta.env.VITE_PB_API}/collections/products/records`;

function Products() {
  useDocumentTitle('제품 목록');
  const {isLoading, data} = useFetchData(endpoint);

  // const { status, data:sdkData, getProductList } = useProducts();

  // useEffect(() => {
  //   getProductList()
  //   .then(() => {
  //     console.log(status)
  //     console.log(sdkData)
  //   })
  //   .catch(() => {
  //     console.log(status)
  //   });
  // }, [])

  if(isLoading) {
    return <Spinner size={160} />
  }

  if(data) {
    return (
      <div>
        <h1 className="text-emerald-950 text-2xl mb-5">Products</h1>
        <ul className="grid grid-cols-3">
          {
            data.items?.map(item => (
              <li key={item.id} className="justify-self-center">
                <Link to={`/product/edit/${item.id}`}>
                  <figure>
                    <img src={getPbImageURL(item, 'photo')} alt={item.title} className="h-[160px] object-cover mx-auto" />
                    <figcaption className='flex flex-col gap-1 items-center mt-2'>
                      <span>{item.title}({item.color})</span>
                      <span className='font-semibold'>{numberWithComma(item.price)}</span>
                    </figcaption>
                  </figure>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Products;