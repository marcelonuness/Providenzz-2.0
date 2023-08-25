import Link from "next/link";

export default function HomePage() {
    return(
        <div>
            <h1>Home Page</h1>
            <div>
                <button>
                    <Link
                        href="/dashboard"
                    >
                        Dashboard
                    </Link>
                </button>
            </div>
        </div>
    )
}