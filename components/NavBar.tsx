import Link from 'next/link'
import logo from '../public/images/logo.svg'
import Image from 'next/image'
function NavBar(production) {
    return (
        <>
        <header className="flex bg-lightGrey h-20 items-center">
           
            <div className=" grid grid-cols-3">
                <div className="">
                    <Link href="/">
                            <Image src={logo} height='200px'/>
                        </Link>
                </div>
            <div className="h-12 flex items-center mx-auto">
                    
            </div>
                    

            <div >
                <nav className="flex h-full items-center justify-around text-sm" >
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/about">
                        <a>
                            About Us
                        </a>
                    </Link>
                    <Link href="/Blog">
                        <a>
                            Blog
                        </a>
                        </Link>
                        <Link href="/cart" >
                                <a>Cart </a>
                                {/* Add shopping cart total with snip
                                cart */}
                        </Link>
                </nav>
                </div>
                 
            </div>
            
            </header>
            </>
        
    )
}

export default NavBar
