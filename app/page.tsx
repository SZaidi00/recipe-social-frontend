export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Tarkeeb</h1>
        <p className="text-gray-600 mb-8">Share your culinary journey with friends</p>
        <a 
          href="/feed" 
          className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 shadow-lg transform hover:scale-105 transition-all duration-200 relative"
          style={{
            background: 'linear-gradient(145deg, #dc2626, #991b1b)',
            boxShadow: '0 8px 16px rgba(220, 38, 38, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          Explore Recipes
        </a>
      </div>
    </div>
  )
}