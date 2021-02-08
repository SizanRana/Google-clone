import { useState, useEffect } from 'react';
import API_KEY from "../API/keys";

const CONTEXT_KEY ="ef84a3fe054c6fe70";

const useGoogleSearch = (term) => {
   const [data, setData] = useState(null);

   const fetchData = async() => {
    fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
    )
    .then(response => response.json())
    .then(result => {
        setData(result)
    })
    
}

   useEffect(() => {
    fetchData();
        
   },[term])
   return { data }
}

export default useGoogleSearch