import styles from './phonebook.module.css';

function Button({ type, onClick, buttonName, disabled }) {
  return (
    <button>
      type={type}
      className={disabled ? styles.btnLogoutDisabled : styles.btnList}
      onClick={onClick}
      disabled={disabled}>{buttonName}
    </button>
  );
}

export { Button };
