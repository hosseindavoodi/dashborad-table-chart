
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
     <DashboardTable tableData={tableData} />
    </main>
  )
}
