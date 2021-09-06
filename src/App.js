import React, { useState, useEffect } from "react"
import Loading from "./Loading"
import Tour from "./Tour"
import Tours from "./Tours"
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project"
function App() {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessge] = useState(null)

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    try {
      setErrorMessge(null)
      setIsLoading(true)
      const response = await fetch("https://course-api.com/react-tours-project")
      if (!response.ok) {
        throw new Error("Something went wrong!")
      }
      const data = await response.json()
      setTours(data)
    } catch (error) {
      console.log(error.message)
      setErrorMessge(error.message)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (!isLoading && errorMessage) {
    return (
      <main>
        <div className="title">
          <h2>{errorMessage}</h2>
        </div>
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      {isLoading ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <Tours tours={tours} removeTour={removeTour} />
      )}
    </main>
  )
}

export default App
