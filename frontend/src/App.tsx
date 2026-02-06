function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto flex w-full max-w-md flex-col gap-6 px-6 pb-6 pt-10">
        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-400">
          <span>Companion</span>
          <span>Secure by default</span>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-emerald-300">Hello World</p>
          <h1 className="text-3xl font-semibold leading-tight">
            Soulmaking Companion is ready for your first session.
          </h1>
          <p className="text-sm text-slate-300">
            This mobile-first app is wired to a PocketBase backend and deployed by GitHub Actions.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <button className="rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-400/40 transition hover:bg-emerald-300">
            Start a check-in
          </button>
          <button className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200">
            View secure setup
          </button>
        </div>
      </header>
      <main className="mx-auto w-full max-w-md px-6 pb-12">
        <section className="grid gap-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Backend</p>
            <p className="mt-2 text-sm text-slate-200">PocketBase is configured with origin and port guards.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Frontend</p>
            <p className="mt-2 text-sm text-slate-200">Vite, React, Tailwind, ESLint, Prettier, and Vitest are wired in.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Deployment</p>
            <p className="mt-2 text-sm text-slate-200">Fly.io deployment runs from GitHub Actions with secrets only.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
