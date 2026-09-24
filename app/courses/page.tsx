import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/courses";

export default function CoursesPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page header */}
      <section className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold text-sky-900">All Courses</h1>
        <p className="text-slate-500">
          {courses.length} courses available — click any card to see details.
        </p>
      </section>

      {/* Responsive grid: 1 col → 2 col (sm) → 3 col (lg) → 4 col (xl) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
