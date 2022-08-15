import BlogPost from '../components/BlogPosts'
import { sanityClient } from '../utils/sanity';
import { Post } from '../utils/typings';

interface Props {
    posts: [Post];
}

function blog({posts}: Props) {
    return (
        <div>
            <div>
                <BlogPost posts={posts} />
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const postQuery = `*[_type == "posts"]{
  title,
  "author": author->firstName,
  content,
  image,
  visable,
  slug,
  
  
}`;
    
    const posts = await sanityClient.fetch(postQuery);

    return {
        props: {
            posts,
        }
    }
}

export default blog
