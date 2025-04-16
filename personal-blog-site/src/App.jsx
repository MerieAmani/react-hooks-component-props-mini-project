import React from 'react';
import Header from './components/Header';
import About from './components/About';
import ArticleList from './components/ArticleList';
import articles from './data/blog'; 

const App = () => {
  return (
    <div>
      <Header name="My Personal Blog" />
      <About 
        image="path/to/image.jpg"
        about="This is a blog about my personal experiences and thoughts."
      />
      <ArticleList articles={articles} />
    </div>
  );
};

export default App;