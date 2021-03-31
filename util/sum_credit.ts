export default function sum_credit<T>(courses: T[]): number {
    var total_credit = 0;
    courses.forEach( course => {
        if( course !== undefined && "credit" in course) total_credit += course.credit;
    })
    return total_credit;
}
