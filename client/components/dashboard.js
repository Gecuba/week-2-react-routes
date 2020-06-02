import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <div id="title"> Dashboard </div>
      <Link to="/dashboard/profile/07d1a143-554a-4446-8a7c-0af33afe60c7"> Go To Profile </Link>
      <Link to="/dashboard/main"> Go To Main </Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
