import './news-entry.styles.scss'

const NewsEntry = ({ title, author}) => {
  return (
    <div className="news-entry-container">
        <div className="title-container">
          <span className='text'>News</span>
          <h2 className='title'>{title}</h2>
        </div>
        <div className="content-container">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ex a consequuntur ut vel reiciendis eveniet fugit illum, mollitia molestiae distinctio nihil tempore tempora nam modi sunt ipsam beatae excepturi.
          Recusandae quidem optio facilis doloribus repudiandae quaerat unde doloremque. Nostrum eaque repudiandae nesciunt quidem itaque distinctio. Iure deserunt sapiente nostrum neque quibusdam optio dolor obcaecati beatae voluptas magnam. Odio, pariatur.
          A, perferendis alias voluptatum aperiam laudantium expedita sunt facere repudiandae! Corporis odit architecto, magni obcaecati ipsum consectetur quisquam totam cupiditate officia et inventore quibusdam hic non praesentium sapiente dolorem laborum.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quis, dignissimos repudiandae ut labore laborum accusantium magnam ex voluptatem fugiat molestiae maxime assumenda, est enim cupiditate, deleniti non nulla doloribus.
          Fugit vitae corporis repudiandae dolorem mollitia, ullam ipsa dolorum tempore ab, veniam maxime doloremque iste. Expedita quas autem magnam repellat soluta sapiente itaque provident deleniti officia maxime eum, hic totam.</p>
        </div>
        <div className="footer">
          <span>Published on 29/10/2023 by <span className='author'>{author}</span></span>
        </div>
      </div>
  )
}

export default NewsEntry