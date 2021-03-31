import { useState } from 'react';

export default function DepartmentTab({index, department, major, minor, advanceMajor, doubleMajor, selectMajor, selectMinor, selectAdvanceMajor}){
    return (
        <div>
            <div className="w-full h-18 mr-1 flex flex-nowrap flex-start
                text-xl text-sans font-medium">
                <p className="w-3/5 pl-2 align-middle h-auto">{department.name}</p>
                <div className="pt-2 pb-2">
                    { minor==index ? <button className="bg-blue-200 ml-2 mr-2 h-10 w-16 border-2 rounded-xl border-blue-300 font-medium text-lg" onClick={()=>selectMinor(index)}>Minor</button>
                        : <button className="bg-blue-100  ml-2 mr-2 h-10 w-16 border-2 rounded-xl border-blue-300 hover:bg-blue-200 font-medium text-lg" onClick={()=>selectMinor(index)}>Minor</button>
                    }
                    { major==index || doubleMajor==index ? <button className="bg-red-200 ml-2 mr-2 h-10 w-16 border-2 rounded-xl border-red-300 font-medium text-lg" onClick={()=>selectMajor(index)}>Major</button>
                        : <button className="bg-red-100  ml-2 mr-2 h-10 w-16 border-2 rounded-xl border-red-300 hover:bg-red-200 font-medium text-lg" onClick={()=>selectMajor(index)}>Major</button>
                    }
                    { advanceMajor==index ? <button className="bg-green-200 ml-2 mr-2 h-10 w-28 border-2 rounded-xl border-green-300 font-medium text-lg" onClick={()=>selectAdvanceMajor(index)}>Advance</button>
                        : <button className="bg-green-100 ml-2 mr-2 h-10 w-28 border-2 rounded-xl border-green-300 hover:bg-green-200 font-medium text-lg" onClick={()=>selectAdvanceMajor(index)}>Advance</button>
                    }
                </div>
            </div>
            <span className="text-custom-grey text-sm">------------------------------------------------------------------------------------------------------------------------------------</span>
        </div>
    )
}