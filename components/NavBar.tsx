import Link from 'next/link'
function NavBar() {
    return (
        <header className="bg-lightGrey">
            <div className="h-12 grid grid-cols-3">
                <div className="flex items-center mx-auto">
                    <Link href="/">
                        <p>Logo</p>
                        </Link>
                </div>
            <div className="h-12 flex items-center mx-auto">
                    
            </div>
            <div >
                <nav className="h-12 flex items-center justify-around">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/about">
                        <a>
                            About Us
                        </a>
                    </Link>
                    <Link href="/blog">
                        <a>
                            Blog
                        </a>
                        </Link>
                        <Link href="/cart" >
                            <a>Cart</a>
                        </Link>
                </nav>
                </div>
                </div>
        </header>
    )
}

export default NavBar
