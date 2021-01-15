import { useEffect } from "react";
import BorderButton from "./buttonBorder";

export default function CarouselItem(props) {
  return (
    <li className="carrousel-item">
      <button>
        <div className="container">
          <BorderButton startBorderAnimation={props.isActive} />
        </div>
        <div className="carrousel-thumb-wrapper">
          <div className={"carrousel-thumb"}>
            <img src={props?.src} />
          </div>
        </div>
        <label>{props?.title}</label>
      </button>
    </li>
  );
}
