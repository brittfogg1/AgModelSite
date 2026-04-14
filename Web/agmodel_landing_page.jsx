export default function AgModelLandingPage() {
  const modules = [
    {
      name: 'AgModel Breeder',
      user: 'Breeder farms',
      desc: 'Bloodline selection, flock performance, and egg production forecasting in one connected workflow.',
    },
    {
      name: 'AgModel Hatch',
      user: 'Hatcheries',
      desc: 'Hatch rates, chick placement, and actuals versus forecast with shared visibility across the cycle.',
    },
    {
      name: 'AgModel Pullet',
      user: 'Grow-out operations',
      desc: 'Track pullet development, flock readiness, and house-time performance with less guesswork.',
    },
    {
      name: 'AgModel Broiler',
      user: 'Broiler houses',
      desc: 'Monitor grow-out performance, feed conversion, and yield by house with clearer operational signals.',
    },
    {
      name: 'AgModel Forecast',
      user: 'All parties',
      desc: 'Connect demand planning and production forecasting across breeder, hatchery, pullet, and broiler stages.',
    },
    {
      name: 'AgModel Connect',
      user: 'Integrators',
      desc: 'One view across every party, every cycle, and every performance signal in a shared system of truth.',
    },
  ];

  const pillars = [
    {
      title: 'One shared operating system',
      text: 'Connect breeders, hatcheries, and integrators in a single platform instead of isolated systems and disconnected decisions.',
    },
    {
      title: 'Actuals versus forecast at every stage',
      text: 'See what is happening now, what was expected, and where performance is diverging before the cycle ends.',
    },
    {
      title: 'Built for poultry today, designed to scale tomorrow',
      text: 'AgModel is platform-level by design, ready to expand beyond poultry as the business grows into new proteins and production models.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_35%),radial-gradient(circle_at_left,rgba(59,130,246,0.15),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-200">
                Poultry Production Platform
              </div>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                From breeder to broiler. Every cycle. Every yield. One platform.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                AgModel replaces guesswork with a connected production intelligence platform that gives breeders,
                hatcheries, and integrators a shared view of performance from selection through final yield.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/20 transition hover:-translate-y-0.5">
                  Request a Demo
                </button>
                <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Explore the Platform
                </button>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-semibold">3</div>
                  <div className="mt-1 text-sm text-slate-300">Core user groups united</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-semibold">1</div>
                  <div className="mt-1 text-sm text-slate-300">Shared system of truth</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-semibold">6</div>
                  <div className="mt-1 text-sm text-slate-300">Platform modules</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="rounded-[24px] border border-emerald-400/20 bg-slate-900 p-6">
                  <div className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                    Why AgModel
                  </div>
                  <div className="mt-4 space-y-5">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                      <div className="text-lg font-semibold">From prediction to precision</div>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        Crystal Ball implied uncertainty. AgModel models what is happening, why it is happening,
                        and what every party in the production chain should expect next.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                      <div className="text-lg font-semibold">Platform-level thinking</div>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        This is not a point solution for one stage. AgModel is built to coordinate breeder,
                        hatchery, and integrator operations in one connected platform.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                      <div className="text-lg font-semibold">Ready to grow beyond poultry</div>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        The name and architecture support poultry today while leaving room for expansion into
                        additional proteins and agricultural production models tomorrow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">The challenge</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Modern poultry production cannot run on isolated systems.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            For years, teams relied on disconnected tools to estimate breeder selection, feed demand, hatch timing,
            house occupancy, and final flock yield. But today, breeders, hatcheries, and integrators all need the
            same thing: shared visibility into actual performance versus forecast across the entire cycle.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">The transition</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                You used to need a crystal ball. Now you have AgModel.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Crystal Ball became shared language over 15 years of poultry planning. AgModel preserves that legacy
                while moving the business forward with a more precise, connected, and scalable way to manage production.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-slate-900 p-8 shadow-2xl shadow-black/30">
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-center">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Before</div>
                  <div className="mt-2 text-2xl font-semibold">Crystal Ball</div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">Prediction, siloed visibility, and uncertainty.</p>
                </div>
                <div className="text-3xl text-emerald-300">→</div>
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Now</div>
                  <div className="mt-2 text-2xl font-semibold">AgModel</div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">Modeling, shared truth, and operational precision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Product suite</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A platform with products built for each role.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-300">
            Each group gets a focused product experience. Every product runs on the same platform, creating a connected
            operating model across the production chain.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <div key={module.name} className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.07]">
              <div className="text-sm font-medium text-emerald-300">{module.user}</div>
              <h3 className="mt-3 text-2xl font-semibold">{module.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{module.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-[32px] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/15 via-slate-900 to-slate-900 p-8 shadow-2xl shadow-black/30 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Get started</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Replace isolated planning with production intelligence.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
                See how AgModel can help your teams align breeder performance, hatch outcomes, and integrator visibility
                in one system built for better decisions and better yield.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <button className="rounded-2xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/20 transition hover:-translate-y-0.5">
                Schedule a Walkthrough
              </button>
              <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                View Modules
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
