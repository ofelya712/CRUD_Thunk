import { useForm } from 'react-hook-form'
import styles from './userList.module.css'
import { useDispatch } from 'react-redux'
import { addUser } from './userSlice'
export const AddUser = () => {
    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch()
    const handleAdd = (data) => {
        dispatch(addUser(data))
            .then((data) => {
                reset()
            })
    }

    return <div>
        <h3>AddUser</h3>
        <form onSubmit={handleSubmit(handleAdd)}>

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
            <button>Add</button>
        </form>
    </div>
}