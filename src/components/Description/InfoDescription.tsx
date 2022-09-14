import React from "react";

function InfoDescription(props: any) {
  const reaction = () => {
    alert("Reaction");
  };
  const fonctionParam = (param: any) => {
    alert(param);
  };
  const functionEvent = (param: any, e: React.SyntheticEvent) => {
    alert(`Mon event est ${e.type}`);
  };
  return (
    <div>
      <h2>{props.description}</h2>
      <br />
      <button onClick={reaction}>Action</button>
      <br />
      <button onClick={() => fonctionParam("Je suis le param")}>
        Param Btn
      </button>
      <br />
      <button
        onMouseLeave={(event) => functionEvent("Event Object!", event)}
      >Mon type event</button>
    </div>
  );
}

export default InfoDescription;
