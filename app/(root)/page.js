import Link from "next/link"
import "@/app/(root)/globals.css"

export default function HomePage() {
    return(

            <div className="bg-green-200 w-full h-screen flex flex-col justify-center items-center ">
                <h1 className="text-4xl font-semibold mb-5">Dashboard</h1>
                <button className="outline outline-offset-2 outline-4 outline-green-700 hover:bg-green-600 hover:text-white hover:rounded-sm">
                    <Link
                        href="/dashboard"
                    >
                        clique aqui
                    </Link>
                </button>
            </div>
    )
}