export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Recipe Social</h1>
        <p className="text-gray-600 mb-8">Share your culinary journey with friends</p>
        <a 
          href="/feed" 
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
        >
          Explore Recipes
        </a>
      </div>
    </div>
  )
}