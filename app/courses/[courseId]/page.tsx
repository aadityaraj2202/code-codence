import { notFound } from "next/navigation";
import { courseRoadmaps } from "@/data/courseRoadmaps";
import CoursePage from "@/components/CoursePage";

export async function generateStaticParams() {
    return courseRoadmaps.map((c: { courseId: string }) => ({ courseId: c.courseId }));
}

export default async function Page({ params }: { params: Promise<{ courseId: string }> }) {
    const { courseId } = await params;
    const roadmap = courseRoadmaps.find((c: { courseId: string }) => c.courseId === courseId);
    if (!roadmap) notFound();
    return <CoursePage roadmap={roadmap} />;
}
