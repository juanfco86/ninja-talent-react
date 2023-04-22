import { useContext } from 'react'
import { MainContext } from '../Components/Context/MainContext'
import { useParams } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const Profile = () => {
    const { randomUsers } = useContext(MainContext)
    const user = randomUsers
    const params = useParams()
    const idProfile = params.id
    const findUser = user.results.find((user) => user.login.uuid === idProfile)
    const birthDate = new Date(findUser.dob.date);

    // console.log(findUser);

    return (
        <>
            <h2>Profile</h2>
            <div className='profile--container'>
                <div className='profile--container__user border'>
                    <img src={findUser.picture.large} alt={findUser.name.first} />
                </div>
                <div className='profile--container__info border'>
                    <p>A</p>
                </div>
                <div className='profile--container__info border'>
                    <p>A</p>
                </div>
            </div>
            {/* 
            
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Username</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Cell</td>
                        <td>Gender</td>
                        <td>Age</td>
                        <td>Date of birth</td>
                        <td>Address</td>
                        <td>Country</td>
                        <td>Registered years</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{findUser.name.first} {findUser.name.last}</td>
                        <td>{findUser.login.username}</td>
                        <td>{findUser.email}</td>
                        <td>{findUser.phone}</td>
                        <td>{findUser.cell}</td>
                        <td>{findUser.gender}</td>
                        <td>{findUser.dob.age}</td>
                        <td>{birthDate.getDate()}/{birthDate.getMonth()}/{birthDate.getFullYear()}</td>
                        <td>
                            <span>
                                {findUser.location.street.number} {findUser.location.street.name}
                            </span> 
                            <address>
                                {findUser.location.city}, {findUser.location.state} {findUser.location.postcode}
                            </address>
                        </td>
                        <td>{findUser.location.country}</td>
                        <td>{findUser.registered.age}</td>
                    </tr>
                </tbody>
            </Table> 
            */}
        </>
    )
}

export default Profile