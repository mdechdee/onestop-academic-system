import useSWR from 'swr';

function fetcher(url: string) {
    return window.fetch(url).then((res) => res.json());
}

export function useStudents() {
    const { data, error } = useSWR(`/api/student`,fetcher);
    if (error) return console.log('error');
    if (!data) return console.log('No data')
    return data;
}

export function useStudent(id: string) {
    const { data, error } = useSWR(`/api/student?id=${id}`,fetcher);
    if (error) return console.log('error');
    if (!data) return console.log('No data')
    return data;
}

export function useCourses(){
    const { data, error } = useSWR(`../pages/api/course`,fetcher);
    if (error) return console.log('error');
    if (!data) return console.log('No data')
    return data;
}

export function useCourse(id: string) {
    const { data, error } = useSWR(`/api/course?id=${id}`,fetcher);
    if (error) return console.log('error');
    if (!data) return console.log('No data')
    return data;
}