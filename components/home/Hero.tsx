export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      <div className="z-10 max-w-5xl text-center">

        <p className="mb-6 text-yellow-400 font-bold uppercase tracking-[8px]">
          German Language Platform
        </p>

        <h1 className="text-6xl md:text-8xl font-black text-white">
          GermanMaster AI
        </h1>

        <p className="mt-8 text-xl text-gray-300 leading-9">
          Learn German from A1 to C2 with AI, quizzes, speaking practice,
          vocabulary, grammar and interactive lessons.
        </p>

        <button className="btn-primary mt-12">
          Start Learning →
        </button>

      </div>

    </section>
  );
}