import React from "react";
import "./Main.scss";
import { useDispatch, useSelector } from "react-redux";
import { CONFIG } from "../../config";
import { sortBy } from "../../redux/slices/jewelrySlice";

const Main = () => {
  const jewelry = useSelector((state) => {
    return state.jewelry.jewelry;
  });

  const dispatch = useDispatch();

  return (
    <div className="main">
      <div className="main-info">
        Earrings
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="main-sortby">
        <div className="main-sortby-choose">SORT BY:</div>
        {CONFIG.sort.map(({ id, title }) => (
          <div
            key={id}
            onClick={() => {
              dispatch(sortBy(title));
            }}
            className="main-sortby-option"
          >
            {title}
          </div>
        ))}
      </div>
      <div className="main-earrings">
        {jewelry.map(({ id, name, price, image }) => (
          <div key={id} className="main-earrings-earring">
            <img src={image} />
            <div className="main-earrings-earring-info">
              <h6>{name}</h6>
              <p>${price}.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
