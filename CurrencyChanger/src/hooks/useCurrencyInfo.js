//Desgining a Custom Hook
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}) // having an empty object in useState to  avoid errors if the fetch call in not coming.

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) 
        //it will give a string response
        .then((res) => res.json()) 
        //.json() used to change the string responsone  into a json object 
        .then((res) => setData(res[currency]))
        // accessing the currency values from json response

    }, [currency] //dependency array will automatically call the function if these fields are updated
    )

    console.log(data);
    return data
}

export default useCurrencyInfo; 
//resturning the whole useCurrenctInfo method so that we will get value of  fetch api, data, setData.