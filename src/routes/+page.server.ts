export async function load() {
    const patientRes = await fetch('https://dummyjson.com/users?limit=10');
    const patientData = await patientRes.json();
    const users = patientData.users;
    users.forEach(function (users: { insuranceBool: boolean; }) {
        users.insuranceBool = false;
      });
    return {
        users: users
    }
}