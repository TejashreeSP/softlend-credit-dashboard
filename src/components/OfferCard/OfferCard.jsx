import styles from "./OfferCard.module.css";

function OfferCard({
  offer,
  score,
  onAccept
}) {
  const unlocked =
    score >= offer.min_score_required;

  const scoreGap =
    offer.min_score_required - score;

  return (
    <div
      className={`${styles.card} ${
        !unlocked ? styles.locked : ""
      }`}
    >
      <h3>{offer.lender}</h3>

      <p>
        Amount: ₹
        {offer.amount.toLocaleString()}
      </p>

      <p>
        Interest Rate:
        {offer.interest_rate}%
      </p>

      <p>
        Tenure:
        {offer.tenure_months} Months
      </p>

      <p>
        EMI: ₹
        {offer.emi.toLocaleString()}
      </p>

      {unlocked ? (
        <button
          className={styles.button}
          onClick={() =>
            onAccept(offer)
          }
        >
          Accept Offer
        </button>
      ) : (
        <>
          <p className={styles.lock}>
            🔒 Locked
          </p>

          <p>
            Improve score by{" "}
            {scoreGap} points
          </p>
        </>
      )}
    </div>
  );
}

export default OfferCard;