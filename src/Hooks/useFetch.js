import { useEffect, useState } from "react"

function useFetch(url){
    const [isData, setIsData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(null)

    useEffect(()=>{
        setTimeout(()=>{
            //fetching the data
            fetch(url)
            //converting to json
                .then(res=>{
                    if(!res.ok){
                        throw Error('Could Not Load your Request!') //throwing error if the response !== okay
                    }
                    return res.json()
                })
                //collecting the data and removing the error and loading
                .then(data =>{
                    setIsData(data)
                    setIsLoading(false)
                    setIsError(null)
                })
                //catching the error message
                .catch(err =>{
                    setIsError(err.message)
                    setIsLoading(false)
                    setIsData(null)
                })
        }, 2000)
    },[url])

    return ({isData, isLoading, isError})
}
export default useFetch