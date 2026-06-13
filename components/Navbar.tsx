export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-base text-white">✦</span>
          <span className="text-base font-semibold tracking-tight text-white font-body">
            Nexora
          </span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6">
          {["Home", "Pricing", "About", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[13px] font-medium text-white/80 hover:text-white transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          className="text-[13px] font-medium bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-white/90 transition-colors duration-200 font-body"
        >
          Get started
        </a>
      </div>
    </nav>
  );
}
