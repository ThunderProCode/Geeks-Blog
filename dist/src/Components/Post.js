import React from 'react';
import { PostWrapper, PostIconContainer } from '../Styles/Divs.styles';
import { PostTitle, PostTime } from '../Styles/Titles.styles';
import { PostImage, PostProfilePic } from '../Styles/Imgs.styles';
import { AiOutlineHeart, AiFillEye, AiOutlineComment } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
const Post = (props) => {
    return (React.createElement(PostWrapper, null,
        React.createElement("div", { style: { width: '90%', marginBottom: '12px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' } },
            React.createElement("div", { style: { display: 'flex', marginTop: '4px' } },
                React.createElement(PostProfilePic, { src: 'https://www.lego.com/cdn/cs/set/assets/blt71d92ec474835427/5005528.jpg' }),
                React.createElement("div", { style: { marginLeft: '12px' } },
                    React.createElement(PostTitle, null, "Hector Acosta"),
                    React.createElement(PostTime, null, "2 min ago"))),
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
