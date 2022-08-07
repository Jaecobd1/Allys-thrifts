import Link from "next/link";
import { urlFor } from "../utils/sanity";
import { Product } from '../utils/typings'
import { useState } from 'react'


interface Props {
  products: [Product];
}

export default function Products({ products }) {
    
    
    return (
        <>

            <div className="w-screen p-5">
                <h1>Thrifts:</h1>
                {/* add filters here */}
                
                <br />
            </div>
            
            
            <div className="p-5 grid w-screen bg-amber-100 gap-4 md:grid-cols-4 sm:grid-cols-2">
                
                {products.map(product =>
                        <div className="flex items-center p-5 min-w-30 max-w-xs shadow-lg bg-lightGrey hover:bg- rounded-lg h-min ">
                        {/* Turn h1 into links later */}
                        <Link href={`/product/${product.slug.current}`}>
                            <div className="grid grid-row-4  justify-items-center w-full">
                                {/* NAME OF PRODUCT */}
                                <h1 className="text-center text-xl">{product.name}</h1>
                                
                                {/* Main Image of Product */}
                                <div >
                                    <img
                                        className="h-40 w-40  rounded-2xl"
                                        src={urlFor(product.image).url()!
                                    } alt="" />
                                </div>
                        
                        <div className="justify-items-end">
                            <h2>${product.price}</h2>
                                </div>
                                <div>
                                    <h2>Size: {product.size?product.size:"N/A"}</h2>
                                </div>
                                </div>
                            </Link>
                        </div>)}
                        
            </div>
        </>
    )
};

