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
            <table>
                <tr>
                    <td>Name</td>
                    <td>Tal</td>
                    <td>Cual</td>
                </tr>
                <tr>

            {
                randomUsers ? randomUsers.results.map((user) => {
                    console.log(user);
                    return <td>{user.name.first}</td>;
                }) : ''
            }
            </tr>
            </table>
        </>
    )
}

export default Home