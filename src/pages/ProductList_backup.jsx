import { getPbImageURL, numberWithComma } from "@/utils";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";

const PB_PRODUCTS_ENDPOINT = `http://127.0.0.1:3000/api/collections/products/records`

function ProductList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    //중단(abort) 컨트롤러 생성
    const controller = new AbortController();

    setIsLoading(true);

    async function fetchProducts() {
      try {
        const response = await fetch(PB_PRODUCTS_ENDPOINT, {
          signal: controller.signal,
        })
        const responseData = await response.json();
        setData(responseData);
      } catch(error) {
        // 통신 중단에 따른 오류가 아니라면 오류 설정
        if (!(error instanceof DOMException)) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();

    //Strict Mode(detect impure function component)
    //mount(1) => unmount => mount(2)
    return () => {
      controller.abort();
    }
  }, [])

    // 로딩 중인 경우 화면
  if (isLoading) {
    return <Spinner size={160} title="데이터 가져오는 중이에요." />;
  }

  // 오류가 발생한 경우 화면
  if (error) {
    return (
      <div role="alert">
        <h2>{error.type}</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-3 m-10">
      { data && data.items && data.items?.map(item => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

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

export default ProductList;