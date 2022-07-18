import { useState, useEffect } from "react"

export const useGet = (table, key, lang) => {
  const [contentReviews, setContentReviews] = useState([]);
  const getStrapi = async () => {
    const domain = process.env.API_URL || "http://localhost:1337"
    //console.log(process.env.API_URL)
    if (lang === "es") {
      if (key === "false") {
        const url = `${domain}/${table}?_locale=es-VE`
        const resp = await fetch(url).then(response => response.json())
          .then(data => { setContentReviews(data) });
      } else {
        const url = `${domain}/${table}?_locale=es-VE&_Key=${key}`
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
