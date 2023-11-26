import './articles.styles.scss';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ArticleEntry from '../article-entry/article-entry.comp';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const res = await fetch('http://localhost:4000/articles', {
      credentials: 'include',
    });
    const data = await res.json();
    if (res.ok) {
      const formattedArticles = data.articles.map((art) => ({
        ...art,
        publishedAt: format(new Date(art.publishedAt), 'dd/mm/yyyy'),
      }));
      setArticles(formattedArticles);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="articles-container">
      <h2 className="title">Articles/News</h2>
      <div className="articles-list-container">
        {articles.length >= 1
          ? articles.map((article) => (
              <ArticleEntry article={article}/>
            ))
          : null}
      </div>
    </div>
  );
};

export default Articles;
