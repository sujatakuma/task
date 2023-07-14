import React from 'react'
import Card from './Card'

const Cardlist = ({ Users }) => {

    return (
        <div>

            {
                Users.map((user, i) => {
                    return (
                        <Card key={i} id={Users[i].id}
                            Name={Users[i].name}
                            email={Users[i].email}
                            phone={Users[i].phone} />
                    )
                })
            }
        </div>
    )
}

export default Cardlist
