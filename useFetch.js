import { useEffect, useState } from "react"



export const useFetch = (url) => {

   const [State, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
    

   })

    const getFetch= async() =>{

        setState({
            ...State,
            isLoading: true
        })

        const resp = await fetch(url)
        const data = await resp.json()

        setState({
            data,
            isLoading: false,
            hasError: null,
           
        })

        //console.log(data)
    }

    useEffect(() => {
        getFetch()
    }, [url])
    

  return {
        data: State.data,
        isLoading: State.isLoading,
        hasError: State.hasError,
      
  }
  
  
}
