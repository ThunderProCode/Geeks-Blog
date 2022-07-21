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
        passwordReset(email);
        navigate('login');
    };
    return (React.createElement(PageWrapper, null,
        React.createElement(PageTitle, null, "Password reset"),
        React.createElement(Text, null, "Enter your email adress below to reset your password"),
        React.createElement(FormInputWrapper, { style: { width: '90%', marginBottom: '24px' } },
            React.createElement(Label, { htmlFor: "email" },
                React.createElement(MdOutlineAlternateEmail, null)),
            React.createElement(TextInput, { type: "email", name: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter your email" })),
        React.createElement(PrimaryButton, { type: 'button', onClick: handlePasswordReset }, "Send reset link")));
};
export default PasswordReset;
