export default function ButtonHabilities(props) {
  return (
    <div>
      <span className="option-icon">
        <span className="option-icon-content">
          <img src={props.src} />
        </span>
        <span className="option-icon-border">
          <div className="container">{/* fazer bordas */}</div>
        </span>
      </span>
      <span className="option-line"></span>
      <span className="option-bullet-container">
        <span className="bullet"></span>
      </span>
    </div>
  );
}
