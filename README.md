# Fitness App

A modern fitness web application built with [Next.js](https://nextjs.org/) and [React](https://react.dev/), designed to help users discover and explore effective exercises. The app features exercise search, filtering, detailed exercise information, and related workout videos.

---

## 🚀 Features

- **Exercise Search:** Find exercises by name, target area, or body part.
- **Filter by Body Part:** Browse exercises by specific body parts.
- **Exercise Details:** View detailed instructions, images, and equipment info for each exercise.
- **Related Videos:** Watch YouTube videos related to each exercise.
- **Responsive UI:** Clean, mobile-friendly design using Tailwind CSS.
- **Skeleton Loaders:** Smooth loading experience with animated skeletons.
- **Pagination:** Easily browse through large lists of exercises.
- **Fast Navigation:** Client-side routing for a seamless experience.

---

## 🗂️ Folder Structure

```
.
├── app/                  # Main Next.js app directory
│   ├── Exercise/         # Exercise pages and details
│   ├── Skeletons/        # Skeleton loading components
│   ├── lib/              # API definitions, types, and utilities
│   ├── ui/               # Reusable UI components
│   ├── globals.css       # Global styles (Tailwind)
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets (images, icons)
├── .env                  # Environment variables (API keys, endpoints)
├── package.json          # Project metadata and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── next.config.ts        # Next.js configuration
└── README.md             # Project documentation
```

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **API:** ExerciseDB & YouTube (via RapidAPI)
- **Font:** [Geist](https://vercel.com/font) & [Lusitana](https://fonts.google.com/specimen/Lusitana)
- **Utilities:** [clsx](https://www.npmjs.com/package/clsx) for conditional classes

---

## ⚡ Quick Start

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/fitness.git
   cd fitness
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   - Copy `.env.example` to `.env` (if available) or create a `.env` file.
   - Add your RapidAPI keys and API endpoints:
     ```
     NEXT_PUBLIC_RAPIDAPI_KEY=your_exercisedb_api_key
     NEXT_PUBLIC_RAPIDAPI_HOST=your_exercisedb_api_host
     NEXT_PUBLIC_API_KEY_VIDEOS=your_youtube_api_key
     NEXT_PUBLIC_BodyPartUrl=https://exercisedb.io/api/bodyPartList
     NEXT_PUBLIC_ALL_EXERCISES=https://exercisedb.io/api/exercises
     NEXT_PUBLIC_ALL_EXERCISES_QUERY=https://exercisedb.io/api/exercises/bodyPart/
     NEXT_PUBLIC_AllTopExercises=https://exercisedb.io/api/exercises/top
     NEXT_PUBLIC_DYNAMIC_TOP_EXERCISES=https://exercisedb.io/api/exercises/top/
     NEXT_PUBLIC_EXERCISES_ID=https://exercisedb.io/api/exercises/
     NEXT_PUBLIC_SEARCH_VIDEOS=https://youtube-search-and-download.p.rapidapi.com/search
     ```

4. **Run the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**
   - Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📁 Notable Files

- [app/page.tsx](app/page.tsx): Home page with search and featured exercises.
- [app/Exercise/page.tsx](app/Exercise/page.tsx): Exercise listing with pagination and search.
- [app/ui/Result.tsx](app/ui/Result.tsx): Displays top three exercises for a query.
- [app/ui/ExerciseCards.tsx](app/ui/ExerciseCards.tsx): Renders exercise cards with pagination.
- [app/lib/definition.ts](app/lib/definition.ts): API calls and type definitions.

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [RapidAPI Documentation](https://rapidapi.com/)

---

## 📝 License

This project is for educational purposes.

---

**Made by ahmadbuilds**
