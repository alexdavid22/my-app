"use client"

import React, { useState } from "react"

function News() {
  // State to store the description input by the user
  const [description, setDescription] = useState("")

  // Handler for input changes
  const handleInputChange = e => {
    setDescription(e.target.value)
  }

  // Handler for form submission
  const handleSubmit = async e => {
    e.preventDefault() // Prevent the default form submit action

    try {
      // Replace '/api/test-endpoint' with your actual endpoint URL
      const response = await fetch("/api/insert-news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description }),
      })
      console.log(description)
      if (response.ok) {
        // Handle success - for example, showing a success message
        console.log("Description submitted successfully")
      } else {
        // Handle HTTP errors
        console.error("Submission failed:", response.statusText)
      }
    } catch (error) {
      // Handle network errors
      console.error("Error submitting description:", error)
    }

    // Reset the input field after submission
    setDescription("")
  }

  // JSX for the form
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="descriptionInput">Art Description:</label>
      <input
        type="text"
        id="descriptionInput"
        value={description}
        onChange={handleInputChange}
        placeholder="Enter news here"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default News
