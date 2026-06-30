import React from 'react';
import { Link } from 'react-router-dom';

const TimelineItem = ({ stepNumber, title, description, link, position }) => {
    return (
        <div className={`timeline-v-item ${position}`}>
            {position === 'left' ? (
                <>
                    <div className="item-v-content">
                        <div className="policy-card">
                            <span className="step-tag">Step {stepNumber}</span>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <Link to={link} className="v-cta">View Details</Link>
                        </div>
                    </div>
                    <div className="item-v-node">{stepNumber}</div>
                    <div className="item-v-empty"></div>
                </>
            ) : (
                <>
                    <div className="item-v-empty"></div>
                    <div className="item-v-node">{stepNumber}</div>
                    <div className="item-v-content">
                        <div className="policy-card">
                            <span className="step-tag">Step {stepNumber}</span>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <Link to={link} className="v-cta">View Details</Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default TimelineItem;
