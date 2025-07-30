// src/pages/BlogPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

const BlogPage = () => {
    return (
        <div className="page-container mt-5 pt-5">
            <header className="text-center py-5 bg-pale-blue">
                <div className="container">
                    <h1 className="display-4 fw-bold">Nuestro Blog</h1>
                    <p className="lead text-muted">Consejos, recursos e historias sobre el cuidado y bienestar de adultos mayores.</p>
                </div>
            </header>
            <div className="container section-spacing">
                <div className="row">
                    {blogData.map(post => (
                        <div key={post.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 border-0 card-hover">

                                {/* CAMBIO AQUÍ TAMBIÉN */}
                                <Link to={`/blog/${post.id}`}>
                                    <img src={post.image} className="card-img-top blog-card-image" alt={post.title} />
                                </Link>

                                <div className="card-body">
                                    <h5 className="card-title text-dark-custom">{post.title}</h5>
                                    <p className="card-text text-muted">{post.excerpt}</p>
                                    <small className="text-muted">{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</small>
                                </div>
                                <div className="card-footer bg-transparent border-0 pt-0">
                                    <Link to={`/blog/${post.id}`} className="btn btn-outline-custom">Leer Más</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;