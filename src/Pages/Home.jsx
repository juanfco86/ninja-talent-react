import { useEffect, useState } from 'react'
import { fetchRandomUser } from '../Api/getApi'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Table from '../Components/Table/Table'

const Home = () => {
    const [randomUsers, setRandomUsers] = useState()

    useEffect(() => {
        fetchRandomUser(setRandomUsers)
    }, []);

    return (
        <>
            <h1>Home</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Age</td>
                        <td>Gender</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        randomUsers ? randomUsers.results.map((user) => {
                            const userId = user.login.uuid
                            const gender = user.gender[0].toUpperCase()
                            console.log(user);

                            return (
                                <tr key={userId}>
                                    <td><Link to={`/profile/${userId}`}>{user.name.first}</Link></td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.dob.age}</td>
                                    <td>{gender}</td>
                                </tr>
                            ) 
                        }) : null
                    }
                </tbody>
            </Table>
            {/* <Table /> */}
        </>
    )
}

export default Home