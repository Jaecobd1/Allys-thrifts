import { sanityClient, urlFor } from '../../utils/sanity'
import { Product } from '../../utils/typings'
import { GetStaticProps } from "next"
import NavBar from '../../components/NavBar';
import Head from 'next/head';

interface Props {
  product: Product;
}

function Product({ product }: Props) {
    
    return (
        <>
            <Head>
                <title>{product.title}</title>
            </Head>
            <NavBar/>
        <div className="grid p-5 bg-primary w-screen h-screen justify-items-center">
            <div className="text-6xl items-center p-5">
                {/* Title */}
                <h1>{product.name}</h1>
            </div>
            <div className="w-full flex justify-center bg-white p-5">
                {/* photos */}
                <img
                    className=""
                        src={urlFor(product.image).url()!
                        } alt=""
                        height='500'
                        width='500'
                    
                    />
                </div>
                <div className="bg-primary w-full h-72 flex justify-around ">
            <div className="">
                {/* Info */}
                <p>{product.description}</p>
                </div>
                
            <div>
                <p>${product.price}</p>
                </div>
                <div className="bg-secondary flex h-12 w-24 rounded-full text-center">
                    
                    <button className="md:p-3 p-1" >Buy Now</button>
                    </div>
                    </div>
            </div>
            </>
    )
}

export default Product

export const getStaticPaths = async () => {
    const query = `*[_type == "products"]{
                    _id,
                    
                    slug{
                    current
                    },
                    
                    
                    }`;
    
    const products = await sanityClient.fetch(query);

    const paths = products.map((product: Product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking',
    };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "products" && slug.current == $slug][0]{
  _id,
  name,
  price,
  image,
  images,
  size,
  description,
  brand,
  category,
  rating,
  
}`;
    
    const product = await sanityClient.fetch(query, {
        slug: params?.slug,
    })

    if (!product) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            product,
        },
        revalidate: 60,
    }
}