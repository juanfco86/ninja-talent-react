import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'

const PublicRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/:id" element={<Profile />} />
            </Routes>
        </>
    )
}

export default PublicRoutes