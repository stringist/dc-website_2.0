export default function GetInTouchProfile({ ...props }) {
  console.log(props);
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.position}</p>
      <p>{props.email}</p>
      <p>{props.telefon}</p>
    </div>
  );
}
