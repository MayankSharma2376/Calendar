function HeroImage() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe"
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <h1 className="text-2xl font-semibold">
          Monthly Planner
        </h1>
      </div>

    </div>
  )
}

export default HeroImage