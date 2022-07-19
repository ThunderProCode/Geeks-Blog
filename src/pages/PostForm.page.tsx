import React, { useEffect, useState } from 'react';

// Styles
import Header from '../Components/Header';
import { Form, TextInput,Label,PrimaryButton } from '../Styles/Forms.styles';
import { FormInputWrapper, PageWrapper } from '../Styles/Divs.styles';
import { BsCamera } from 'react-icons/bs';
import { PageTitle } from '../Styles/Titles.styles';

// Router
import { useNavigate } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';
import { selectUser } from '../services/auth.slice';
import { createPost } from '../services/posts.service';

const PostForm = () => {

    const user = useSelector(selectUser);
    const [image, setImage] = useState(null);
    const [postTitle, setPostTitle] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        onPost();
    }

    const onFileChange = (e) => {
        setImage(e.target.files[0]);
    }

    const onTitleChange = (e:React.FormEvent<HTMLInputElement>) => {
        setPostTitle(e.target.value);
    }

    const onPost = () => {
        if(image){
            createPost(user.uid,postTitle,image);
        }
    }

    useEffect(() => {
        if(!user)navigate('/login');
    },[user])

    return (
        <PageWrapper>
            <Header/>
            <PageTitle>New post</PageTitle>
            <Form onSubmit={handleSubmit}>
                <FormInputWrapper>
                    <Label style={{ fontSize: '14px', fontWeight: 'bold' }}>Title: </Label>
                    <TextInput 
                        type="text" 
                        style={{ marginLeft: '12px' }}
                        onChange={onTitleChange}
                    />
                </FormInputWrapper>
                <div  style={{ marginTop: '24px',marginBottom: '24px',textAlign : 'center', padding: '3%', border: '2px solid white', borderRadius: '4px' }}>
                    <label htmlFor="inputFileTag" style={{color: 'white', cursor: 'pointer'}}>
                        Select Image
                        <br />
                        <BsCamera style={{ color: 'white' }}/>
                        <input 
                            id='inputFileTag'
                            type="file" 
                            style={{ display: 'none' }} 
                            onChange={onFileChange}
                        />
                    </label>
                </div>
                <PrimaryButton type='submit'>Post</PrimaryButton>
            </Form>
        </PageWrapper>
    );
};

export default PostForm;