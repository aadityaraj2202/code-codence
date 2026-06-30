import { courseRoadmaps } from "@/data/courseRoadmaps";
import CoursePage from "@/components/CoursePage";

export default function FullStackJavaPage() {
    const roadmap = courseRoadmaps.find((c) => c.courseId === "full-stack-java")!;
    return <CoursePage roadmap={roadmap} />;
}
