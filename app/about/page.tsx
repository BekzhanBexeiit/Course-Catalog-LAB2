import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AboutPage() {
  const features = [
    {
      icon: "🎨",
      title: "Tailwind CSS",
      desc: "Utility-first CSS framework for rapid UI development with responsive design built in.",
    },
    {
      icon: "🧩",
      title: "shadcn/ui",
      desc: "Beautifully designed components built with Radix UI and Tailwind CSS — copy, paste, customise.",
    },
    {
      icon: "⚡",
      title: "Next.js 14",
      desc: "React framework with App Router, Server Components, and file-based routing out of the box.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      desc: "Mobile-first grid: 1 column on phones, 2 on tablets, 3 on desktops — verified with DevTools.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10">
      {/* Header */}
      <section className="text-center flex flex-col gap-4 mt-4">
        <h1 className="text-4xl font-extrabold text-sky-900">About This Lab</h1>
        <p className="text-slate-500 text-lg leading-relaxed">
          Lab 2 of Advanced Web Technologies — styling a course catalog with
          Tailwind CSS and shadcn/ui. No new logic, only the look of an
          already-working project.
        </p>
      </section>

      {/* Tech stack cards */}
      <section>
        <h2 className="text-xl font-semibold text-sky-800 mb-4">Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map(({ icon, title, desc }) => (
            <Card
              key={title}
              className="hover:shadow-md hover:border-sky-300 transition"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <span className="text-2xl">{icon}</span>
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Lab info */}
      <section className="bg-sky-50 border border-sky-200 rounded-xl p-6 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-sky-800">Lab Details</h2>
        <ul className="text-sm text-slate-600 space-y-1">
          <li>
            <span className="font-medium text-sky-700">Course:</span> Advanced
            Web Technologies
          </li>
          <li>
            <span className="font-medium text-sky-700">Lab:</span> Week 3 — Lab
            2
          </li>
          <li>
            <span className="font-medium text-sky-700">Goal:</span> Styling with
            Tailwind CSS and shadcn/ui
          </li>
          <li>
            <span className="font-medium text-sky-700">Theme:</span> Sky-blue
            light design
          </li>
        </ul>
      </section>

      <div className="flex justify-center">
        <Link href="/courses">
          <Button variant="accent" className="rounded-full px-8">
            View All Courses →
          </Button>
        </Link>
      </div>
    </div>
  );
}
