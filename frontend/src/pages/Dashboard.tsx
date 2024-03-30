import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import SongForm from '../components/SongForm'


function Dashboard() {
  return (
    <>
      <section className="heading">
        <h1>Welcome Brad</h1>
      </section>

      <SongForm />
    </>
  )
}

export default Dashboard