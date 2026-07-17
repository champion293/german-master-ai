import Aurora from "../effects/Aurora";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <div className="absolute inset-0 bg-[#050816]" />

      <Aurora />

      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-yellow-400/20 blur-[120px]" />

      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-purple-500/20 blur-[140px]" />

    </div>
  );
}