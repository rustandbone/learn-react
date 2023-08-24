import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";

function LearnStateAndEffects() {
  //1. data
  const [data, setData] = useState([]);
  //2. isLoading
  const [isLoading, setIsLoading] = useState(false);
  //3. error
  const [error, setError] = useState(null);

  //side effect
  //request data
  useEffect(() => {
    setIsLoading(true);

    //async await
    async function fetchTodos() {
      //fetch
      const response = await fetch("http://127.0.0.1:3000/api/collections/todos/records")

      if(!response.ok) {
        // error handling
        console.log(response.ok)
      }

      const data = await response.json();
      setData(data)
      setIsLoading(false);
    }
    //fetch or axios
    fetchTodos();
  }, [])

  if(isLoading) {
    return (
        <Spinner size={120} className="absolute z-[9999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    )
  }

  return (
    <div className="m-10 flex flex-col gap-2 items-start" lang="en">
      <h2 className={`text-indigo-600 font-suit text-2xl uppercase`}>
        상태 및 이펙트 학습하기
      </h2>
      {
        data && data.items?.map(item => (
          <div key={item.id} className="todo">
            <strong>{item.doit}</strong>
          </div>
        ))
      }
    </div>
  )
}

export default LearnStateAndEffects;