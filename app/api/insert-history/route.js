import { sql } from "@vercel/postgres"
import { NextResponse } from "next/server"

export async function POST(request) {
  // Parse the request body to get the description
  const { description } = await request.json()

  try {
    // Basic validation to ensure a description is provided
    if (!description) {
      throw new Error("Description is required")
    }

    // Insert the description into the art_histories table
    await sql`INSERT INTO history (content) VALUES (${description});`

    // Optionally, return a success message or the inserted record
    // For simplicity, we're just returning a success message
    return NextResponse.json({ message: "Description inserted successfully" })
  } catch (error) {
    // Return an error message and a 500 status code if something goes wrong
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
