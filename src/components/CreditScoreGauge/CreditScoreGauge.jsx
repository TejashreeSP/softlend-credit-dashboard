import styles from "./CreditScoreGauge.module.css";

function CreditScoreGauge({ score }) {
  let colorClass = styles.red;

  if (score >= 650 && score < 750) {
    colorClass = styles.orange;
  }

  if (score >= 750) {
    colorClass = styles.green;
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.gauge} ${colorClass}`}>
        <span>{score}</span>
      </div>

      <h3>Credit Score</h3>
    </div>
  );
}

export default CreditScoreGauge;