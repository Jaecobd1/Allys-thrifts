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
        <div className="grid p-5 bg-white w-screen h-screen mx-auto items-center">
            <div className="text-6xl items-center p-5 underline text-center">
                {/* Title */}
                <h1>{product.name}</h1>
            </div>
            <div className="w-screenbg-white grid md:grid-cols-2 grid-cols-1 gap-4 items-center p-5">
                {/* photos */}
                <img
                    className=""
                        src={urlFor(product.image).url()!
                        } alt=""
                        height='500'
                        width='500'
                    
                    />
                    <div className="grid gap-4 grid-cols-2 p-5">
                    {product.images.map(image =>
                        <>
                            <img
                            className=""
                             src={urlFor(image).url()!
                             } alt=""
                            height='200'
                             width='200'
                    
                             />
                            </>
                        )}
                        </div>
                </div>
                <div className="bg-white w-full h-72 justify-around flex items-center ">
            <div className="">
                {/* Info */}
                <p>Description: {product.description? product.description: 'N/A'}</p>
                </div>
                
            <div className="">
                <p>Price: ${product.price}</p>
                </div>
                <div className="flex space-x-2">
                                    <div className="w-max-min p-2 text-sm hover:bg-darkGrey hover:text-white bg-secondary rounded-full">
                                                 <button
                                                className={`snipcart-add-item`}
                                                data-item-id={product.id}
                                                data-item-name={product.name}
                                                data-item-price={product.price}
                                                data-item-url={product.slug}
                                                data-item-image={urlFor(product.image).url()}
                                                >
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
  "images": images[],
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