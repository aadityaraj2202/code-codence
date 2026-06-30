import React from "react";

const TrainerInfo = ({ trainer }) => {
  if (!trainer) return null;

  return (
    <div className="trainer-info-card">
      <div className="trainer-avatar">
        {trainer.avatar ? (
          <img src={trainer.avatar} alt={trainer.name} />
        ) : (
          <span className="avatar-placeholder large">
            {trainer.name?.[0]?.toUpperCase() || "T"}
          </span>
        )}
      </div>
      <div className="trainer-details">
        <h4>{trainer.name}</h4>
        <span className="badge">Trainer</span>
        <p className="trainer-email">✉ {trainer.email}</p>
        {trainer.bio && <p className="trainer-bio">{trainer.bio}</p>}
      </div>
    </div>
  );
};

export default TrainerInfo;
