// Karakter bileşeniniz buraya gelecek

import React from "react";

const Karakter = (props) => {
  const { karakterListesi } = props;

  const tumKarakterler = karakterListesi.map((herBirKarakter) => (
    <div className="container">
      <button className="myButton">
        <p>{herBirKarakter.name}</p>
        <p className="birthYear">{herBirKarakter.birth_year}</p>
      </button>
    </div>
  ));

  return (
    <div className="karakter-container">
      <div>{tumKarakterler}</div>
    </div>
  );
};

export default Karakter;
