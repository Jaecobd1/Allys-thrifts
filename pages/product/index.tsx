import NavBar from '../../components/NavBar'
import Products from '../../components/Products'
import Footer from '../../components/Footer'
import { Product } from '../utils/typings'
import { sanityClient, sanityCoptionent } from '../../utils/sanity'
import { Product } from '../../utils/typings'
import { useState, useEffect } from 'react'


interface Props {
    products: [Product];
    productsOldest: [Product];
};

function index({ products, productsOldest }: Props) {
    const [dropDown, setDropDown] = useState("Most Recent");

    const value = {
        "Most Recent": products,
        "Oldest": productsOldest,

    };
    return (
        <>
            <NavBar />
            <div className="w-screen h-screen">
                <div>
                    <div className="flex w-screen justify-end px-5">
                        <select className="bg-none">
                            <option value="Most Recent" onClick={()=> setDropDown("Most Recent")}>Most Recent</option>
                            <option value="Oldest" onClick={()=> setDropDown("Oldest")}>Oldest</option>
                            <option value="Lowest Price" onClick={()=> setDropDown("Lowest Price")}>Lowest Price</option>
                            <option value="Highest Price" onClick={()=> setDropDown("Highest Price")}>Highest Price</option>
                        </select>
                        
                    </div>

                        <Products products={products} />
                    
            </div>
            </div>
            <Footer />

        </>
    )
}

export const getServerSideProps = async () => {
    const productQuery = `*[_type == "products"][0..15]{
  name,
  price,
  size,
  image,
  slug,
  countInStock,
  visable,
  homePage,
  featured,
  isAvailable,
  
}`;
    const productQueryoldest = `*[_type == 'products']|order(_createdAt)[0..15]{
  name,
  price,
  size,
  image,
  slug,
  countInStock,
  visable,
  homePage,
  featured,
  isAvailable,
  
}`;
    
    const products = await sanityClient.fetch(productQuery);
    const productsOldest = await sanityClient.fetch(productQueryoldest);
    return {
        props: {
            products,
            productsOldest
        }
    }
}

export default index
