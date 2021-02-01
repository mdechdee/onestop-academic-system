import DepartmentTab from './DepartmentTab';

export default function DepartmentTabs({ data, major, minor, advanceMajor, doubleMajor, selectMajor, selectMinor, selectAdvanceMajor}){
    if(!data){
        return (
            <div className = "container text-2xl mt-4 mb-4 mr-3">
                <div className="w-6 h-6 ml-72 mt-40">
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
            </div>
        )
    }
    return (<div className = "container text-2xl mt-4 mb-4 mr-3">
        {data.map( (department,index) => (
            <DepartmentTab key={index} index={index}
            department={department} 
            selectMajor={selectMajor} selectMinor={selectMinor} selectAdvanceMajor={selectAdvanceMajor}
            major={major} minor={minor} advanceMajor={advanceMajor} doubleMajor={doubleMajor}
            />
        ))}
    </div>)
}