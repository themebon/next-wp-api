import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import axios from 'axios';
import fetch from 'node-fetch'
//import fetch from 'isomorphic-unfetch';

const Blog = ({ posts }) => {

    return (

        <section className="blog-one blog-one__home blog-one__grid">
            <div className="container">
                <div className="row">

                    { posts && posts.map(post =>

                        <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" key={ post.id }>
                            <div className="blog-one__single">
                                <div className="blog-one__image">
                                    <img src="" alt="" />
                                    <Link href="/news-details">
                                        <a className="blog-one__more-link"><i
                                            className="fa fa-link"></i>
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-one__content">
                                    <ul className="list-unstyled blog-one__meta">
                                        <li><a href="#">22 Oct, 2019</a></li>
                                        <li><a href="#">2 Comments</a></li>
                                    </ul>
                                    <h3 className="blog-one__title">
                                        <Link href="/[slug]" as={`/${post.slug}`}>
                                        <a>{ post.title.rendered }
                                        </a>
                                        </Link>
                                    </h3>
                                    <Link href="/news-details">
                                    <a className="blog-one__link">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>


                    )}


                </div>
                <div className="post-pagination">
                    <a href="#"><i className="fa fa-angle-left"></i></a>
                    <a href="#">1</a>
                    <a href="#" className="active">2</a>
                    <a href="#">3</a>
                    <a href="#"><i className="fa fa-angle-right"></i></a>
                </div>
            </div>
        </section>
    )
}


export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch('https://codenpy.com/demos/noor/wp-json/wp/v2/posts')
  const posts = await res.json()
    console.log(posts)

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return { props: { posts } }
}

export default Blog;


