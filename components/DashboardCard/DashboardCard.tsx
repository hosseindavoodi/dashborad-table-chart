import { useState } from 'react'
import clsx from 'clsx'
import DoughnutChart from '@/common/Charts/DoughnutChart/DoughnutChart'

type userDataType = {
  id: number
  title: string
  value: number
  chartBackground: string
}

interface DashboardCardProps {
  title: string
  userData: Array<userDataType>
  hasChart?: boolean
}

const DashboardCard = ({ title, userData, hasChart }: DashboardCardProps) => {
  const [pin, setPin] = useState(false)

  const cardData = {
    datasets: [
      {
        data: userData.map(data => data.value),
        backgroundColor: userData.map(data => data.chartBackground),
        borderWidth: 0
      }
    ]
  }
  return (
    <div
      className={clsx(
        'flex bg-white w-full max-w-[700px] px-6 py-4 rounded-2xl my-4',
        hasChart && ''
      )}
    >
      {hasChart && (
        <div className="w-1/2 flex flex-col p-4 ">
          <DoughnutChart data={cardData} />
        </div>
      )}

      <div
        className={clsx(
          'flex flex-col pt-4',
          hasChart ? 'w-1/2' : 'w-full'
        )}
      >
        <div className="flex w-full justify-between mb-4">
          <p className="text-2xl font-semibold">{title}</p>
        </div>
        <div className=" w-full title_medium text-sky-600 text-3xl mb-4">
          + 999,99%
        </div>
        {userData.map(item => (
          <div key={item.id} className="flex w-full justify-between mb-1">
            <p>{item.title}</p>
            <p className=" text-sky-600">{item.value}</p>
          </div>
        ))}
        <hr className="mt-1 mb-2" />
        <div className="flex w-full justify-between">
          <p>Total</p>
          <p className=" text-sky-600">15150</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard
