
import DashboardCard from '@/components/DashboardCard/DashboardCard'
import DashboardTable from '@/components/DashboardTable/DashboardTable'

const tableData = [
  {
    id: 0,
    status: 'Applied',
    jobName: 'Specjalista/-tka ds. kadr i płac',
    recruiterName: 'Christina Oskar'
  },
  {
    id: 1,
    status: 'Seen by recruiter',
    jobName: 'Specjalista/-tka ds. kadr i płac',
    recruiterName: 'Christina Oskar'
  },
  {
    id: 2,
    status: 'Applied',
    jobName: 'Specjalista/-tka ds. kadr i płac',
    recruiterName: 'Christina Oskar'
  },
  {
    id: 3,
    status: 'Seen by recruiter',
    jobName: 'Specjalista/-tka ds. kadr i płac',
    recruiterName: 'Christina Oskar'
  },
  {
    id: 4,
    status: 'Applied',
    jobName: 'Specjalista/-tka ds. kadr i płac',
    recruiterName: 'Christina Oskar'
  }
]

const userData = [
  {
    id: 1,
    title: 'In progress',
    value: 80000,
    chartBackground: 'rgba(75,192,192,1)'
  },
  {
    id: 2,
    title: 'Reached Out',
    value: 45677,
    chartBackground: '#ecf0f1'
  },
  {
    id: 3,
    title: 'Called',
    value: 78888,
    chartBackground: '#50AF95'
  },
  {
    id: 4,
    title: 'Passed',
    value: 90000,
    chartBackground: '#f3ba2f'
  },
  {
    id: 5,
    title: 'In Wait',
    value: 4300,
    chartBackground: '#2a71d0'
  },
  {
    id: 6,
    title: 'Awaits Contract',
    value: 1300,
    chartBackground: 'black'
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
    <DashboardCard title='Title' userData={userData}  hasChart/>
     <DashboardTable tableData={tableData} />
     <DashboardCard title='Title' userData={userData} />

    </main>
  )
}
