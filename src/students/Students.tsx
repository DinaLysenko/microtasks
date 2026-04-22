type Props = {
    students: StudentsProps[]
}
type StudentsProps = {
    id: number
    name: string
    age: number
}
export const Students = ({students}: Props) => {
    return (
        <ul>
            {students.map((student: StudentsProps) => {
                return (
                    <li key={student.id}>
                        <span>{student.name}</span>
                        <span> age:{student.age}</span>
                    </li>
                )
            })}

        </ul>
    )
}