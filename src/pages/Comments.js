import React from 'react'
import { useMutation } from 'react-query'
import { useForm } from "react-hook-form";
const Comments = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log( data );

    const { isLoading, isError, error, mutate } = useMutation( newTodo => axios.post( '/todos', newTodo ) )
    return (
        <div>

            <form onSubmit={ handleSubmit( onSubmit ) }>
                {/* register your input into the hook by invoking the "register" function */ }
                <input name="title" { ...register( "title", { required: true } ) } />
                { errors.title && <span>This field is required</span> }
                {/* include validation with required or other standard HTML validation rules */ }
                <input name="body"  { ...register( "body", { required: true } ) } />
                {/* errors will return when field validation fails  */ }
                { errors.body && <span>This field is required</span> }

                <input type="submit" />
            </form>
        </div>
    )
}

export default Comments
