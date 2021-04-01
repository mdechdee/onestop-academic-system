import sum_credit from "../util/sum_credit";
import useSWR from 'swr';
import fetcher from '../util/fetcher';

export default function MajorInfo({department,requirement}){

    const name = department.name;
    const abbreviate_name = department.alt_name;
    
    const credit_total = requirement.total_credit;

    const courses_mandatory_major = (requirement.mandatory_major_course != null) ? requirement.mandatory_major_course.split(", ") : "";
    var courses_mm = [];

    if(courses_mandatory_major != ""){
        courses_mandatory_major.forEach( code => {
            const { data:course , error: courseErr } = useSWR(`/api/course/${code}`,fetcher);
            courses_mm.push(course);
        })
    }

    const credit_major_required = sum_credit(courses_mm);
    const credit_major_elective = credit_total - credit_major_required;
    const credit_basic_elective = requirement.basic_elective_credit;

    return (
        <div className="flex flex-col bg-gray-50">
            <div className="border-t-2 border-b-2 text-center text-xl font-semibold text-white bg-kaist">Major</div>
            <p className="border-b-2 text-center text-lg font-medium">{name} ({abbreviate_name})</p>
            <table className="table-auto text-center">
                <tbody>
                    <tr className="border-b-2 text-white bg-kaist">
                        <td className="border-r-2">Total credits</td>
                        <td className="border-r-2">Major Required</td>
                        <td className="border-r-2">Major Elective</td>
                        <td>Basic Elective</td>
                    </tr>
                    <tr className="border-b-2">
                        <td className="border-r-2">{credit_total}+</td>
                        <td className="border-r-2">{credit_major_required}+</td>
                        <td className="border-r-2">{credit_major_elective}+</td>
                        <td>{credit_basic_elective}+</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}