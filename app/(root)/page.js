import Link from "next/link"

export default function HomePage() {
    return(
        <div>
            home page
            <button>
                <Link
                    href="/dashboard"
                >
                    Dashboard
                </Link>
            </button>
        </div>
    )
}