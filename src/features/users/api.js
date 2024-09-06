import axios from "axios";
export const getUsers = async () => {
    const response = await axios.get("http://localhost:3004/users")
    return response.data
}

export const postUsers = async (user) => {
    const response = await axios.post("http://localhost:3004/users", user)
    return response.data
}

export const putUsers = async (user) => {
    const response = await axios.put(`http://localhost:3004/users/${user.id}`, user)
    return response.data;
}

export const deleteUsers = async (id) => {
    const response = await axios.delete(`http://localhost:3004/users/${id}`)
    return response.data
}