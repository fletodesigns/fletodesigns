import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Glowing background gradient */}
      <div className="absolute inset-0 hero-gradient z-0 pointer-events-none"></div>

      {/* Giant 404 */}
      <h1 className="text-[10rem] md:text-[14rem] font-extrabold leading-none text-[hsl(var(--fleto-primary))] drop-shadow-[0_0_25px_hsl(var(--fleto-primary)/0.5)] z-10 ">
        404
      </h1>

      {/* Peeking character from a hole */}
      <div className="relative w-64 h-32 mt-[-4rem] z-0">
        {/* Hole */}
        <div className="absolute inset-0 rounded-full bg-[hsl(240,10%,10%)] opacity-90 shadow-inner"></div>

        {/* Hands */}
        <div className="absolute bottom-2 left-6 w-6 h-6 bg-[hsl(var(--fleto-primary))] rounded-full rotate-12"></div>
        <div className="absolute bottom-2 right-6 w-6 h-6 bg-[hsl(var(--fleto-primary))] rounded-full -rotate-12"></div>

        {/* Hat and head */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-red-600 rounded-t-full z-10"></div>
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-[hsl(var(--background))] rounded-full"></div>
      </div>

      {/* Message */}
      <p className="text-lg text-[hsl(var(--muted-foreground))] mt-8 mb-4 text-center max-w-md">
        Uh-oh! Someone fell through the FLETO void. The page{" "}
        <code className="bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] px-2 py-1 rounded font-mono text-sm">
          {location.pathname}
        </code>{" "}
        doesn’t exist.
      </p>

      {/* CTA Button */}
      <a
        href="/"
        className="mt-4 inline-block px-6 py-3 rounded-md bg-[hsl(var(--fleto-primary))] text-[hsl(var(--primary-foreground))] font-semibold shadow-glow hover:shadow-xl transition hover:scale-105"
      >
        ⬅ Return to Home
      </a>
    </div>
  );
};

export default NotFound;
