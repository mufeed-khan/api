import React from 'react'

const Students = (props) => {
    return (
        <div>
            <h1>props:</h1>
            <h1>student name is {props.name} and class is {props.class}</h1>

        </div>
    )
}

export default Students
