import './info-banner.styles.scss'

const InfoBanner = () => {
  return (
    <div className="info-banner">
        <div className="status-circle"></div>
        <div className="animated-line moving-line"></div>
        <div className="animated-line line1"></div>
        <div className="animated-line line2"></div>
        <div className="animated-line line3"></div>
        <div className="status-container">
          <span className="title">Status</span>
          <span className="text">In Development</span>
        </div>
      </div>
  )
}

export default InfoBanner