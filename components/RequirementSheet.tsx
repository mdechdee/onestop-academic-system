import MajorInfo from './MajorInfo';
import MinorInfo from './MinorInfo';
import DoubleMajorInfo from './DoubleMajorInfo';
import AdvanceMajorInfo from './AdvanceMajorInfo';

export default function RequirementSheet({ requirements,minorRequirements,majorRequirements,departments,level,major,minor,doubleMajor,advanceMajor }){

    if(!requirements || !minorRequirements || !majorRequirements || !departments){
        return (
            <div className ="container h-72 bg-gray-100 mt-4 border-2 ">
                <div className="relative w-5 h-5 inset-2/4">
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

    const requirement = requirements[level];
    var requirement_1 = null;
    var requirement_2 = null;
    var department_1 = null;
    var department_2 = null;
    const total_credit = requirement.total_credit;

    if(major != null){
        requirement_1 = majorRequirements[major];
        department_1 = departments[major];
    }
    if(minor != null){
        requirement_2 = minorRequirements[minor];
        department_2 = departments[minor];
    }

    if(major==null&&minor==null&&advanceMajor==null&&doubleMajor==null){
        return (
            <div className ="container h-96 bg-gray-100 mt-4 border-2 ">
                <p className="text-center text-xl font-bold">Choose a department</p>
            </div>
        )
    }
    else{
        return (
            <div className ="container h-120 bg-gray-100 mt-4 border-2 ">
                <p className="font-bold text-3xl text-center mt-8 mb-8">Graduation Requirement</p>
                <div className="flex flex-col bg-gray-50">
                    <table className="table-auto text-center">
                        <tbody>
                            <tr className="border-b-2 text-xl font-bold">
                                <td className="border-r-2">Admitted in 2015 or before</td>
                                <td>Admitted in 2016 or after</td>
                            </tr>
                            <tr className="border-b-2">
                                <td className="border-r-2">130</td>
                                <td>136</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mt-10"></div>
                { doubleMajor != null ? <DoubleMajorInfo department_1={department_1} department_2={department_2} requirement_1={requirement_1} requirement_2={requirement_2}/>
                    : ( advanceMajor != null ? <AdvanceMajorInfo department={department_1} requirement={requirement_1}/>
                        : <div>
                            <MajorInfo department={department_1} requirement={requirement_1}/>
                            <div className="mt-10"></div>
                            <MinorInfo department={department_2} requirement={requirement_2}/>
                        </div>)
                }
            </div>
        )
    }

    // if(minorRequirement==null || majorRequirement==null || department==null){
    //     return (
    //         <div className ="container h-96 bg-gray-100 mt-4 border-2 ">
    //             <div className="w-6 h-6 ml-72 mt-40">
    //                 <svg
    //                 className="animate-spin h-5 w-5 text-red"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 >
    //                 <circle
    //                     className="opacity-25"
    //                     cx="12"
    //                     cy="12"
    //                     r="10"
    //                     stroke="currentColor"
    //                     stroke-width="4"
    //                 />
    //                 <path
    //                     className="opacity-75"
    //                     fill="currentColor"
    //                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    //                 />
    //                 </svg>
    //             </div>
    //         </div>
    //     )
    // }
}