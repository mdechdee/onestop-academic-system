import sum_credit from "../util/sum_credit";
import useSWR from 'swr';
import fetcher from '../util/fetcher';

export default function MinorInfo({department, requirement}){

    if(department == null || requirement == null){
        return (<></>)
    }

    const name = department.name;
    const abbreviate_name = department.alt_name;
    
    const credit_total = requirement.total_credit;
    const credit_major_required = requirement.major_required_credit;
    const note = requirement.note;

    return (
        <div className="flex flex-col bg-gray-50">
            <div className="border-t-2 border-b-2 text-center text-xl font-semibold text-white bg-kaist">Minor</div>
            <p className="border-b-2 text-center text-lg font-medium">{name} ({abbreviate_name})</p>
            <table className="table-auto text-center">
                <tbody>
                    <tr className="border-b-2 text-white bg-kaist">
                        <td className="border-r-2">Total credits</td>
                        <td className="border-r-2">Major Required</td>
                        <td>Note</td>
                    </tr>
                    <tr className="border-b-2">
                        <td className="border-r-2">{credit_total}+</td>
                        <td className="border-r-2">{credit_major_required}+</td>
                        <td>{note}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}