export default function MinorInfo({name, abbreviate_name, minorRequirement}){
    return (
        <div className="flex flex-col bg-gray-50">
            <div className="border-t-2 border-b-2 text-center text-xl font-semibold">Major</div>
            <p className="border-b-2 text-center text-lg font-medium">{name} ({abbreviate_name})</p>
            <table className="table-auto text-center">
                <tbody>
                    <tr className="border-b-2">
                        <td className="border-r-2">Total credits</td>
                        <td className="border-r-2">Major Required</td>
                        <td>Major Elective</td>
                    </tr>
                    <tr className="border-b-2">
                        <td className="border-r-2">{minorRequirement.total_required}+</td>
                        <td className="border-r-2">{minorRequirement.major_required}+</td>
                        <td>{minorRequirement.major_elective}+</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}