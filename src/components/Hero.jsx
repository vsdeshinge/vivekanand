// src/components/Hero.jsx

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-[80vh] flex-col items-center justify-center px-4"
    >
      <p className="text-sm uppercase tracking-[0.25em] text-slate-400 text-center">
        Freelancer • Web Dev • Designer • Event Manager
      </p>

      <h1 className="mt-4 text-center text-4xl font-display font-semibold md:text-5xl">
        Hi, I&apos;m{" "}
        <span className="text-brand-gradient">Maharshi</span>
      </h1>

      <p className="mt-4 max-w-xl text-center text-slate-300">
        I build websites, brands, and experiences for businesses — from
        front-end &amp; back-end development to graphic design, motion
        graphics, and exhibition fabrication.
      </p>
    </section>
  );
};

export default Hero;
