import Link from "next/link";
import { urlFor } from "../utils/sanity";
import { Product } from '../utils/typings'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'




interface Props {
  products: [Product];
}

const Buttons = () => {
    return (
        <div>
            <div className="bg-primary p-3 rounded-full">
                <button>
                    Buy Now
                </button>
            </div>
        </div>
    )
}

export default function Products({ products }) {
    
    
    return (
        <>

           
            
            <div className="">
                <motion.div className="px-4 grid gap-4 md:grid-cols-4 sm:grid-cols-2 justify-items-center py-5"
                    
                >
                
                    {products.map(product =>
                            <>
                                <motion.div className="flex items-center p-5 min-w-30 max-w-xs hover:shadow-lg bg-white hover:bg-lightGrey rounded-lg h-min border-4 shadow-xl border-primary"
                                    animate={{
                                        y: 0,
                                        opacity:1
                                    }}
                                    initial={{
                                        y: 200,
                                        opacity: 0
                                    }}
                                    transition={{
                                        ease: 'easeInOut',
                                        duration: 2
                                    }}
                                >
                        {/* Turn h1 into links later */}
                        <Link href={`/product/${product.slug.current}`}>
                            <div className="grid  justify-items-center w-full">
                                {/* NAME OF PRODUCT */}
                                <h1 className="text-center sm:text-xl underline">{product.name}</h1>
                                
                                {/* Main Image of Product */}
                                <div className="" >
                                    <img
                                        className="rounded-2xl h-40 sm:h-52 lg:h-60"
                                        src={urlFor(product.image).url()!
                                             } alt=""
                                        
                                    />
                                            </div>
                                            
                                    <div className="flex w-full justify-around py-2  ">
                                     <div className="">
                                        <h2>${product.price}</h2>
                                    </div>
                                    <div className="">
                                         <h2>Size: {product.size?product.size:"N/A"}</h2>
                                                </div>
                                            
                                        </div>
                                        <div className="flex space-x-2">
                                    <div className="w-max-min p-2 text-sm hover:bg-darkGrey hover:text-white bg-secondary rounded-full">
                                                <button>
                                                    Buy Now
                                                </button>
                                        </div>
                                         <div className="w-max-min p-2 text-sm hover:bg-darkGrey hover:text-white bg-secondary rounded-full">
                                                <button>
                                                    Add to Cart
                                                </button>
                                        </div>
                                        </div>
                                
                                </div>
                        </Link>
                        
                                </motion.div>
                                
                    </>
                    
                )}
                        
                </motion.div>
                </div>
        </>
    )
};

