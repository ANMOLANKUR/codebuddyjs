import React from 'react'

function dataStructures() {
    const user = {
        name: "Elie",
        job: "Instructor",
        workDetails: {
            type: "Part Time",
            hours: "40 hours"
        },
        educationQualifications: [
            {
                name: "Full Stack",
                type: "Certification"
            },
            {
                name: "Javascript",
                type: "Certification"
            }
        ]
    }

    const userUpper = user.toUpperCase()
  return (
    <div>{userUpper}</div>
  )
}

export default dataStructures
