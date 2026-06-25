import data from "../data/data.json";

import CreditScoreGauge from "../components/CreditScoreGauge/CreditScoreGauge";

import ScoreFactorCard from "../components/ScoreFactorCard/ScoreFactorCard";

import ImprovementPlan from "../components/ImprovementPlan/ImprovementPlan";

import ScoreSimulator from "../components/ScoreSimulator/ScoreSimulator";

function Dashboard() {
  const customer = data.customer;

  const potentialScore =
    customer.cibil_score +
    data.score_factors.reduce(
      (sum, factor) => sum + factor.estimated_score_gain,
      0
    );

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px",
        background: "white",
        borderRadius: "16px",
        boxShadow:
        "0 10px 25px rgba(0,0,0,0.1)"
        }}
    >
      <h1>Softlend Credit Dashboard</h1>

      <CreditScoreGauge score={customer.cibil_score} />

      <h2>{customer.name}</h2>

      <p>
        Current Score:
        <strong> {customer.cibil_score}</strong>
      </p>

      <p>
        Potential Score:
        <strong> {potentialScore}</strong>
      </p>

      <p>
        Updated:
        <strong> {customer.score_updated_at}</strong>
      </p>

      <hr />

      <h2>Credit Factors</h2>

      {data.score_factors.map((factor, index) => (
        <ScoreFactorCard
          key={index}
          factor={factor}
        />
      ))}

      <hr />

      <ImprovementPlan
        factors={data.score_factors}
      />

      <ScoreSimulator
        currentScore={customer.cibil_score}
        factors={data.score_factors}
        />
    </div>
  );
}

export default Dashboard;