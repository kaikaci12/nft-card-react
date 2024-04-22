export default function Props(props, clickEvent) {
  return (
    <div>
      <h2> SUP my name is {props.name}</h2>
      <h2>I am {props.age}</h2>
      <h2>{props.passion}</h2>
      <button onClick={clickEvent}>CLICK ME</button>
    </div>
  );
}
