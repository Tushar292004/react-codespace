//Desgining a Custom Hook
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}) 
    // having an empty object in useState to  avoid errors if the fetch call in not coming.

    useEffect(() => {
        //fetching the api which gives the string data of all the currency information
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) 
        //it will give a string response
        .then((res) => res.json()) 
        //.json() used to change the string responsone  into a json object 
        .then((res) => setData(res[currency]))
        // accessing the currency values from json response

    }, [currency] 
    //dependency array will automatically call the function if these fields are updated
    )

    console.log(data); 
    //checking the values

    return data //
}

export default useCurrencyInfo; 
//returning the whole useCurrenctInfo method so that we will get value of  fetch api, data, setData.

//custom hook is finally designed  