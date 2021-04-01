import { useState } from 'react';

export default function DepartmentTab({index, department, major, minor, advanceMajor, doubleMajor, selectMajor, selectMinor, selectAdvanceMajor}){
    return (
        <div className="w-full h-18 mr-1 flex flex-nowrap flex-start
            text-xl text-sans font-medium border-b-2 border-gray-200">
            <div className="flex w-3/5 pl-2 items-center mt-2 mb-2">
                <div>{department.name}</div>
            </div>
            <div className="flex items-center pt-2 pb-2">
                { minor==index ? <button className="ml-2 mr-2 w-16 bg-kaist text-white font-medium text-lg" onClick={()=>selectMinor(index)}>Minor</button>
                    : <button className="ml-2 mr-2 w-16 text-kaist font-medium text-lg" onClick={()=>selectMinor(index)}>Minor</button>
                }
                { major==index || doubleMajor==index ? <button className="ml-2 mr-2 w-16 bg-kaist text-white font-medium text-lg" onClick={()=>selectMajor(index)}>Major</button>
                    : <button className="ml-2 mr-2 w-16 text-kaist font-medium text-lg" onClick={()=>selectMajor(index)}>Major</button>
                }
                { advanceMajor==index ? <button className="ml-2 mr-2 w-28 bg-kaist text-white font-medium text-lg" onClick={()=>selectAdvanceMajor(index)}>Advance</button>
                    : <button className="ml-2 mr-2 w-28 text-kaist font-medium text-lg" onClick={()=>selectAdvanceMajor(index)}>Advance</button>
                }
            </div>
        </div>
    )
}