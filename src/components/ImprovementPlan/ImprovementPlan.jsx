function ImprovementPlan({ factors }) {
  const sortedFactors = [...factors].sort((a, b) => {
    const priority = {
      high: 1,
      medium: 2,
      low: 3
    };

    return priority[a.impact] - priority[b.impact];
  });

  return (
    <div>
      <h2>Improvement Plan</h2>

      {sortedFactors.map((factor, index) => (
        <div
          key={index}
          style={{
            padding: "15px",
            borderBottom: "1px solid #ddd"
          }}
        >
          <h4>
            Step {index + 1}: {factor.factor}
          </h4>

          <p>
            Gain: +{factor.estimated_score_gain} Points
          </p>

          <p>{factor.action}</p>
        </div>
      ))}
    </div>
  );
}

export default ImprovementPlan;