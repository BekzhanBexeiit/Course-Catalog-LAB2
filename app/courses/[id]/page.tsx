import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseById, courses } from "@/lib/courses";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Generate static params for all courses
export function generateStaticParams() {
  return courses.map((course) => ({ id: course.id }));
}

interface Props {
  params: { id: string };
}

export default function CourseDetailPage({ params }: Props) {
  const course = getCourseById(params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      {/* Back button */}
      <Link href="/courses">
        <Button variant="outline" size="sm" className="rounded-full">
          ← Back to Courses
        </Button>
      </Link>

      {/* Main detail card */}
      <Card className="hover:shadow-md hover:border-sky-300 transition">
        <CardHeader>
          <span className="inline-block text-xs font-semibold bg-sky-100 text-sky-600 px-2.5 py-0.5 rounded-full w-fit mb-2">
            {course.category}
          </span>
          <CardTitle className="text-2xl leading-snug text-sky-900">
            {course.title}
          </CardTitle>
          <p className="text-sm text-sky-500 font-medium">
            👩‍🏫 {course.instructor}
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-slate-600 leading-relaxed">{course.description}</p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-lg px-4 py-2">
              <span className="text-lg">🎓</span>
              <div>
                <p className="text-xs text-slate-400">Credits</p>
                <p className="font-bold text-sky-700">{course.credits}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-lg px-4 py-2">
              <span className="text-lg">❤️</span>
              <div>
                <p className="text-xs text-slate-400">Likes</p>
                <p className="font-bold text-sky-700">{course.likes}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-lg px-4 py-2">
              <span className="text-lg">🏷️</span>
              <div>
                <p className="text-xs text-slate-400">Category</p>
                <p className="font-bold text-sky-700">{course.category}</p>
              </div>
            </div>
          </div>

          {/* Enroll button (accent variant — bonus task) */}
          <Button variant="accent" className="rounded-full mt-2 w-full sm:w-auto">
            Enroll in this Course
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
