import { useContext } from 'react'
import { MainContext } from '../Components/Context/MainContext'
import { useParams } from 'react-router-dom'
import BackButton from '../Components/Buttons/Close/BackButton'

const Profile = () => {
    const { randomUsers } = useContext(MainContext)
    const user = randomUsers
    const params = useParams()
    const idProfile = params.id
    const findUser = user.results.find((user) => user.login.uuid === idProfile)
    const birthDate = new Date(findUser.dob.date);
    const registerDate = new Date(findUser.registered.date)
    const genderUppercase = findUser.gender[0].toUpperCase()

    return (
        <>
            <BackButton />
            
            <div className='profile--container'>
                <div className='profile--container__user border'>
                    <h3 className='profile--title' id="profile--title__h3">Profile</h3>
                    <img src={findUser.picture.large} alt={findUser.name.first} />
                    <div className='profile--p__container'>
                        <p><b>Username:</b></p>
                        <p className='profile--p__username'>{findUser.login.username}</p>
                    </div>
                    <p className='profile--p__registered'><b>Registered:</b></p>
                    <p className='profile--p__dateRegistered'>{registerDate.getDate()}/{registerDate.getMonth()}/{registerDate.getFullYear()}</p>
                </div>
                <div className='profile--container__info border'>
                    <h4 className='profile--title'>Personal information</h4>
                    <p><b>Full name:</b></p>
                    <p>{findUser.name.first} {findUser.name.last}</p>
                    <p><b>Address:</b></p>
                    <p>{findUser.location.street.number} {findUser.location.street.name}</p>
                    <address>{findUser.location.city}, {findUser.location.state} {findUser.location.postcode}</address>
                    <p><b>Country:</b></p>
                    <p>{findUser.location.country}</p>
                    <p><b>Age:</b></p>
                    <p>{findUser.dob.age}</p>
                    <p><b>Date of birth:</b></p>
                    <p>{birthDate.getDate()}/{birthDate.getMonth()}/{birthDate.getFullYear()}</p>
                    <p><b>Gender:</b></p>
                    <p>{genderUppercase}</p>
                </div>
                <div className='profile--container__info border'>
                    <h4 className='profile--title'>Contact</h4>
                    <p><b>Email:</b></p>
                    <p>{findUser.email}</p>
                    <p><b>Phone:</b></p>
                    <p>{findUser.phone}</p>
                    <p><b>Cell:</b></p>
                    <p>{findUser.cell}</p>
                </div>
            </div>
        </>
    )
}

export default Profile