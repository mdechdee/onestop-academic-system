import MajorInfo from './MajorInfo';
import MinorInfo from './MinorInfo';

export default function RequirementSheet({ minorRequirements,majorRequirements,departments,major,minor,doubleMajor,advanceMajor }){

    if(minorRequirements===undefined || majorRequirements===undefined || departments===undefined){
        return (
            <div className ="container h-96 bg-gray-100 mt-4 border-2 ">
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
    else if(major==null&&minor==null&&advanceMajor==null&&doubleMajor==null){
        return (
            <div className ="container h-96 bg-gray-100 mt-4 border-2 ">
                <p className="text-center text-xl font-bold">Choose a major department</p>
            </div>
        )
    }
    else if(doubleMajor!=null){
        return (
            <div className ="container h-96 bg-gray-100 mt-4 border-2 ">
                <div className="w-full text-center">
                    <p>Double Major Requirement</p>
                </div>
            </div>
        )
    }
    else if(advanceMajor!=null){
        return (
            <div className ="container h-96 bg-gray-100 mt-4 border-2 ">
                <div className="w-full text-center">
                    <p>Double Major Requirement</p>
                </div>
            </div>
        )
    }
    else if(major!=null && minor==null){
        const { name: majorName, abbreviate_name: majorAbName, major_requirement_id } = departments[major];
        const majorRequirement = majorRequirements[major_requirement_id];
        return (
            <div className ="container h-96 bg-gray-100 mt-4 border-2 flex flex-col">
                <div className="w-full text-center">
                    <p className="text-xl font-bold">Major Requirement</p>
                </div>
                <MajorInfo name={majorName} abbreviate_name={majorAbName} majorRequirement={majorRequirement}/>
            </div>
        )
    }
    else{
        const { name: minorName, abbreviate_name: minorAbName, minor_requirement_id } = departments[minor];
        const minorRequirement = minorRequirements[minor_requirement_id];
        const { name: majorName, abbreviate_name: majorAbName, major_requirement_id } = departments[major];
        const majorRequirement = majorRequirements[major_requirement_id];
        return (
            <div className ="container h-96 bg-gray-100 mt-4 border-2 flex flex-col">
                <div className="w-full text-center">
                    <p className="text-xl font-bold">Major Requirement</p>
                </div>
                <MajorInfo name={majorName} abbreviate_name={majorAbName} majorRequirement={majorRequirement}/>
                <MinorInfo name={minorName} abbreviate_name={minorAbName} minorRequirement={minorRequirement}/>
            </div>
        )
    }
}