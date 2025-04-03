import { Component } from "react";
import { FaPlus } from "react-icons/fa";
import { LuGrid2X2 } from "react-icons/lu";
import { BsCameraReels } from "react-icons/bs";

import ProfileNavbar from "../../components/ProfileNavBar";
import FeedsPost from "../../components/FeedPostBlock";
import { FeedsPostBlock } from "../HomePage/styledComponents";
import SelfStoryBlock from "../../components/SelfStoryBlock";

import {
    ProfileMainPage,
    ProfileBlock,
    ProfileBlockName,
    ProfileBlockUserName,
    ProfileDetails,
    ProfileDetailsBlock,
    ProfileSelfStoriesBlock,
    AllPostsStoriesToggleBlock,
    PostStoryBtn,
    UserReelsBlock,
    UserReel
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

const UserPosts = [
    {
        userName: 'Muppidi Aditya',
        profileUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        postDescription: 'Exploring the beauty of nature! 🌿✨ The fresh air, the chirping birds, and the calming greenery—nothing beats a peaceful walk in the woods.',
        postImg: [
            'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        ],
        postedAt: '2025-04-03T10:00:00Z',
    },
    {
        userName: 'Muppidi Aditya',
        profileUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        postDescription: 'Just completed a challenging project! 💻🔥',
        postImg: [
            'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        ],
        postedAt: '2025-04-02T18:30:00Z',
    },
    {
        userName: 'Muppidi Aditya',
        profileUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        postDescription: 'A great cup of coffee and a book 📖☕ Nothing like spending a cozy evening diving into a thrilling novel with the aroma of freshly brewed coffee filling the air.',
        postImg: [
            'https://images.pexels.com/photos/3046645/pexels-photo-3046645.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/3184324/pexels-photo-3184324.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        ],
        postedAt: '2025-04-01T15:20:00Z',
    },
    {
        userName: 'Muppidi Aditya',
        profileUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        postDescription: 'Sunset vibes at the beach! 🌅 The golden hues reflecting off the waves create a magical scene. Every sunset brings a promise of a new dawn.',
        postImg: [
            'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/3601424/pexels-photo-3601424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        ],
        postedAt: '2025-03-31T19:10:00Z',
    },
    {
        userName: 'Muppidi Aditya',
        profileUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        postDescription: 'Coding late night with some great music 🎧💻 When the world sleeps, I code. There’s something oddly satisfying about debugging errors at 2 AM.',
        postImg: [
            'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        ],
        postedAt: '2025-03-30T22:45:00Z',
    },
    {
        userName: 'Muppidi Aditya',
        profileUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        postDescription: 'Road trip to the mountains! 🚗🏔️ Nothing beats the thrill of driving through winding roads, fresh mountain air, and breathtaking views!',
        postImg: [
            'https://completewellbeing.com/wp-content/uploads/2014/04/discover-the-beauty-of-trekking.jpg',
            'https://static.toiimg.com/photo/64648000.cms'
        ],
        postedAt: '2025-03-28T08:15:00Z',
    },
    {
        userName: 'Muppidi Aditya',
        profileUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        postDescription: 'Just attended an amazing tech conference! 🚀 Met some brilliant minds and learned a lot about the future of AI and Web3. Exciting times ahead!',
        postImg: [
            'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        ],
        postedAt: '2025-03-25T14:00:00Z',
    },
    {
        userName: 'Muppidi Aditya',
        profileUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        postDescription: 'Tried a new recipe today! 🍽️🔥 Cooking is an art, and today I experimented with a new pasta dish. Turned out to be a delicious success!',
        postImg: [
            'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        ],
        postedAt: '2025-03-23T17:40:00Z',
    },
    {
        userName: 'Muppidi Aditya',
        profileUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        postDescription: 'The city lights at night are mesmerizing! 🌆 A long drive through the city, windows down, music playing—perfect night vibes.',
        postImg: [
            'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        ],
        postedAt: '2025-03-20T20:30:00Z',
    },
];

const userReels = [
    {
        reelHeadImage: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1920&w=1080', // Vertical nature scene
    },
    {
        reelHeadImage: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1920&w=1080', // City skyline at night
    },
    {
        reelHeadImage: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1920&w=1080', // Beach sunset
    },
    {
        reelHeadImage: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1920&w=1080', // Mountain landscape
    },
    {
        reelHeadImage: 'https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1920&w=1080', // Urban street
    },
    {
        reelHeadImage: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1920&w=1080', // Forest trail
    },
    {
        reelHeadImage: 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1920&w=1080', // Ocean waves
    },
    {
        reelHeadImage: 'https://i.pinimg.com/474x/8b/4a/24/8b4a245cbb299e7ee28e1717387bb5d0.jpg', // Coffee shop vibe
    },
    {
        reelHeadImage: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1920&w=1080', // Tech workspace
    },
    {
        reelHeadImage: 'https://images.pexels.com/photos/414519/pexels-photo-414519.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1920&w=1080', // Aerial city view
    },
];

class ProfilePage extends Component {
    state = {
        selectedOption: 'reels'
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
                    <img 
                        src='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
                        style={{
                            height: '160px',
                            width: '160px',
                            borderRadius: '50%'
                        }} 
                        alt="profile" 
                    />
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
                        <OwnUserImg 
                            src='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
                            alt="user story" 
                        />
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
                {selectedOption === 'post' ? (
                    <FeedsPostBlock style={{
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        paddingBottom: '20px',
                    }}>
                        {UserPosts.map(each => (
                            <FeedsPost key={each.postedAt} postDetails={each} />
                        ))}
                    </FeedsPostBlock>
                ) : (
                    <UserReelsBlock>
                        {
                            userReels.map(each => (
                                <UserReel backgroundImgLink = {each.reelHeadImage} > </UserReel>
                            ))
                        }
                    </UserReelsBlock>
                )}
            </ProfileMainPage>
        )
    }
}

export default ProfilePage;