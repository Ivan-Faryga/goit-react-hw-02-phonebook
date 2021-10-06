import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ id, name, number, onDelete }) => (
  <li className={styles.contactItem}>
    <p className={styles.contactName}>
      {name}: <span className={styles.contactNumber}>{number}</span>
    </p>
    <button
      className={styles.deleteContactBtn}
      type="button"
      onClick={() => onDelete(id)}
    >
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
