import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import Link from "next/link"

export default function AdaugarePictori() {
  const session = getServerSession(options)
  return (
    <>
      {session ? (
        <li className="navbar-item">
          <Link href="/adaugare" className="navbar-link">
            Adaugare pictori si picturi
          </Link>
        </li>
      ) : null}
    </>
  )
}
