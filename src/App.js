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
  const [error, setError] = useState(null)

  const fetchTours = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error("Something went wrong!")
      }
      const data = await response.json()
      setTours(data)
      setIsLoading(false)
    } catch (error) {
      setError(error.message)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  return (
    <main>
      <Tours tours={tours} />
    </main>
  )
}

export default App
