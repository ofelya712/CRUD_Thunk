import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteUser, loadUsers, updateUser } from "./userSlice"
import styles from './userList.module.css'
import { Box, Modal, Button } from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: 400,
    bgcolor: 'background-paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3
}

export const UserList = () => {
    const { register, handleSubmit, reset } = useForm()
    const [open, setOpen] = useState(false)
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    const handleUpdate = (data) => {
        dispatch(updateUser(data))
            .then((data) => {
                console.log(data)

            })
    }

    return <div>
        <h3>UserList</h3>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>salary</th>
                    <th>age</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {users.map(elm => <tr key={elm.id}>
                    <td>{elm.id}</td>
                    <td>{elm.name}</td>
                    <td>{elm.salary}</td>
                    <td>{elm.age}</td>
                    <td><button onClick={() => dispatch(deleteUser(elm.id))}>Delete</button></td>
                    <td><Button onClick={() => setOpen(true)}>Update</Button></td>
                    <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                    >
                        <Box sx={{ ...style, width: 400 }}>
                            <h2>Update User</h2>
                            <form onSubmit={handleSubmit(handleUpdate)}>

                                <input
                                    type="text"
                                    placeholder="please enter a name"
                                    className={styles.inputStyle}
                                    {...register("name", { required: true })}

                                />
                                <br />
                                <input
                                    placeholder="please enter salary"
                                    className={styles.inputStyle}
                                    {...register("salary", { required: true })}

                                />
                                <br />
                                <input
                                    placeholder="please enter age"
                                    className={styles.inputStyle}
                                    {...register("age", { required: true })}

                                />
                                <button>Update</button>
                            </form>
                        </Box>
                    </Modal>
                </tr>)}
            </tbody>
        </table>

    </div>
}