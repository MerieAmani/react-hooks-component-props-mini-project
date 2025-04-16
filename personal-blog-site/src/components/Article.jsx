import React from 'react';

const Article = ({ title, date = 'Date not available', preview, readTime }) => {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{readTime} minutes to read</p>
        </article>
    );
};

export default Article;