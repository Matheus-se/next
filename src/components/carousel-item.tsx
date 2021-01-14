import BorderButton from "./buttonBorder";

export default function CarouselItem(props) {
  return (
    <li className="carrousel-item">
      <button>
        <div className="container">
          <BorderButton />
        </div>
        <div className="carrousel-thumb-wrapper">
          <div
            className={
              props?.active ? "carrousel-thumb active" : "carrousel-thumb"
            }
          >
            <img src={props?.src} />
          </div>
        </div>
        <label>{props?.title}</label>
      </button>
    </li>
  );
}
