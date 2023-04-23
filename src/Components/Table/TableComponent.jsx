import { Table } from 'react-bootstrap';
import { MainContext } from '../Context/MainContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Spinner from '../Spinner/Spinner'

const TableComponent = () => {
    const { randomUsers } = useContext(MainContext)

    return (
        <div className='table--container'>
            <Table striped bordered hover size="sm" border="1px" className='table--style'>
                <thead>
                    <tr>
                        <td colSpan={5} className='table--title bg-dark'>Random Users</td>
                    </tr>
                    <tr className='table--style'>
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
                            
                            return (
                                <tr key={userId} className='table--style'>
                                    <td><Link className='link--style' to={`/profile/${userId}`}>{user.name.first}</Link></td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.dob.age}</td>
                                    <td>{gender}</td>
                                </tr>
                            ) 
                        }) : <Spinner />
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default TableComponent