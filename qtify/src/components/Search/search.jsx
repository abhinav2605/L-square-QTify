import styles from "./search.module.css";
import searchIcon from "../../assets/search-icon.png";

function Search({ placeholder }) {
  return (
    <div className={styles.searchSection}>
      <div>
        <input className={styles.search} placeholder={placeholder} required />
      </div>
      <div className={styles.searchButton}>
        <button className={styles.searchIcon}>
          <img src={searchIcon} alt="Search" />
        </button>
      </div>
    </div>
  );
}

export default Search;
