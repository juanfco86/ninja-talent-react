
export const fetchRandomUser = async(setRandomUsers) => {
    try {
        const response = await fetch(`https://randomuser.me/api?results=5&noinfo`)
        const data = await response.json()
        return setRandomUsers(data);
    } catch (error) {
        console.log(error);
    }
}