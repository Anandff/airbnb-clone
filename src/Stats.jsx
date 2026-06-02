function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-10 px-6">
      <div>
        <h2 className="text-4xl font-bold text-red-500">500+</h2>
        <p className="text-gray-600">Properties</p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-red-500">50+</h2>
        <p className="text-gray-600">Cities</p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-red-500">10K+</h2>
        <p className="text-gray-600">Happy Guests</p>
      </div>
    </div>
  );
}

export default Stats;