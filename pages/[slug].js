import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import BlogDetails from "../components/BlogDetails";
import Footer from "../components/Footer";
import fetch from "node-fetch";


const BlogDetailPage = ({post}) => (

    <Layout pageTitle="Zimed - Blog Details">
        <Navbar />
        <PageHeader title="Blog Details" />

        <BlogDetails
            //image={ post.better_featured_image.source_url }
            title={post.title.rendered}
            content={post.content.rendered}

        />

        <Footer />
    </Layout>

)

export async function getServerSideProps(context) {
    //console.log(context)
    const { slug } = context.query
    const res = await fetch(`https://codenpy.com/demos/noor/wp-json/wp/v2/posts/?slug=${slug}`)
    const post = await res.json()
    //console.log(post[0])

    return { props: {post: post[0]} }
}

export default BlogDetailPage;