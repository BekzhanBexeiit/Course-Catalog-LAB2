import Link from "next/link";
import { Button } from "@/components/ui/button";
import { courses } from "@/lib/courses";

export default function HomePage() {
  const totalCourses = courses.length;
  const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);
  const totalLikes = courses.reduce((sum, c) => sum + c.likes, 0);

  return (
    <div className="flex flex-col items-center text-center gap-10">
      {/* Hero section */}
      <section className="mt-8 flex flex-col items-center gap-6 max-w-2xl">
        <div className="inline-block bg-sky-100 text-sky-600 text-sm font-semibold px-4 py-1.5 rounded-full">
          Advanced Web Technologies · Lab 2
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-sky-900">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            Course Catalog
          </span>
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Browse our collection of technology courses. Learn web development,
          databases, algorithms, mobile apps, and cloud computing — all in one
          place.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/courses">
            <Button size="lg" variant="accent" className="rounded-full px-8">
              Browse Courses →
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline" className="rounded-full px-8">
              About
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats row */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
        {[
          { label: "Courses", value: totalCourses, icon: "📖" },
          { label: "Total Credits", value: totalCredits, icon: "🎓" },
          { label: "Total Likes", value: totalLikes, icon: "❤️" },
        ].map(({ label, value, icon }) => (
          <div
            key={label}
            className="bg-white rounded-xl border border-sky-100 shadow-sm p-6 flex flex-col items-center gap-2"
          >
            <span className="text-3xl">{icon}</span>
            <span className="text-3xl font-bold text-sky-700">{value}</span>
            <span className="text-sm text-slate-500">{label}</span>
          </div>
        ))}
      </section>

      {/* Category badges */}
      <section className="flex flex-wrap gap-2 justify-center">
        {Array.from(new Set(courses.map((c) => c.category))).map((cat) => (
          <span
            key={cat}
            className="bg-sky-100 text-sky-700 text-sm font-medium px-3 py-1 rounded-full border border-sky-200"
          >
            {cat}
          </span>
        ))}
      </section>
    </div>
  );
}
