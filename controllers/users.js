import { v4 as uuidv4 } from "uuid"

let users = []

export const getUsers = (req, res) => {
    res.send(users)
}

export const createUser = (req, res) => {
    const user = req.body
    users.push({ id: uuidv4(), ...user })
    res.send("User added successfully")
}

export const getUser = (req, res) => {
    const { id } = req.params
    const findUser = users.find((user) => user.id === id)
    res.send(findUser)
}


export const deleteUser = (req, res) => {
    const { id } = req.params
    users = users.filter((user) => user.id !== id)
    res.send("User deleted successfully")
}

export const updateUser = (req, res) => {
    const { id } = req.params
    const user = users.find((user) => user.id === id)
    const { firstName, lastName, age } = req.body
    if (firstName) user.firstName = firstName
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User id:${id} updated successfully`)
}