import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{ // We are using useEffect because we want it to call again again when currency changes

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))

    },[currency])

    console.log(data)
    return data
}

export default useCurrencyInfo;