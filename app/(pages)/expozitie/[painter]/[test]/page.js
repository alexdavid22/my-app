"use client"

import { useState, useEffect } from "react"
//import { paintings } from "@/app/test-db/expuse"
import Image from "next/image"

const ImageDetails = ({ params }) => {
  const [data, setData] = useState([])
  // Create a state variable to keep track of the currently selected image
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/query-db-paints", {
          cache: "no-store",
        })
        const data = await response.json()
        console.log(data)
        setData(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const painting = data.find(p => p.id == params.test)

  if (!painting) {
    return <p>No painting found with id {params.test}</p>
  }

  // Handle the onClick event of an image
  const handleImageClick = img => {
    setSelectedImage(img)
  }

  // If a painting is found, display its details
  return (
    <div className="Id-all">
      <h1>{painting.title}</h1>
      <Image
        className="Id-frame"
        src={painting.primaryimage}
        alt={painting.title}
        width={300}
        height={300}
        layout="responsive"
        onClick={() => handleImageClick(painting.primaryimage)}
      />
      <p>{painting.description}</p>
      <p>Size: {painting.size}</p>
      <p>Price: {painting.price}</p>

      <div className="Id-big-cont">
        {painting.subimages.map((img, index) => (
          <Image
            key={index}
            className="Id-big"
            src={img}
            alt={painting.title}
            width={300}
            height={300}
            layout="responsive"
            onClick={() => handleImageClick(img)}
          />
        ))}
      </div>

      {/* Display the modal with the selected image */}
      {selectedImage && (
        <div className="modal">
          <span className="close" onClick={() => setSelectedImage(null)}>
            &times;
          </span>
          <Image
            className="modal-content"
            src={selectedImage}
            alt={painting.title}
            layout="fill"
          />
        </div>
      )}
    </div>
  )
}

export default ImageDetails
