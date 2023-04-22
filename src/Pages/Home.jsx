import { useEffect, useState } from 'react'
import { fetchRandomUser } from '../Api/getApi'

const Home = () => {
    const [randomUsers, setRandomUsers] = useState()

    useEffect(() => {
        fetchRandomUser(setRandomUsers)
    }, []);

    return (
        <>
            <h1>Home</h1>
            {
                randomUsers ? randomUsers.results.map((user) => {
                    return console.log(user);
                }) : ''
            }
        </>
    )
}

export default Home