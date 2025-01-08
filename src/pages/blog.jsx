import { useState, useEffect } from "react";
import axios from "axios";

export default function Blog() {
  const [blogData, setBlogdata] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/blog`)
      .then((response) => {
        setBlogdata(response.data.data);
      })
      .catch((err) => {
        setError(err);
        console.log(error);
      });
  }, []);
  return (
    <>
      <div
        className="breadcumb-wrapper "
        data-bg-src="assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Blog Lists View</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="home-travel.html">Home</a>
              </li>
              <li>Blog Lists View</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="th-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            {blogData &&
              blogData.blogs.map((blog, index) => (
                <div className="col-xxl-8 col-lg-7" key={index}>
                  <div className="th-blog blog-single has-post-thumbnail">
                    <div className="blog-img">
                      <a href={blog.link} >
                        <img src={blog.image} className="image-new" alt="Blog Image" />
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a className="author" href="blog.html">
                          <i className="fa-light fa-user"></i>by David Smith
                        </a>
                        <a href="blog.html">
                          <i className="fa-solid fa-calendar-days"></i>05 May,
                          2024
                        </a>
                        <a href="blog-details.html">
                          <img src="assets/img/icon/map.svg" alt="" />
                          Tour Guide
                        </a>
                      </div>
                      <h2 className="blog-title">
                        <a href="blog-details.html">{blog.title}</a>
                      </h2>
                      <p className="blog-text">{blog.description}</p>
                      <a
                        href="blog-details.html"
                        className="th-btn style4 th-icon"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_search  ">
                  <form className="search-form">
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                      <i className="far fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="widget widget_categories  ">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    <li>
                      <a href="blog.html">
                        <img src="assets/img/theme-img/map.svg" alt="" />
                        City Tour
                      </a>
                      <span>(8)</span>
                    </li>
                    <li>
                      <a href="blog.html">
                        <img src="assets/img/theme-img/map.svg" alt="" />
                        Beach Tours
                      </a>
                      <span>(6)</span>
                    </li>
                    <li>
                      <a href="blog.html">
                        <img src="assets/img/theme-img/map.svg" alt="" />
                        Wildlife Tours
                      </a>
                      <span>(2)</span>
                    </li>
                    <li>
                      <a href="blog.html">
                        <img src="assets/img/theme-img/map.svg" alt="" />
                        News & Tips
                      </a>
                      <span>(7)</span>
                    </li>
                    <li>
                      <a href="blog.html">
                        <img src="assets/img/theme-img/map.svg" alt="" />
                        Adventure Tours
                      </a>
                      <span>(9)</span>
                    </li>
                    <li>
                      <a href="blog.html">
                        <img src="assets/img/theme-img/map.svg" alt="" />
                        Mountain Tours
                      </a>
                      <span>(10)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget  ">
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-1-1.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Exploring The Green Spaces Of the island maldives
                          </a>
                        </h4>
                        <div className="recent-post-meta">
                          <a href="blog.html">
                            <i className="fa-regular fa-calendar"></i>22/6/ 2024
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-1-2.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Harmony With Nature Of Belgium Tour and travle
                          </a>
                        </h4>
                        <div className="recent-post-meta">
                          <a href="blog.html">
                            <i className="fa-regular fa-calendar"></i>25/6/ 2024
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-1-3.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Exploring The Green Spaces Of Realar Residence
                          </a>
                        </h4>
                        <div className="recent-post-meta">
                          <a href="blog.html">
                            <i className="fa-regular fa-calendar"></i>27/6/ 2024
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget widget_tag_cloud  ">
                  <h3 className="widget_title">Popular Tags</h3>
                  <div className="tagcloud">
                    <a href="blog.html">Tour</a>
                    <a href="blog.html">Adventure</a>
                    <a href="blog.html">Rent</a>
                    <a href="blog.html">Innovate</a>
                    <a href="blog.html">Hotel</a>
                    <a href="blog.html">Modern</a>
                    <a href="blog.html">Luxury</a>
                    <a href="blog.html">Travel</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
