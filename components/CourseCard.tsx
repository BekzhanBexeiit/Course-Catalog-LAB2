import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Course } from "@/lib/courses";

type CourseCardProps = Pick<
  Course,
  "id" | "title" | "description" | "credits" | "likes" | "category"
>;

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
  category,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="block h-full">
      <Card className="h-full hover:shadow-md hover:border-sky-300 transition duration-200 cursor-pointer">
        <CardHeader>
          {/* Category badge */}
          <span className="inline-block text-xs font-semibold bg-sky-100 text-sky-600 px-2.5 py-0.5 rounded-full w-fit mb-1">
            {category}
          </span>
          <CardTitle className="text-lg leading-snug">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {/* Description */}
          <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Bottom row: credits + likes */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-sm text-sky-700 font-medium bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-md">
              🎓 {credits} credits
            </span>
            <Button variant="ghost" size="sm" className="gap-1">
              ❤️ {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
