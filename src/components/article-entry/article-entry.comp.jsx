import './article-entry.styles.scss';

const ArticleEntry = ({article}) => {
  return (
    <div className="article-entry-container">
      <span className="article-title">{article.title}</span>
      <p className="article-paragraph">{article.paragraphs[0]}</p>
      {article.paragraphs.length > 1 && (
        <p className="article-paragraph">...</p>
      )}
      <span className="article-date">
        Date Published: <span className="date">{article.publishedAt}</span>
      </span>
      <span className="article-author">
        by <span className="author">{article.author.username}</span>
      </span>
    </div>
  );
};

export default ArticleEntry;
