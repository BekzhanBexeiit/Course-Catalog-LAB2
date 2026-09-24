# 📚 Course Catalog

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000000?style=for-the-badge)

**Advanced Web Technologies — Lab 2**
*Styling with Tailwind CSS and shadcn/ui*

</div>

---

## 🎯 About This Project

A fully responsive **course catalog** web application built with Next.js 14 App Router.  
The goal of Lab 2 was to style an existing course catalog using **Tailwind CSS** and **shadcn/ui** components — making it clean and responsive on phone, tablet, and desktop alike.

> _"No new logic today, only the look of an already-working project."_ — Lab 2 instructions

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Sky-Blue Theme** | Custom CSS variables for a soft, light blue color palette |
| 📱 **Fully Responsive** | 1 column → 2 columns → 3 columns → 4 columns by screen width |
| 🧩 **shadcn/ui Components** | Card, CardHeader, CardTitle, CardContent, Button |
| 🔵 **Active Nav Highlighting** | Current page highlighted using `usePathname()` |
| 🌙 **Dark Mode Ready** | CSS variables support system dark mode |
| ⚡ **Server Components** | CourseCard stays a Server Component — no `use client` |
| 🎭 **Custom Button Variant** | Gradient `accent` variant added to shadcn/ui Button |

---

## 🖥️ Pages

```
/               → Home page with hero, stats, and category badges
/courses        → Course list with responsive grid
/courses/[id]   → Course detail page
/about          → About this lab
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/beka070/course-catalog.git
cd course-catalog

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

---

## 🗂️ Project Structure

```
course-catalog/
├── app/
│   ├── layout.tsx          # Root layout with NavBar + footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind directives + sky-blue CSS variables
│   ├── about/
│   │   └── page.tsx        # About page
│   └── courses/
│       ├── page.tsx        # Course list (responsive grid)
│       └── [id]/
│           └── page.tsx    # Course detail page
├── components/
│   ├── NavBar.tsx          # Sticky nav with active link (use client)
│   ├── CourseCard.tsx      # shadcn/ui Card — Server Component ✅
│   └── ui/
│       ├── button.tsx      # shadcn/ui Button + custom accent variant
│       └── card.tsx        # shadcn/ui Card components
├── lib/
│   ├── courses.ts          # Course data (6 courses)
│   └── utils.ts            # cn() helper (clsx + tailwind-merge)
├── tailwind.config.ts      # Tailwind configuration
└── README.md
```

---

## 📐 Responsive Grid

The course list uses a mobile-first responsive grid:

```
📱 Mobile  (< 640px)   → 1 column   grid-cols-1
📟 Tablet  (≥ 640px)   → 2 columns  sm:grid-cols-2
💻 Desktop (≥ 1024px)  → 3 columns  lg:grid-cols-3
🖥️ Wide    (≥ 1280px)  → 4 columns  xl:grid-cols-4
```

---

## 🛠️ Tech Stack

- **[Next.js 14](https://nextjs.org/)** — React framework with App Router & Server Components
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** — Beautifully designed component library
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe JavaScript
- **[clsx](https://github.com/lukeed/clsx)** + **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** — Dynamic class handling

---

## ✅ Lab 2 Acceptance Checklist

- [x] `npm run dev` starts with zero TypeScript errors
- [x] `npm run build` completes successfully
- [x] `CourseCard` uses `Card`, `CardHeader`, `CardTitle`, `CardContent`, `Button` from shadcn/ui
- [x] Course list shows 1 / 2 / 3 columns by screen width
- [x] Cards have a visible hover effect (`hover:shadow-md hover:border-sky-300`)
- [x] Navigation is styled, in a row, with hover state
- [x] `CourseCard` stays a **Server Component** (no `use client`)
- [x] Bonus: custom color theme (sky-blue)
- [x] Bonus: custom `accent` button variant
- [x] Bonus: active nav link highlighting

---

<div align="center">

Made with ☕ for **Advanced Web Technologies** · Week 3

</div>
