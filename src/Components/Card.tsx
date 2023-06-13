import React from "react";
import data from "../data.json";
import "../Styles/styles.sass";

function Card() {
  return (
    <>
      <input type="text" placeholder="Search for a country..." />
      <div className="cards_main_container">
        {data.map(({ flags, name, population, region, capital }, index) => (
          <div className="cards" key={index}>
            <div className="individual_card">
              <div className="flags">
                <img src={flags.svg} alt={name} />
              </div>

              <h4>{name}</h4>
              <h5>
                <strong>Population:</strong> {population}
              </h5>
              <h5>
                <strong>Region:</strong> {region}
              </h5>
              <h5>
                <strong>Capital:</strong> {capital}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
