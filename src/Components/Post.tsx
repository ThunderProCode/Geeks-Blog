import React from 'react';
import { PostWrapper, PostIconContainer } from '../Styles/Divs.styles';
import { PostTitle, PostTime } from '../Styles/Titles.styles';
import { PostImage, PostProfilePic } from '../Styles/Imgs.styles';
import { AiOutlineHeart, AiFillHeart,AiFillEye,AiOutlineComment } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';

interface PostProps {
    imageUrl:string
}

const Post = (props:PostProps) => {
    return (
        <PostWrapper>
            <div style={{width: '90%',marginBottom: '12px',display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <div style={{display: 'flex',marginTop: '4px'}}>
                    <PostProfilePic src='https://www.lego.com/cdn/cs/set/assets/blt71d92ec474835427/5005528.jpg'/>
                    <div style={{marginLeft: '12px'}} >
                        <PostTitle>Hector Acosta</PostTitle>
                        <PostTime>2 min ago</PostTime>
                    </div>
                </div>
                <BsThreeDots style={{color: 'white', fontSize: '22px'}}/>
            </div>

            <PostImage src={props.imageUrl}/>
            <div style={{width: '85%',justifyContent: 'space-between',display: 'flex'}}>
                <PostIconContainer>
                    <AiFillEye/>
                    <p>2k</p>
                </PostIconContainer>
                <PostIconContainer>
                    <AiOutlineHeart/>
                    <p>1k</p>
                </PostIconContainer>
                <PostIconContainer>
                    <AiOutlineComment/>
                    <p>1k</p>
                </PostIconContainer>
            </div>
            <div style={{width: '90%', height: '2px', background: 'white'}}></div>
        </PostWrapper>
    );
};

export default Post;