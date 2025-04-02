import { Component } from "react";

import { FaPlus } from "react-icons/fa";
import { LuGrid2X2 } from "react-icons/lu";
import { BsCameraReels } from "react-icons/bs";

import ProfileNavbar from "../../components/ProfileNavBar";

import {
    ProfileMainPage,
    ProfileBlock,
    ProfileBlockName,
    ProfileBlockUserName,
    ProfileDetails,
    ProfileDetailsBlock,
    ProfileSelfStoriesBlock,
    SelfStoryBlock,
    AllPostsStoriesToggleBlock,
    PostStoryBtn
} from './styledComponents'

import { 
    StoryBlockDiv,
    OwnUserImg,
    PlusOuterBox,
    PlusInnerBox
} from "../../components/StoryBlock/styledComponents";

import './index.css'

const storiesArr = [
    'https://static.toiimg.com/photo/92102721/92102721.jpg',
    'https://i.pinimg.com/736x/1b/f6/bd/1bf6bd62eadcc00e60b2e9eac35dc018.jpg',
    'https://media.cntraveller.com/photos/611bece2ef6cd547152d6c32/master/w_320%2Cc_limit/emerald-lake-canada-gettyimages-1135389699.jpg',
    'https://i.pinimg.com/736x/48/50/b5/4850b55e009df38aaf5d42eb9f62108f.jpg',
    'https://thumbs.dreamstime.com/b/vue-verticale-des-toits-et-du-beau-village-raguse-en-sicile-35551554.jpg',
];


class ProfilePage extends Component {
    state = {
        selectedOption: 'post'
    }

    togglePostStoryBtn = (selectedTab) => {
        this.setState({
            selectedOption: selectedTab,
        })
    }

    render() {
        const { selectedOption } = this.state;
        return (
            <ProfileMainPage>
                <ProfileNavbar />
                <ProfileBlock>
                    <img src='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' style={{
                        height: '160px',
                        width: '160px',
                        borderRadius: '50%'
                    }} alt="profile" />
                    <ProfileBlockName>
                        Muppidi Aditya
                    </ProfileBlockName>
                    <ProfileBlockUserName>
                        @aditya_d_47
                    </ProfileBlockUserName>
                </ProfileBlock>
                <ProfileDetails>
                    <ProfileDetailsBlock>
                        <h1> 17 </h1>
                        <p> Post </p>
                    </ProfileDetailsBlock>
                    <ProfileDetailsBlock>
                        <h1> 25M </h1>
                        <p> Follower </p>
                    </ProfileDetailsBlock>
                    <ProfileDetailsBlock>
                        <h1> 10 </h1>
                        <p> Following </p>
                    </ProfileDetailsBlock>
                </ProfileDetails>
                <ProfileSelfStoriesBlock className="self-stories-block">
                    <StoryBlockDiv style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                    }}>
                        <OwnUserImg src='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="user story" />
                        <PlusOuterBox>
                            <PlusInnerBox>
                                <FaPlus style={{
                                    color: 'white'
                                }} />
                            </PlusInnerBox>
                        </PlusOuterBox>
                        <p style={{
                            color: 'gray',
                            fontSize: '14px'
                        }}> Your Story </p>
                    </StoryBlockDiv>
                    {
                        storiesArr.map((each, index) => (
                            <SelfStoryBlock key={index} backgroundImgLink={each} />
                        ))
                    }
                </ProfileSelfStoriesBlock>
                <AllPostsStoriesToggleBlock>
                    <PostStoryBtn
                        onClick={() => this.togglePostStoryBtn('post')}
                        style={{
                            color: selectedOption !== 'post' ? '#808080' : 'inherit',
                            borderColor: selectedOption !== 'post' ? '#808080' : 'inherit'
                        }}>
                        <LuGrid2X2 />
                        <p> Posts </p>
                    </PostStoryBtn>
                    <PostStoryBtn
                        onClick={() => this.togglePostStoryBtn('reels')}
                        style={{
                            color: selectedOption !== 'reels' ? '#808080' : 'inherit',
                            borderColor: selectedOption !== 'reels' ? '#808080' : 'inherit'
                        }}>
                        <BsCameraReels />
                        <p> Reels </p>
                    </PostStoryBtn>
                </AllPostsStoriesToggleBlock>
            </ProfileMainPage>
        )
    }
}

export default ProfilePage;