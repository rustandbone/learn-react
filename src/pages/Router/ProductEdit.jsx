import Spinner from "@/components/Spinner";
import useProductItem from "@/hooks/useProductItem";
import { useEffect, useState, useId } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { useDelete as useDeleteProduct, useUpdate as useUpdateProduct } from "@/hooks/products/useProducts";
import debounce from "@/utils/debounce";

const initialFormState = {
  title : '',
  color : '',
  price : ''
}

export default function ProductEdit() {
  const titleId = useId();
  const priceId = useId();
  const colorId = useId();
  
  const {productId} = useParams();
  const navigate = useNavigate();
  const {data, isLoading} = useProductItem(productId);
  const [formState, setFormState] = useState(initialFormState);

  const deleteProduct = useDeleteProduct();
  const updateProduct = useUpdateProduct();

  useEffect(() => {
    if(!isLoading && data) {
      console.log(data)
      setFormState({
        title: data.title,
        price: data.price,
        color: data.color
      })
    }
  }, [isLoading, data])
  
  const handleChangeInput = ({target}) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    })
  }

  const handleDebounceChangeInput = debounce(handleChangeInput, 500)


  const handleEditProduct = (e) => {
    e.preventDefault();
    updateProduct(productId, formState)
    .then(() => navigate('/products'))
    .catch(error => console.log(error));

      /* fetch(`${import.meta.env.VITE_PB_API}/collections/products/records/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    })
    .then(response => console.log(response))
    .catch(error => {
      console.log(error);
    }) */
  }

  const handleDeleteProduct = () => {
    const userConfirm = confirm('정말로 확실하게 지우실 건가요?')
    if(userConfirm) {
      deleteProduct(productId)
      .then(() => navigate('/products'))
      .catch(error => console.log(error))
      // fetch(`${import.meta.env.VITE_PB_API}/collections/products/records/${productId}`, {
      //   method: 'DELETE'
      // })
      // .then(() => {
      //   //정상적으로 삭제되면 제품 목록 페이지로 이동
      //   navigate('/products');
      // })
      // .catch(error => {
      //   console.log(error);
      // })
    }
  }
  
  if(isLoading) {
    return <Spinner size={120} />
  }

  if(data) {
    return (
      <>
        <h2 className="text-2xl text-center">{data.title}({data.color}) 수정 폼</h2>
        <form onSubmit={handleEditProduct}>
          {/* title */}
          <div>
            <label htmlFor={titleId}>제품명</label>
            <input type="text" name="title" id={titleId} defaultValue={formState.title} onChange={handleDebounceChangeInput} />
          </div>
          {/* photo */}
          {/* color */}
          <div>
            <label htmlFor={colorId}>색상</label>
            <input type="text" name="color" id={colorId} defaultValue={formState.color} onChange={handleDebounceChangeInput} />
          </div>
          {/* price */}
          <div>
            <label htmlFor={priceId}>가격</label>
            <input type="number" name="price" id={priceId} step={1000} defaultValue={formState.price} onChange={handleDebounceChangeInput} />
          </div>
          <div>
            <button type="submit">수정</button>
            <button type="button" onClick={handleDeleteProduct}>삭제</button>
          </div>
        </form>
      </>
    )
  }
}