import styles from "./ScoreFactorCard.module.css";

function ScoreFactorCard({ factor }) {
  return (
    <div className={styles.card}>
      <h3>{factor.factor}</h3>

      <p>
        <strong>Current:</strong> {factor.current_value}
      </p>

      <p>
        <strong>Ideal:</strong> {factor.ideal_value}
      </p>

      <span
        className={`${styles.badge} ${
          factor.impact === "high"
            ? styles.high
            : factor.impact === "medium"
            ? styles.medium
            : styles.low
        }`}
      >
        {factor.impact.toUpperCase()}
      </span>

      <h4>+{factor.estimated_score_gain} Points</h4>

      <p>
        <strong>Action:</strong>
      </p>

      <p>{factor.action}</p>
    </div>
  );
}

export default ScoreFactorCard;