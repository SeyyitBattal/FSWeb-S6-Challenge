// Karakter bileşeniniz buraya gelecek

import axios from "axios";
import { useEffect, useState } from "react";

const Karakter = () => {
  const [karakterListesi, setKarakterListesi] = useState();

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then(function (response) {
        console.log("Gelen veri: ", response.data);
        setKarakterListesi(response.data);
      })
      .catch(function (error) {
        console.error("Veriyi çekmede hata var");
        console.log(error);
      });
  }, []);
};

export default Karakter;
