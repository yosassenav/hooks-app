import {useForm} from "../hooks/useForm";
export const TodoAdd = () => {
    
    const [description, onInputChage, resetForm] = useForm({
        description: '',
    });

    return (
        <form>
            <input 
            type='text'
            placeholder="Que hay que hacer?"
            className="form-control mb-2"
            name="description"
            value={description}
            onChange={onInputChage}
            />
            <button
            type="submit"
            className="btn btn-outline-primary mt-2"
            >
                Agregar
            </button>
        </form>
    )
}