export default function Score(props) {
  return (
    <div className="score">
      <p>{props.name}</p>
      <p className="number">{props.score}</p>
    </div>
  );
}
