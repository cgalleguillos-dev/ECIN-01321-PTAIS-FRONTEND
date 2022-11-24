export interface CourseProps {
  cod: string
  name: string
  credit: number
  semester: number
  approved: boolean
}

export interface SemesterProps {
  semester: number
  courses: CourseProps[]
}

export interface SemestersProps {
  semesters: SemesterProps[]
}

export interface Student {
  rut: string
  token: string
  refreshToken: string
}