import React from "react";

const ScheduleTable = ({ schedule }) => {
  if (!schedule || schedule.length === 0) {
    return <p className="empty-state">No schedule added yet.</p>;
  }

  return (
    <div className="table-wrapper">
      <table className="schedule-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Topic</th>
            <th>Date</th>
            <th>Duration</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((entry, idx) => (
            <tr key={entry._id || idx} className={entry.completed ? "row-completed" : ""}>
              <td>{idx + 1}</td>
              <td>{entry.topic}</td>
              <td>
                {entry.date
                  ? new Date(entry.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : "—"}
              </td>
              <td>{entry.duration} min</td>
              <td>
                <span className={`status-chip ${entry.completed ? "done" : "pending"}`}>
                  {entry.completed ? "✓ Done" : "Upcoming"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
