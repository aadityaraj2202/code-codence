import React from "react";
import ProgressBar from "./ProgressBar";

const LEVEL_COLORS = {
  Beginner: "#10b981",
  Intermediate: "#f59e0b",
  Advanced: "#ef4444",
};

const CourseCard = ({ course, myProgress, currentUserId, isEnrolled = false, onOpenCourse }) => {
  const enrolled = isEnrolled;

  const progress = myProgress || course.progress?.find(
    (p) => p.student === currentUserId || p.student?._id === currentUserId,
  );

  return (
    <div className="course-card">
      <div className="course-card-thumbnail">
        {course.thumbnail ? (
          <img src={course.thumbnail} alt={course.title} />
        ) : (
          <div className="thumbnail-placeholder">
            <span>??</span>
          </div>
        )}
        <span
          className="level-badge"
          style={{ backgroundColor: LEVEL_COLORS[course.level] || "#6366f1" }}
        >
          {course.level}
        </span>
      </div>

      <div className="course-card-body">
        <span className="course-category">{course.category}</span>
        <h3 className="course-title">{course.title}</h3>
        <p className="course-desc">{course.description?.slice(0, 100)}...</p>

        <div className="course-meta">
          <span>?? {course.trainer?.name || "Unknown"}</span>
          <span>?? {course.students?.length || 0} students</span>
          <span>?? {course.schedule?.length || 0} lessons</span>
        </div>

        {enrolled && progress && (
          <div className="card-progress">
            <ProgressBar
              completed={progress.completedLessons}
              total={progress.totalLessons || course.schedule?.length || 1}
              label="Your progress"
            />
          </div>
        )}

        <div className="course-card-actions">
          <button type="button" onClick={() => onOpenCourse?.(course)} className="btn btn-primary">
            {enrolled ? "Continue" : "View Course"}
          </button>
          {enrolled && <span className="enrolled-badge">? Enrolled</span>}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

