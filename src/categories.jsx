function Categories({ selectedCategory, setSelectedCategory }) {
    const categories = [
        "All",
        "Beach",
        "Mountain",
        "Cabin",
        "Camping",
        "Luxury",
        "Lake",
        "Farm",
    ];
    return (
        <div className="flex flex-wrap justify-center gap-4 py-8">
            {categories.map((category) => (
                <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border ${
                    selectedCategory === category ? "bg-red-500 text-white" : "hover:bg-gray-100"}`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default Categories;