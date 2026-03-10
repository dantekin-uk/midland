const TailwindTest = () => {
  return (
    <div className="p-8 bg-red-500 text-white rounded-lg shadow-xl max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Tailwind Test</h1>
      <p className="text-lg opacity-90 mb-4">
        If you can see this with red background, white text, rounded corners, and shadow - Tailwind is working!
      </p>
      <div className="flex gap-2">
        <span className="bg-primary text-bg-white px-4 py-2 rounded">Primary Color</span>
        <span className="bg-steel-grey text-bg-white px-4 py-2 rounded">Steel Grey</span>
      </div>
    </div>
  )
}

export default TailwindTest
