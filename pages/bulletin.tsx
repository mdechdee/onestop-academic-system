import Head from 'next/head'
import Layout from '../components/Layout'
import { useState } from 'react';
import { GetStaticProps } from 'next';
import useSWR from 'swr';
import fetcher from '../util/fetcher';
import { createEmptyStatement, createMetaProperty, createPropertyAssignment } from 'typescript';


export default function Bulletin() {
  
  const [advanceMajor, setAdvanceMajor] = useState(null);
  const [major, setMajor] = useState(null);
  const [minor, setMinor] = useState(null);
  const [doubleMajor, setDoubleMajor] = useState(null);

  const { data, error } = useSWR(`/api/department`,fetcher);
  if(data) var num_department: number = data.length;

  function selectMajor(department: number){
    if(advanceMajor==null){
      if(major==null && doubleMajor==null && department != minor) setMajor(department);
      else if(department == major) setMajor(null);
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
      <div className = "container mx-auto h-screen border-2 px-4 border-black"> 
        <p className = "font-bold text-3xl font-sans mt-9 mb-9"> Bulletin </p>

        <div className = "font-medium">
          <p> To show the graduation criteria</p>
          <p> Select the red star on major department and the blue star on minor department</p>
          <p> Select only the green star on advanced major department</p>
          <p> Select the red star on major departments</p>
        </div>

        <div className="flex border-2">
          { !data ? (
            <div className="w-full">
              <svg
                className="animate-spin h-5 w-5 text-red"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
            ) : 
          <div className = "container text-2xl mt-4 mb-4 mr-3">
            { data.map( department => 
            <div className="bg-gray-100 w-full border-2 border-gray-200 p-2 mt-2 mb-2 hover:bg-gray-200 flex"> 
              <div className="w-1/2 text-xl text-center pt-3"> {department.name} </div>
              <div className=" text-xl text-center flex">
                { (department.id-1)!=minor ? 
                  <button className="rounded-md bg-red-100 ml-5 mr-5 font-medium pl-2 pr-2 hover:bg-red-200 " onClick={()=>{selectMinor(department.id-1)}}>Minor</button>
                  : 
                  <button className="rounded-md bg-red-300 ml-5 mr-5 font-medium pl-2 pr-2 " onClick={()=>{selectMinor(department.id-1)}}>Minor</button>
                }
                { (department.id-1)!=major && (department.id-1)!=doubleMajor ?
                  <button className="rounded-md bg-blue-100 ml-5 mr-5 font-medium pl-2 pr-2 hover:bg-blue-200" onClick={()=>{selectMajor(department.id-1)}}>Major</button>
                  :
                  <button className="rounded-md bg-blue-300 ml-5 mr-5 font-medium pl-2 pr-2" onClick={()=>{selectMajor(department.id-1)}}>Major</button>
                }
                { (department.id-1)!=advanceMajor ?
                  <button className="rounded-md bg-green-100 ml-5 mr-5 font-medium pl-2 pr-2 hover:bg-green-200" onClick={()=>{selectAdvanceMajor(department.id-1)}}>Advanced Major</button>
                  :
                  <button className="rounded-md bg-green-300 ml-5 mr-5 font-medium pl-2 pr-2" onClick={()=>{selectAdvanceMajor(department.id-1)}}>Advanced Major</button>
                }
                
              </div>
            </div>
            )}
          </div>
          }
          <div className ="container h-full bg-gray-100 mt-4">

          </div>
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