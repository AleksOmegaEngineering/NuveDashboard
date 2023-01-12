export async function load() {
    const patientRes = await fetch('https://dummyjson.com/users?limit=4');
    const patientData = await patientRes.json();
    const users = patientData.users;
    return {
        users: users
    }
}