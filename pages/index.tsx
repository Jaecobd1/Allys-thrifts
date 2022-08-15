import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react';
import Products from '../components/Products'
import { sanityClient, urlFor } from '../utils/sanity'
import { Product, Post, Production } from '../utils/typings'
import BlogPosts from '../components/BlogPosts'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Link from 'next/link'
import script from 'next/script'


interface Props {
  products: [Product];
  posts: [Post];
  production: [Production];
}

export default function HomePage({ products, posts, production }: Props) {
  return (
    <>
      <Head>
        <title>Home</title>
        </Head>
      <NavBar />
      <Banner production={production}/>
      <body>
      <div className="p-5 m-2">
        <h1 className="text-4xl text-center">Welcome Home</h1>
        </div>
        {/* Hero Section */}
        <Hero production={production} />
        <Products products={products} />
        <div className="flex w-screen justify-end p-5">
        <Link href="/product">
          <a>
            View All Products
          </a>
          </Link>
          </div>
       
        <BlogPosts posts={posts}/>
      </body>
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
  const postQuery = `*[_type == "posts"]{
  title,
  "author": author->firstName,
  content,
  image,
  visable,
  slug,
  
  
}`;
  const productionQuery = `*[_type == 'production'][0]{
  
  heroImg,
  bannerText,
  
}`;
  const products = await sanityClient.fetch(productQuery);
  const posts = await sanityClient.fetch(postQuery);
  const production = await sanityClient.fetch(productionQuery);

  return {
    props: {
      products,
      posts,
      production,
    },
  }
};

