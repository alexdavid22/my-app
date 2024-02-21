"use client"
import "../page-styles.css"

import { useState, useEffect } from "react"

const ArtDescriptionsPage = () => {
  const [descriptions, setDescriptions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/query-history", {
          cache: "no-store",
        })
        const data = await response.json()
        setDescriptions(data)
      } catch (error) {
        console.error("Error fetching art descriptions:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <h1 style={{ marginTop: "100px" }}>Intrebari frecvente</h1>
      <div>
        {descriptions.length > 0 ? (
          descriptions.map((desc, index) => (
            <div key={index}>
              <p>{desc.content}</p>
            </div>
          ))
        ) : (
          <p>No art descriptions to show.</p>
        )}
      </div>
    </>
  )
}

export default ArtDescriptionsPage
