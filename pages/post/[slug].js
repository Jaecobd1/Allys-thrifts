
export const Post = ({ title, body, image }) => {
    console.log(title, body, image)
    return <>I am a post </>;
}

export const getServerSideProps = async pageContext => {
    const pageSlug = pageContext.query.slug;
    console.log(pageSlug)

    if (!pageSlug) {
        return {
            notFound: true
        }
    }

    const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}"]`);
    const url = `https://1skj3gny.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;

    const result = await fetch(url).then(res => res.json());
    const post = result.result[0];

    if (!post) {
        return {
            notFound: true
        }
    } else {
        return {
            props: {
                body: post.body,
                title: post.title,
                image: post.image,
            }
        }
    }
};

export default Post;