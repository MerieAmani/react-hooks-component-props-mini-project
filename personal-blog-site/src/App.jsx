import React from 'react';
import Header from './components/Header';
import About from './components/About';
import ArticleList from './components/ArticleList';
import articles from './data/blog'; // Assuming you have a data folder with blog.js

const App = () => {
  return (
    <div>
      <Header name="My Personal Blog" />
      <About 
        image="path/to/image.jpg" // Replace with actual image path or a default
        about="This is a blog about my personal experiences and thoughts."
      />
      <ArticleList articles={articles} />
    </div>
  );
};

export default App;