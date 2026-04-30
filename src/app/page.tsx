export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center gap-6 py-32 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
          Founder Weekly
        </h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          A weekly digest for founders. Building in public, one week at a time.
        </p>
        <p className="text-sm text-zinc-400">
          Status: Connected to Vercel Git
        </p>
      </main>
    </div>
  );
}
