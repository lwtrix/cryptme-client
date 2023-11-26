import './admin-dashboard.styles.scss'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Articles from '../../components/articles/articles.comp'

const AdminDashboard = () => {
  const navigate = useNavigate()
  const currentUser = useSelector(state => state.currentUser.user)

  useEffect(() => {
    if(!currentUser) {
      navigate('/auth')
    }
  }, [currentUser])

  return (
    <div className='admin-dashboard-container'>
      <Articles />
    </div>
  )
}

export default AdminDashboard