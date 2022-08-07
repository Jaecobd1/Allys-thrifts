import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react';
import Products from '../components/products'
import { sanityClient, urlFor } from '../utils/sanity'
import { Product, Post } from '../utils/typings'
import BlogPosts from '../components/BlogPosts'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


interface Props {
  products: [Product];
  posts: [Post];
}

export default function HomePage({ products, posts }: Props) {
  console.log(products);
  console.log(posts);
  return (
    <>
      <NavBar/>
      <body>
      <div className="p-5 m-2">
        <h1 className="text-4xl text-center">Ally's Thrifts</h1>
        </div>
        {/* Hero Section */}
        <Hero />
        <Products products={products} />
       
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
  const products = await sanityClient.fetch(productQuery);
  const posts = await sanityClient.fetch(postQuery);

  return {
    props: {
      products,
      posts,
    },
  }
};

