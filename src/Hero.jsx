function Hero() {
  return (
    <section className="h-[500px] bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold">
          Find your next stay
        </h1>

        <p className="mt-4 text-xl">
          Discover unique places around the world
        </p>

        <button className="mt-8 bg-white text-red-500 px-8 py-3 rounded-full font-bold">
          Explore Now
        </button>
      </div>
    </section>
  );
}

export default Hero;