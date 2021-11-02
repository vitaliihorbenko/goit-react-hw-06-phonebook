import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label className={styles.filterLabel}>
        Find contacts by name
        <input type="text" name="filter" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
