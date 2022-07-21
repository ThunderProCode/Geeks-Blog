import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import { FormInputWrapper, PageWrapper } from '../Styles/Divs.styles';
import { Label, PrimaryButton, TextInput } from '../Styles/Forms.styles';
import { PageTitle, Text } from '../Styles/Titles.styles';

// Icons
import { MdOutlineAlternateEmail } from 'react-icons/md';

// Services
import { passwordReset } from '../services/auth.service';

const PasswordReset = () => {

    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handlePasswordReset = () => {
        passwordReset(email)
        navigate('login');
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
            <PrimaryButton type='button' onClick={handlePasswordReset}>Send reset link</PrimaryButton>
        </PageWrapper>
    );
};

export default PasswordReset;