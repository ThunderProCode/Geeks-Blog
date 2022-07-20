import React, { useState } from 'react';
import { FormInputWrapper, PageWrapper } from '../Styles/Divs.styles';
import { Label, PrimaryButton, TextInput } from '../Styles/Forms.styles';
import { PageTitle, Text } from '../Styles/Titles.styles';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { sendPasswordResetEmail, auth } from '../services/auth.service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const PasswordReset = () => {

    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const passwordReset = () => {
        sendPasswordResetEmail(auth,email)
        .then(() => {
            toast.success('Check your email for instructions');
            navigate('/login');
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <PageWrapper>
            <PageTitle>Password reset</PageTitle>
            <Text>Enter your email adress below to reset your password</Text>
            <FormInputWrapper style={{ width: '90%', marginBottom: '24px' }}>
                        <Label htmlFor="email" >
                            <MdOutlineAlternateEmail/>
                        </Label>
                        <TextInput
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail( e.target.value )}
                            placeholder="Enter your email"
                        />
                    </FormInputWrapper>
            <PrimaryButton type='button' onClick={passwordReset}>Send reset link</PrimaryButton>
        </PageWrapper>
    );
};

export default PasswordReset;