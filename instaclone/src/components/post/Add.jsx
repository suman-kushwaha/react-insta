import React from 'react';
import { Link } from 'react-router-dom';
import './Add.css'
import { useNavigate } from "react-router-dom";

function Add(props) {
    const navigate = useNavigate();
    async function FormHandler(e) {
        e.preventDefault();
        console.log(e.target);
        let formData = new FormData(e.target);
        let dataFromForm = Object.fromEntries(formData.entries());
        console.log(dataFromForm);

        await fetch("https://instaclone-app-9rno.onrender.com/posts", {
            method: "post",
            body: formData,
            redirect: "follow"
        })
            .then(res => { return res.text(); })
            .then(text => { console.log(text); })
            .catch(err => { console.log(err); })
        navigate("/post");
    }
    return (
        <div>
            <section className='header'>
                <div className='instalogo'><img className='instaLogo' src={require('./../../Images/circle.jpg')} alt='instaclone logo' /><p>Instaclone</p></div>
                <Link to='/post/add'><img className='camara' src={require('./../../Images/camera.jpg')} alt='camera Icon' /></Link>
            </section>

            <form onSubmit={FormHandler} id="container">
                <input type={"file"} name="PostImage" id="input_file" accept=".jpg, .jpeg, .png, .pdf" required={true}></input>
                <div id='fields'> <input type={"text"} name="name" id="input_author" placeholder="Author" required={true}></input>
                    <input type={"text"} name="location" id="input_location" placeholder="Location" required={true}></input></div>
                <input type={"text"} name="description" id="input_description" placeholder="Descirption" required={true}></input>
                <div className='button'><button id="button">Post</button></div>
            </form>
        </div>

    )

}

export default Add;
