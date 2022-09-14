function FalseComp() {
  return <h1>Je suis faux</h1>;
}

function TrueComp() {
  return <h1>JE suis true</h1>;
}

function Logic(props: any) {
  const isBoolean = props.boolean;
  if (isBoolean) {
    return <TrueComp></TrueComp>;
  } else {
    return <FalseComp></FalseComp>;
  }
}

export default Logic;
