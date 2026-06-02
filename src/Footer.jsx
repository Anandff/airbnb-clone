function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-10">
            <div className="text-center">
                <h2 className="text-xl font-bold">Airbnb Clone</h2>

                <p className="mt-2 text-gray-400">Find your next stay anywhere in the world.</p>

                <div className="mt-4 flex justify-center gap-6">
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Privacy</a>
                    <a href="#">Help</a>
                </div>

                <p className="mt-6 text-sm text-gray-500">
                    © 2026 Airbnb Clone
                </p>
            </div>
        </footer>
    );
}

export default Footer;