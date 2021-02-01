import Head from 'next/head'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import useSWR from 'swr';
import fetcher from '../util/fetcher';
import DepartmentTabs from '../components/DepartmentTabs'
import RequirementSheet from '../components/RequirementSheet';

export default function Bulletin() {
  
  const [advanceMajor, setAdvanceMajor] = useState(null);
  const [major, setMajor] = useState(null);
  const [minor, setMinor] = useState(null);
  const [doubleMajor, setDoubleMajor] = useState(null);

  const { data:departments , error: depErr } = useSWR(`/api/department`,fetcher);
  const { data:majorRequirements , error: majorReqErr} = useSWR(`/api/requirement/major`,fetcher);
  const { data:minorRequirements , error: minorReqErr} = useSWR(`/api/requirement/minor`,fetcher);
  
  function selectMajor(department: number){
    if(advanceMajor==null){
      if(major==null && doubleMajor==null && department != minor) setMajor(department);
      else if(department == major && doubleMajor!=null){
        setMajor(doubleMajor);
        setDoubleMajor(null);
      }
      else if(department == major && doubleMajor==null){
        setMinor(null);
        setMajor(null);
      }
      else if(department == doubleMajor) setDoubleMajor(null);
      else if(major!=null && doubleMajor==null && minor == null) setDoubleMajor(department);
      else if(major==null && doubleMajor!=null && minor == null) setMajor(department);
    }
  }

  function selectMinor(department: number){
    if(doubleMajor==null && advanceMajor==null && major!=null){
      if(minor == department) setMinor(null);
      else if(minor==null && major!=department) setMinor(department);
    }
  }

  function selectAdvanceMajor(department: number){
    if(doubleMajor==null && major==null && minor==null && advanceMajor==null) setAdvanceMajor(department);
    else if(advanceMajor == department) setAdvanceMajor(null);
  }

  const createPage = async() => {
    if(minor==null && major==null && doubleMajor==null && advanceMajor==null){
      return <div className="font-sans font-semibold text-xl text-center mt-4 ml-4 mr-4">Choose your department</div>
    }
    else if(doubleMajor!=null){
      return <>doubleMajor</>
    }
    else if(advanceMajor!=null){
      return <>advanceMajor</>
    }
    else{
      return <>
        <div className="font-sans font-bold text-center mt-4 ml-4 mr-4"> 
          <p className="text-3xl">Major Requirment</p>
        </div>
      </>
    }
  }

  return (
    <Layout>
      <div className = "container mx-auto h-screen border-2 px-4 border-black"> 
        <p className = "font-bold text-3xl font-sans mt-9 mb-9"> Bulletin </p>

        <div className = "font-medium">
          <p> To show the graduation criteria</p>
          <p> Select the red star on major department and the blue star on minor department</p>
          <p> Select only the green star on advanced major department</p>
          <p> Select the red star on major departments</p>
        </div>

        <div className="flex border-2 justify-between">
          <DepartmentTabs 
            data={departments} 
            selectMajor={selectMajor} selectMinor={selectMinor} selectAdvanceMajor={selectAdvanceMajor}
            major={major} minor={minor} advanceMajor={advanceMajor} doubleMajor={doubleMajor}/>
          <RequirementSheet minorRequirements={minorRequirements}
            majorRequirements={majorRequirements}
            departments={departments} 
            major={major} minor={minor} 
            doubleMajor={doubleMajor} 
            advanceMajor={advanceMajor}/>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props:{}
  }
}