import { useState } from 'react';

export default function DepartmentTab({index, department, major, minor, advanceMajor, doubleMajor, selectMajor, selectMinor, selectAdvanceMajor}){
    return (
        <div className="bg-gray-100 w-full h-18 mt-1 mb-2 mr-1 flex flex-nowrap flex-start
            text-xl text-sans font-medium
            hover:bg-gray-200">
            <p className="w-6/12 pl-2 pt-2 pb-2">{department.name}</p>
            <div className="w-6/12 pt-2 pb-2 justify-around content-center">
                { minor==index ? <button className="bg-blue-200 ml-2 mr-2 h-10 w-16 border-2 rounded-xl border-blue-300" onClick={()=>selectMinor(index)}>Minor</button>
                    : <button className="bg-blue-100  ml-2 mr-2 h-10 w-16 border-2 rounded-xl border-blue-300 hover:bg-blue-200" onClick={()=>selectMinor(index)}>Minor</button>
                }
                { major==index || doubleMajor==index ? <button className="bg-red-200 ml-2 mr-2 h-10 w-16 border-2 rounded-xl border-red-300" onClick={()=>selectMajor(index)}>Major</button>
                    : <button className="bg-red-100  ml-2 mr-2 h-10 w-16 border-2 rounded-xl border-red-300 hover:bg-red-200" onClick={()=>selectMajor(index)}>Major</button>
                }
                { advanceMajor==index ? <button className="bg-green-200 ml-2 mr-2 h-10 w-28 border-2 rounded-xl border-green-300" onClick={()=>selectAdvanceMajor(index)}>Advance</button>
                    : <button className="bg-green-100 ml-2 mr-2 h-10 w-28 border-2 rounded-xl border-green-300 hover:bg-green-200" onClick={()=>selectAdvanceMajor(index)}>Advance</button>
                }
            </div>
        </div>
    )
}