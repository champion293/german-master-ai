export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-extrabold text-yellow-400">
            🇩🇪 GermanMaster AI
          </h1>

          <p className="text-xs text-gray-400">
            Learn German A1 → C2
          </p>
        </div>

        {/* Menu */}
        <nav>
          <ul className="hidden gap-8 font-medium text-white md:flex">

            <li>
              <a
                href="#"
                className="transition duration-300 hover:text-yellow-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition duration-300 hover:text-yellow-400"
              >
                Courses
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition duration-300 hover:text-yellow-400"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition duration-300 hover:text-yellow-400"
              >
                Contact
              </a>
            </li>

          </ul>
        </nav>

        {/* Button */}
        <button className="rounded-full bg-yellow-400 px-6 py-2 font-semibold text-black transition duration-300 hover:scale-105">
          Login
        </button>

      </div>
    </header>
  );
}