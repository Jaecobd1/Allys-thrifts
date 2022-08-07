import Link from "next/link";

function Footer() {
    return (
        <div className="h-40 bg-primary">
            <div className="flex flex-auto place-content-between p-5">
                <Link href="home" >
                    <a>Home</a>
                </Link>
                <Link href="Blog" >
                    <a>Blog</a>
                </Link>
                <Link href="Products">
                    <a>Products</a>
                </Link>
            </div>
            <p className="flex justify-end p-10">2022 Ally's Thrift's</p>
        </div>
    )
}

export default Footer
