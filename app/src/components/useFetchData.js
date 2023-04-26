import { useState, useEffect } from "react";

export default function useFetchData (url) {

  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const result = await fetch(url)

        if (!result.ok) {
          throw new Error(result.statusText)
        }
    
        const resultData = await result.json()
        setData(resultData);

      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  return [data];
}