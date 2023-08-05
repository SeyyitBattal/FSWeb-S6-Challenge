import React, { useEffect, useState } from "react";
import Karakter from "./components/Karakter";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [karakterListesi, setKarakterListesi] = useState([]);
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

  return (
    <div className="App">
      <h1 className="Header">CODE WARS</h1>
      <Karakter karakterListesi={karakterListesi} />
    </div>
  );
};

export default App;
