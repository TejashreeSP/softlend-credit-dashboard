import styles from "./ConfirmationModal.module.css";

function ConfirmationModal({
  offer,
  onClose,
  onConfirm
}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Confirm Loan Offer</h2>

        <p>
          <strong>Lender:</strong>{" "}
          {offer.lender}
        </p>

        <p>
          <strong>Amount:</strong> ₹
          {offer.amount.toLocaleString()}
        </p>

        <p>
          <strong>EMI:</strong> ₹
          {offer.emi.toLocaleString()}
        </p>

        <div className={styles.actions}>
          <button
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;