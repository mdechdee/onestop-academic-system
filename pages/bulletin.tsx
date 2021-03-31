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
  const [level, setLevel] = useState(null);

  const { data:departments , error: depErr } = useSWR(`/api/department`,fetcher);
  const { data:majorRequirements , error: majorReqErr} = useSWR(`/api/requirement/major`,fetcher);
  const { data:minorRequirements , error: minorReqErr} = useSWR(`/api/requirement/minor`,fetcher);
  const { data:requirements , error: reqErr} = useSWR(`/api/requirement`,fetcher);
  const { data:courses , error: courseErr} = useSWR(`/api/course`,fetcher);
  
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

  return (
    <Layout>
      <div className = "container mx-auto h-screen px-4"> 
        <p className = "font-bold text-3xl font-sans mt-9 mb-9"> Bulletin </p>

        <div className = "font-medium mb-10">
          <p> To show the graduation criteria</p>
          <p> Select the red star on major department and the blue star on minor department</p>
          <p> Select only the green star on advanced major department</p>
          <p> Select the red star on major departments</p>
        </div>



        <div className="flex justify-around">
          { level == 0 ? <div className="p-3 bg-kaist w-3/6 text-center text-white text-xl font-bold" onClick={()=>setLevel(0)}> Undergradute </div>
            : <div className="p-3 bg-white w-3/6 text-center text-kaist text-xl font-bold border-2 border-custom-grey" onClick={()=>setLevel(0)}> Undergradute </div>
          }
          { level == 1 ?<div className="p-3 bg-kaist w-3/6 text-center text-white text-xl font-bold" onClick={()=>setLevel(1)}> Graduate </div>
            : <div className="p-3 bg-white w-3/6 text-center text-kaist text-xl font-bold border-2 border-custom-grey" onClick={()=>setLevel(1)}> Graduate </div>
          }
        </div>

        
          {level == 0 ? 
            <div className="flex justify-between">
              <DepartmentTabs 
                data={departments} 
                selectMajor={selectMajor} selectMinor={selectMinor} selectAdvanceMajor={selectAdvanceMajor}
                major={major} minor={minor} advanceMajor={advanceMajor} doubleMajor={doubleMajor}/>
              
              <RequirementSheet minorRequirements={minorRequirements}
                requirements={requirements}
                majorRequirements={majorRequirements}
                departments={departments} 
                level={level}
                major={major} minor={minor} 
                doubleMajor={doubleMajor} 
                advanceMajor={advanceMajor}/>
            </div>
            :
            
            <></>
          }
      </div>
    </Layout>
  )
}