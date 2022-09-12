import InfoDescription from "./InfoDescription";
import InfoDate from "./InfoDate";
import InfoImage from './infoImage'

function Description(props: any) {
  const info = {
    description: "ordinateur",
    date: new Date(),
  };
  return (
    <div>
      <InfoDescription description={props.description}></InfoDescription>
      <InfoDate date={info.date}></InfoDate>
      <InfoImage src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"></InfoImage>
    </div>
  );
}

export default Description;
