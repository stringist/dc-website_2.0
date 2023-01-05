export default function GetInTouchProfile({ ...props }) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.position}</p>
      <p>
        Email: <a className="blue-link" href={`mailto:${props.email}`}>{props.email}</a>
      </p>
      <p>
        Phone: <a href={`tel:${props.telefon}`}>{props.telefon}</a>
      </p>
    </div>
  );
}
