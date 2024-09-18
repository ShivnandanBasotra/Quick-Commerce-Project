export default function HelpPage() {
    return (
        <div className="min-h-screen bg-gray-100  lg:mt-9 md:mt-6 sm:mt-4 mt-2 ">
            <div className="flex justify-center">
                <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-xl font-extrabold text-gray-800 mb-6 text-center">
                        Write to us. We will get back to you soon.
                    </h1>
                    <form className="space-y-4">
                        <input
                            type="email"
                            placeholder="yourEmail@gmail.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                        />
                        <textarea
                            placeholder="Write details about the issue here."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 resize-none h-32"
                        />
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
