export default function Stats() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">

        <div className="glass rounded-3xl p-8 text-center">
          <h2 className="text-4xl font-black text-yellow-400">100K+</h2>
          <p className="mt-2 text-gray-300">Students</p>
        </div>

        <div className="glass rounded-3xl p-8 text-center">
          <h2 className="text-4xl font-black text-yellow-400">5000+</h2>
          <p className="mt-2 text-gray-300">Lessons</p>
        </div>

        <div className="glass rounded-3xl p-8 text-center">
          <h2 className="text-4xl font-black text-yellow-400">1M+</h2>
          <p className="mt-2 text-gray-300">MCQs</p>
        </div>

        <div className="glass rounded-3xl p-8 text-center">
          <h2 className="text-4xl font-black text-yellow-400">AI</h2>
          <p className="mt-2 text-gray-300">Powered Learning</p>
        </div>

      </div>
    </section>
  );
}