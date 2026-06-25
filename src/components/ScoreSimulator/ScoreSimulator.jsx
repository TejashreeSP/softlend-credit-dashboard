import { useState } from "react";

function ScoreSimulator({ currentScore, factors }) {
  const [selectedFactors, setSelectedFactors] = useState([]);

  const toggleFactor = (factor) => {
    if (selectedFactors.includes(factor.factor)) {
      setSelectedFactors(
        selectedFactors.filter(
          (item) => item !== factor.factor
        )
      );
    } else {
      setSelectedFactors([
        ...selectedFactors,
        factor.factor
      ]);
    }
  };

  const projectedScore =
    currentScore +
    factors
      .filter((factor) =>
        selectedFactors.includes(factor.factor)
      )
      .reduce(
        (sum, factor) =>
          sum + factor.estimated_score_gain,
        0
      );

  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "20px",
        boxShadow:
          "0 4px 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2>What If Score Simulator</h2>

      {factors.map((factor) => (
        <div key={factor.factor}>
          <label>
            <input
              type="checkbox"
              checked={selectedFactors.includes(
                factor.factor
              )}
              onChange={() =>
                toggleFactor(factor)
              }
            />

            {factor.factor}
            (+{factor.estimated_score_gain})
          </label>
        </div>
      ))}

      <h3>
        Projected Score:
        {projectedScore}
      </h3>
    </div>
  );
}

export default ScoreSimulator;