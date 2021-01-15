export default function BaseLineKnob(props) {
  return (
    <div className="baseline-knob" style={{ left: props.left }}>
      <div className="bullet"></div>
    </div>
  );
}
