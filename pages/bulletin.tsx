import Head from 'next/head'
import Layout from '../components/Layout'
import { useState } from 'react';
import { GetStaticProps } from 'next';
import { useCourses } from "../lib/swr-hooks";
import useSWR from 'swr';

// fake departments
const fetcher = url => fetch(url).then(r => r.json())
const departments = [{name: "Computer Science"},{name: "Electrical Engineering"},{name: "Industrial Engineering"},{name:"Material Science"}];

export default function Bulletin() {
  
  const [advanceMajor, setAdvanceMajor] = useState("");
  const [major, setMajor] = useState("");
  const [minor, setMinor] = useState("");
  const [doubleMajor, setDoubleMajor] = useState("");

  function selectMinor(department){
    if(doubleMajor != ""){
      setMajor("");
      setDoubleMajor("");
    }
    else if(advanceMajor != ""){
      setAdvanceMajor("");
    }
    if(department.name!=major) setMinor(department.name);
  }

  function selectMajor(department){
    if(major != "" && minor == ""){
      if(department.name != major) setDoubleMajor(department.name);
    }
    else if(major != "" && minor != ""){
      setMinor("");
      setMajor(department.name);
    }
    else if(doubleMajor != ""){
      setDoubleMajor("");
      setMajor(department.name);
    }
    else if(advanceMajor != ""){
      setAdvanceMajor("");
      setMajor(department.name);
    }
    else if(minor != department.name){
      setMajor(department.name);
    }

  }

  function selectAdvanceMajor(department){
    if(minor != ""){
      setMinor("");
    }
    if(major != ""){
      setMajor("");
    }
    if(doubleMajor != ""){
      setDoubleMajor("");
      setMajor("");
    }
    setAdvanceMajor(department.name);
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
          <div className = "container text-2xl mt-4 mb-4 mr-3">
            { departments.map( department => 
                <div className="bg-gray-100 w-full border-2 border-gray-200 p-2 mt-2 mb-2 hover:bg-gray-200 flex"> 
                  <div className="w-1/2 text-center pt-3"> {department.name} </div>
                  <div className=" text-xl text-center flex">
                    <button className="rounded-md bg-red-100 ml-5 mr-5 font-medium pl-2 pr-2 hover:bg-red-200" onClick={()=>{selectMinor(department)}}>Minor</button>
                    <button className="rounded-md bg-blue-100 ml-5 mr-5 font-medium pl-2 pr-2 hover:bg-blue-200" onClick={()=>{selectMajor(department)}}>Major</button>
                    <button className="rounded-md bg-green-100 ml-5 mr-5 font-medium pl-2 pr-2 hover:bg-green-200" onClick={()=>{selectAdvanceMajor(department)}}>Advanced Major</button>
                  </div>
                </div>
            )}
          </div>
          <div className ="container h-full bg-gray-100 mt-4">
              <p>Major: {major}</p>
              <p>Minor: {minor}</p>
              <p>Advance Major: {advanceMajor}</p>
              <p>Double Major: {doubleMajor}</p>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  // ...
  const { data ,error} = await useSWR('/api/courses',fetcher);

  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}