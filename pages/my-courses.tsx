import Head from 'next/head'
import Layout from '../components/Layout'
import ProgressRing from '../components/ProgressRing'

export default function MyCourses() {
  return (
    <Layout>
      <div className="flex md:flex-row sm:flex-col h-screen space-x-6 p-6">
        <div className="flex md:flex-col sm:flex-row w-full md:w-60 bg-gray-600 justify-items-stretch">
          <div className="relative w-full" style={{height:'200px'}}> 
            <div className="absolute w-full" >
              <ProgressRing className="mx-auto" radius={100} stroke={16} progress={20} />
            </div>
            <div className="flex h-full justify-center items-center"> Major Required </div>
          </div>
        </div>

        <div className="flex md:flex-col sm:flex-row w-full md:w-60 bg-gray-600 justify-items-stretch">
          <div className="relative w-full" style={{height:'200px'}}> 
            <div className="absolute w-full" >
              <ProgressRing className="mx-auto" radius={100} stroke={16} progress={20} />
            </div>
            <div className="flex h-full justify-center items-center"> Minor Required </div>
          </div>
        </div>

        <div className="flex md:flex-col sm:flex-row w-full md:w-60 bg-gray-600 justify-items-stretch">
          <div className="relative w-full" style={{height:'200px'}}> 
            <div className="absolute w-full" >
              <ProgressRing className="mx-auto" radius={100} stroke={16} progress={20} />
            </div>
            <div className="flex h-full justify-center items-center"> Major Elective </div>
          </div>
        </div>

        <div className="flex md:flex-col sm:flex-row w-full md:w-60 bg-gray-600 justify-items-stretch">
          <div className="relative w-full" style={{height:'200px'}}> 
            <div className="absolute w-full" >
              <ProgressRing className="mx-auto" radius={100} stroke={16} progress={20} />
            </div>
            <div className="flex h-full justify-center items-center"> Basic Required </div>
          </div>
        </div>

        <div className="flex md:flex-col sm:flex-row w-full md:w-60 bg-gray-600 justify-items-stretch">
          <div className="relative w-full" style={{height:'200px'}}> 
            <div className="absolute w-full" >
              <ProgressRing className="mx-auto" radius={100} stroke={16} progress={20} />
            </div>
            <div className="flex h-full justify-center items-center"> Humanity </div>
          </div>
        </div>

        

      </div>
    </Layout>
  )
}
