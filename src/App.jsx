import Calendar from "./components/Calendar"
import Notes from "./components/Notes"
import "./App.css"
import HeroImage from "./components/HeroImage"

function App() {

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-6xl mx-auto space-y-6">

        <HeroImage />

        <div className="grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2">
            <Calendar />
          </div>

          <Notes />

        </div>

      </div>

    </div>
  )
}

export default App