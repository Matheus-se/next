import { SectionTitleContainer } from "../styles/components/style";

export default function SectionTitle(props) {
  return (
    <SectionTitleContainer style={props?.style}>
      <div>
        <div className="title" style={props?.style}>
          {props.titleName}
        </div>
      </div>
    </SectionTitleContainer>
  );
}
