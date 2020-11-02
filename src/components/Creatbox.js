import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Creatbox=(props)=>{
    const {input,setInput, onNewMessage} = props;

    const handleForm = (e) =>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        });
    };
    const submit =(e) =>{
        e.preventDefault();
        console.log("heeelloooo")
        onNewMessage(input);
    } 
    return(
        <form onSubmit={submit} >
            <div>
                <div className='forme-groups col-5 mx-auto m-5 '>
                    <label htmlFor="color"className='col-form-label'>Color</label>
                    <input onChange={handleForm} type="text" name="color"className='form-control'/>
                    <input type="submit" value=' add'className='btn btn-danger'/>
                </div>
            </div>
        </form>
    )
}

export default Creatbox;