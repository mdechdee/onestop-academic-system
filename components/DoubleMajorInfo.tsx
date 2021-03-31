export default function doubleMajorInfo({department_1,department_2,requirement_1,requirement_2}){

    return (
        <div className="flex flex-col bg-gray-50">
            <div className="border-t-2 border-b-2 text-center text-xl font-semibold">Major</div>
            <p className="border-b-2 text-center text-lg font-medium">{name} ({abbreviate_name})</p>
            <table className="table-auto text-center">
                <tbody>
                    <tr className="border-b-2">
                        <td className="border-r-2">Total credits</td>
                        <td className="border-r-2">Major Required</td>
                        <td className="border-r-2">Major Elective</td>
                        <td>Basic Elective</td>
                    </tr>
                    <tr className="border-b-2">
                        <td className="border-r-2">{majorRequirement.total_credit}+</td>
                        <td className="border-r-2">{majorRequirement}+</td>
                        <td className="border-r-2">{majorRequirement.major_elective}+</td>
                        <td>{majorRequirement.basic_elective}+</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}