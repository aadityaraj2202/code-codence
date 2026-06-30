import React from 'react';
import TimelineItem from './TimelineItem';

const Timeline = ({ policies }) => {
    return (
        <section className="vertical-timeline-section">
            <div className="section-header">
                <h2>Our Operational Policies</h2>
                <p>A structured collection of our corporate guidelines and engagement standards.</p>
            </div>

            <div className="timeline-v-container">
                <div className="timeline-v-line"></div>

                <div className="timeline-v-items">
                    {policies.map((policy, index) => (
                        <TimelineItem
                            key={policy.stepNumber}
                            stepNumber={policy.stepNumber}
                            title={policy.title}
                            description={policy.description}
                            link={policy.link}
                            position={policy.position}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
