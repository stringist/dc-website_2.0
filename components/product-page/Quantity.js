export default function Quantity(props) {
  function reduceQuant(e) {
    props.setQuant((old) => old - 1);
  }
  function addQuant() {
    props.setQuant((old) => old + 1);
  }
  return (
    <div className="input-group">
      <label htmlFor="quantity">{props.name}:</label>
      <div className="quant-input">
        <div onClick={props.quant > 1 ? reduceQuant : null} className="minus">
          -
        </div>
        <input
          type="num"
          id={props.name}
          name={props.name}
          value={props.quant}
          min="1"
          inputMode="numeric"
          onChange={(e) => {
            props.setQuant(Number(e.target.value));
          }}
        />
        <div onClick={addQuant} className="plus">
          +
        </div>
      </div>
    </div>
  );
}
