// src/pages/ArticlePage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

const ArticlePage = () => {
    const { articleId } = useParams();
    const article = blogData.find(post => post.id === articleId);

    if (!article) {
        return (
            <div className="container section-spacing text-center">
                <h2>Artículo no encontrado</h2>
                <Link to="/blog" className="btn btn-primary-custom mt-3">Volver al Blog</Link>
            </div>
        );
    }

    return (
        <div className="container section-spacing">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h1 className="display-5 fw-bold mb-3">{article.title}</h1>
                    <p className="text-muted">
                        Por {article.author} | Publicado el {new Date(article.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <hr className="my-4" />
                    <div className="article-content">
                        {article.content}
                    </div>
                    <hr className="my-5" />
                    <Link to="/blog" className="btn btn-outline-custom">
                        <i className="fas fa-arrow-left me-2"></i>
                        Volver a Todos los Artículos
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;