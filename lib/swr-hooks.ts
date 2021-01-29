import useSWR from 'swr';

function fetcher(url: string) {
    return window.fetch(url).then((res) => res.json());
}

export function useStudents() {
    return useSWR(`/api/get-students`,fetcher);
}

export function useStudent(id: string) {
    return useSWR(`/api/get-student?id=${id}`,fetcher);
}

export function useCourses(){
    return useSWR(`/api/get-courses`,fetcher);
}

export function useCourse(id: string) {
    return useSWR(`/api/get-course?id=${id}`,fetcher);
}