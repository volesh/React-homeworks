import {useEffect, useState} from "react";

export default function AllUsers(){
    let [users, setUsers] = useState([])

    useEffect(
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            })
    )
    return users
}