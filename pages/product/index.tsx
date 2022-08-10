import NavBar from '../../components/NavBar'
import Products from '../../components/Products'
import Footer from '../../components/Footer'
import { Product } from '../utils/typings'
import { sanityClient } from '../../utils/sanity'
import {Product} from '../../utils/typings'

interface Props {
    products: [Product]
}

function index({products}: Props) {
    return (
        <>
            <NavBar />
            <div className="w-screen h-screen">
                <div>
                    <Products products={{products}} />
            </div>
            </div>
            <Footer />

        </>
    )
}

export const getServerSideProps = async () => {
    const productQuery = `*[_type == "products"][0..5]{
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

    return {
        props: {
            products
        }
    }
}

export default index
