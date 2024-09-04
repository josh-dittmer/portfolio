import Link from 'next/link';

export default function NavBar() {
    return (
        <div className="sticky top-0 z-50 animate-slide-down">
            <div className="bg-white p-4">
                <div className="flex justify-between">
                    <Link href="/#intro">
                        <h1 className="text-blue-300 text-3xl">jd</h1>
                    </Link>
                    <div className="flex items-center justify-center">
                        <ul className="flex">
                            <li>
                                <Link href="/#about" className="m-3 text-gray-600 hover:border-b border-gray-600">About</Link>
                            </li>
                            <li>
                                <Link href="/#projects" className="m-3 text-gray-600 hover:border-b border-gray-600">Projects</Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="m-3 text-gray-600 hover:border-b border-gray-600">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}