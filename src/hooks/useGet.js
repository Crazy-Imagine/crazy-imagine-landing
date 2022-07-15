import { useState, useEffect } from "react"

export const useGet = (table, key, lang) => {
  const [contentReviews, setContentReviews] = useState([]);
  const getStrapi = async () => {
    //console.log("aqui", process.env.API_URL) //Is undefined
    if (lang === "es") {
      if (key === "false") {
        const domain = process.env.API_URL || "http://localhost:1337"
        const url = `${domain}/${table}?_locale=es-VE`
        // || `http://3.91.249.33:1337/${table}?_locale=es-VE` 
        const resp = await fetch(url).then(response => response.json())
          .then(data => { setContentReviews(data) });
      } else {
        const url = `http://3.91.249.33:1337/${table}?_locale=es-VE&_Key=${key}`
        const resp = await fetch(url).then(response => response.json())
          .then(data => { setContentReviews(data) });
      }
    }
  }

  useEffect(() => {
    getStrapi()
  }, [lang])
  return (
    contentReviews
  );
}
