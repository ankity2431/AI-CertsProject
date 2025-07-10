import React from 'react'
import DashboardBanner from './dashboard-compo/DashboardBanner'
import LastDayEvaulation from './dashboard-compo/LastDayEvaulation'
import InstructionNotes from './dashboard-compo/InstructionNotes'

const Dashboard = () => {
  return (
    <div>
      <DashboardBanner />
      <LastDayEvaulation />
      <InstructionNotes />
    </div>
  )
}

export default Dashboard
