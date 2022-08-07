import { sanityClient, urlFor } from '../../utils/sanity'
import { Product } from '../../utils/typings'
import { GetStaticProps } from "next"
import NavBar from '../../components/NavBar';
import Head from 'next/head';

interface Props {
  product: Product;
}

function Product({ product }: Props) {
    console.log(product);
    return (
        <>
            <Head>
                <title>{product.title}</title>
            </Head>
            <NavBar/>
        <div className="grid p-5 bg-primary w-screen h-screen justify-items-center">
            <div className="text-6xl items-center">
                {/* Title */}
                <h1>{product.name}</h1>
            </div>
            <div>
                {/* photos */}
                <img
                    className="w-full"
                        src={urlFor(product.image).url()!
                        } alt="" />
            </div>
            <div>
                {/* Info */}
                <p>{product.description}</p>
            </div>
            <div>
                <p>${product.price}</p>
                </div>
                <div className="bg-secondary flex w-32 rounded-full">
                    <button>Buy Now</button>
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
            slug: product.slug.current,
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