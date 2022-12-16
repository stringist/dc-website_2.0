import Collapsible from "react-collapsible";
import styles from "../styles/ProductList.module.scss";

export default function MobileFilters() {
  return (
    <>
      <button className={styles.openFilters}>Filters</button>
      <div className={styles.mobileFilterMenu}>
        <div className={styles.mobileFilters}>
          <Collapsible trigger="Brand">
            {brands.map((brand, index) => (
              <div className={styles.input_group} key={index}>
                <input type="checkbox" id={brand} name={brand} value={brand} onChange={toggleBrand}></input>
                <label htmlFor={brand}>{brand}</label>
              </div>
            ))}
          </Collapsible>
          {subcategories.length > 1 ? (
            <Collapsible trigger="Subcategory">
              {subcategories.map((subc, index) => (
                <div className={styles.input_group} key={index}>
                  <input type="checkbox" id={subc} name={subc} value={subc} onChange={toggleSubc}></input>
                  <label htmlFor={subc}>{subc}</label>
                </div>
              ))}
            </Collapsible>
          ) : null}

          <Collapsible trigger="Color">
            {colors.map((color, index) => (
              <div className={styles.input_group} key={index}>
                <input type="checkbox" id={color} name={color} value={color} onChange={toggleColor}></input>
                <label htmlFor={color}>{color.charAt(0).toUpperCase() + color.substring(1)}</label>
              </div>
            ))}
          </Collapsible>

          {subcategories.length > 1 != [] ? (
            <Collapsible trigger="Speed">
              {speeds.map((speed, index) => (
                <div className={styles.input_group} key={index}>
                  <input type="checkbox" id={speed} name={speed} value={speed} onChange={toggleSpeed}></input>
                  <label htmlFor={speed}>{speed}</label>
                </div>
              ))}
            </Collapsible>
          ) : null}
        </div>
      </div>
    </>
  );
}
