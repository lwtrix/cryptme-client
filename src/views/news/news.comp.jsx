import './news.styles.scss'
import NewsEntry from '../../components/news-entry/news-entry.comp'

const News = () => {
  return (
    <div className='news-container'>
      <NewsEntry author={'LwTrix'} title={'Website Is Live'}/>
      <NewsEntry author={'Tim'} title={'Stealth Launch To Be Announced'}/>
    </div>
  )
}

export default News