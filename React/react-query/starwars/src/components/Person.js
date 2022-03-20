import React from 'react'

const Person = ({person}) => {
    return (
        <div className="card">
            <h3>{person.name}</h3>
            <p>Population - {person.population}</p>
            <p>Terrain - {person.terrain}</p>
        </div>
    )
}

export default Person
