export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to tarkeeb</h1>
        <p className="text-gray-600 mb-8">Share your culinary journey with friends</p>
        <a 
          href="/feed" 
          className="inline-flex items-center justify-center bg-red-700 text-white px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all duration-200 relative"
        >
          Explore Recipes
        </a>
      </div>
    </div>
  )
}