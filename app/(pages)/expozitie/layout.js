"use client"

import "../page-styles.css"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Layout({ children }) {
  const [data, setData] = useState([])

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
  const painters = [...new Set(data.map(p => p.painter))]

  return (
    <>
      <div className="dn-btn-links">
        {painters.map(painter => (
          <Link href={`/expozitie/${painter}`} key={painter}>
            <button key={painter}>{painter}</button>
          </Link>
        ))}
      </div>

      {children}
    </>
  )
}
