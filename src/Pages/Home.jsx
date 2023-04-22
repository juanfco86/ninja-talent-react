import { useContext, useEffect } from 'react'
import { fetchRandomUser } from '../Api/getApi'
import { MainContext } from '../Components/Context/MainContext'
import Table from '../Components/Table/TableComponent'

const Home = () => {
    const { setRandomUsers } = useContext(MainContext)

    useEffect(() => {
        fetchRandomUser(setRandomUsers)
    }, []);

    return (
        <>
            <h1>Home</h1>
            <Table />
        </>
    )
}

export default Home