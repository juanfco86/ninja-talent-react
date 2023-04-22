import { Table } from 'react-bootstrap';
import { MainContext } from '../Context/MainContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const TableComponent = () => {
    const { randomUsers } = useContext(MainContext)

    return (
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
    )
}

export default TableComponent