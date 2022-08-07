import { Post } from '../utils/typings'
import Link from 'next/link'
interface Props {
  posts: [Post];
}
export default function BlogPosts({ posts }) {
    return (
        <>
            <div className="p-5 bg-lightGrey text-center">
                 <h1>Most Recent Blogs:</h1>
            </div>
        <div className="w-screen bg-lightGrey grid gap-4 p-5 md:grid-cols-2">
                {
                    posts.map(post =>
                    <div key="post.title" className="shadow-lg bg-lightPeach p-5 rounded-lg h-60 max-min-fit">
                        
                    <Link href={`/post/${post.slug.current}`} >
                    <div className="break-normal">
                        
                    <div className="text-xl w-fit">
                    <h1>
                        {(post.title)}
                        </h1>
                                    </div>
                        <div>
                            <h3>{(post.author)}</h3>
                        </div>
                    <div className="break-normal w-fit">
                        {!post.content ? 
                            <p>no content</p>
                            : <p>{(post.content).slice(0, 200)}...</p>
                    }
                            </div>
                            </div>
                            </Link>
                    
                </div>
            )}
            </div>
            </>
    )
}
