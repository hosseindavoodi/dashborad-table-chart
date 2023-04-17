import { useState } from 'react'
import Link from 'next/link'

type tableDataType = {
  id: number
  status: string
  jobName: string
  recruiterName: string
}

interface DashboardTableProps {
  tableData: Array<tableDataType>
}

const DashboardTable = ({ tableData }: DashboardTableProps) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [modal, setModal] = useState(null)

  function handleClick(index: any) {
    setModalOpen(true)
    setModal(index)
  }

  return (
    <>
      <div className="-m-1.5 overflow-x-auto w-full max-w-[700px] my-4">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="rounded-lg overflow-hidden">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-sky-600 p_highlight text-white text-left">
                  <th scope="col" className="px-6 py-3 ">
                    Status
                  </th>
                  <th scope="col" className="py-3">
                    <div className='w-full h-[20px] border-l-2 border-l-black/[.12] pl-5'>Job Name</div>
                  </th>
                  <th scope="col" className="py-3">
                    <div className='w-full h-[20px] border-l-2 border-l-black/[.12] pl-5'>Recruiter</div>
                  </th>
                  <th scope="col" className="py-3">
                    <div className='w-full h-[20px] border-l-2 border-l-black/[.12] pl-5'>Actions</div>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {tableData.map(item => (
                  <tr key={item.id}>
                    <td className="flex p_highlight text-status-correct pl-6 pr-6 py-3">
                       <div className="max-w-[144px] overflow-hidden text-ellipsis whitespace-nowrap">
                        {item.status}
                      </div>
                    </td>
                    <td className="text-text-blue max-w-[135px] overflow-hidden text-ellipsis whitespace-nowrap pl-6 pr-6 py-3">
                     {item.jobName}
                    </td>
                    <td className="max-w-[160px] overflow-hidden text-ellipsis whitespace-nowrap pl-6 pr-6 py-3">
                      {item.recruiterName}
                    </td>
                    <td className="relative text-text-blue p_highlight text-3xl items-end text-right pl-6 pr-6 py-3">
                      <span onClick={() => handleClick(item.id)} className='w-[50px] h-[40px] cursor-pointer'>
                        ...
                      </span>
                      {isModalOpen && modal === item.id && (
                        <div className="absolute bottom-1 right-0 sm:right-8 flex flex-col bg-slate-100 rounded-3xl w-[150px] py-4 items-center justify-center text-sm">
                          <Link href="#">
                            More Detail
                          </Link>

                          <hr className="w-full mx-auto my-4" />

                          <span
                            className="p_highlight text-text-blue cursor-pointer"
                            onClick={() => setModalOpen(false)}
                          >
                            Cancel
                          </span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardTable
