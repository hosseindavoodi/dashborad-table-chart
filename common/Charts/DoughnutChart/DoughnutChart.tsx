import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, ChartData, ArcElement } from 'chart.js'

interface DoughnutChartProps {
  data: ChartData<'doughnut'>
}

ChartJS.register(ArcElement, Tooltip)

const DoughnutChart = ({ data }: DoughnutChartProps) => {
  return <Doughnut data={data} />
}

export default DoughnutChart
