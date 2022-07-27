import React, { useEffect, useState } from 'react';
import { PostWrapper, PostIconContainer } from '../Styles/Divs.styles';
import { PostTitle, PostTime } from '../Styles/Titles.styles';
import { PostImage, PostProfilePic } from '../Styles/Imgs.styles';
import { AiOutlineHeart, AiFillEye, AiOutlineComment } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { getUserByUid } from '../hooks/userUsers';
const Post = (props) => {
    const [profilePicture, setProfilePicture] = useState("");
    const [displayName, setDisplayName] = useState("");
    useEffect(() => {
        getUserByUid(props.uid)
            .then((postCreator) => {
            setDisplayName(postCreator.displayName);
            setProfilePicture(postCreator.profilePic);
            console.log(`Profile picture${profilePicture}`);
        })
            .catch((err) => {
            console.log(err);
        });
    }, [props]);
    return (React.createElement(PostWrapper, null,
        React.createElement("div", { style: { width: '90%', marginBottom: '12px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' } },
            React.createElement("div", { style: { display: 'flex', marginTop: '4px' } },
                React.createElement(PostProfilePic, { src: profilePicture }),
                React.createElement("div", { style: { marginLeft: '12px' } },
                    React.createElement(PostTitle, null, displayName),
                    React.createElement(PostTime, null, props.postTime))),
            React.createElement(BsThreeDots, { style: { color: 'white', fontSize: '22px' } })),
        React.createElement(PostImage, { src: props.imageUrl }),
        React.createElement("div", { style: { width: '85%', justifyContent: 'space-between', display: 'flex' } },
            React.createElement(PostIconContainer, null,
                React.createElement(AiFillEye, null),
                React.createElement("p", null, "2k")),
            React.createElement(PostIconContainer, null,
                React.createElement(AiOutlineHeart, null),
                React.createElement("p", null, "1k")),
            React.createElement(PostIconContainer, null,
                React.createElement(AiOutlineComment, null),
                React.createElement("p", null, "1k"))),
        React.createElement("div", { style: { width: '90%', height: '2px', background: 'white' } })));
};
export default Post;
