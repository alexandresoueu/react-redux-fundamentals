import React from 'react'
import students from '../../data/students'

function StudentList () {
  // const listOne = (
  //   <li>
  //     {students[0].id}) {students[0].name} -> {students[0].score}
  //   </li>
  // )

  const studentsList = students.map(student => {
    return (
      <li key={student.id}>
        {student.id}) {student.name} -- {student.score}
      </li>
    )
  })

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {studentsList}
      </ul>
    </div>
  )
}

export default StudentList
