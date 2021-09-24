import React from 'react'
import { useMutation } from 'react-query'
import { useForm } from "react-hook-form";
import axios from 'axios';
const Comments = () => {
    const { isLoading, isError, error, mutate } = useMutation( newTodo => fetch( 'https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify( newTodo ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    } )
        .then( ( response ) => response.json() )
        .then( ( json ) => console.log( json ) ) )




    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log( data )
        mutate( data )
    };

    return (
        <div>
            {
                isLoading ? ( <div> adding new user ... </div> ) : (
                    <form onSubmit={ handleSubmit( onSubmit ) }>
                        {/* register your input into the hook by invoking the "register" function */ }
                        <input name="title" { ...register( "title", { required: true } ) } />
                        { errors.title && <span>This field is required</span> }
                        {/* include validation with required or other standard HTML validation rules */ }
                        <input name="body"  { ...register( "body", { required: true } ) } />
                        {/* errors will return when field validation fails  */ }
                        { errors.body && <span>This field is required</span> }
                        <input name="userId" type="number" { ...register( "userId", { required: true } ) } />
                        {/* errors will return when field validation fails  */ }
                        { errors.userId && <span>This field is required</span> }

                        <input type="submit" />
                    </form>
                )

            }
        </div>
    )
}

export default Comments
