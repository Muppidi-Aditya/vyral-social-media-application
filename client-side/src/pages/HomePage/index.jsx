import { Component } from "react";

import {
    HomeMainPage,
    HomeMainPageH1,
    HomeMainBlock,
    DiscoverStoriesBlock,
    FeedsPostBlock
} from './styledComponents'
import './index.css'

import Navbar from "../../components/Navbar";
import StoryBlock from "../../components/StoryBlock";
import FeedsPost from "../../components/FeedPostBlock";
import BottomNavBar from "../../components/BottomNavbar";

const storiesArr = [
    {
        profileImg: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        storyImg: '',
        user: 'own'
    },
    {
        profileImg: 'https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_640.jpg',
        storyImg: 'https://www.treebo.com/blog/wp-content/uploads/2018/08/Qutub-Minar.jpg',
        user: 'friend'
    },
    {
        profileImg: 'https://img.freepik.com/free-photo/close-up-upset-american-black-person_23-2148749582.jpg',
        storyImg: 'https://www.treebo.com/blog/wp-content/uploads/2018/08/The-Charminar.jpg',
        user: 'friend'
    },
    {
        profileImg: 'https://media.istockphoto.com/id/1282996112/photo/portrait-of-a-young-smiling-man-isolated-on-gray-background.jpg?s=612x612&w=0&k=20&c=m1LVsZuUCBg8blNGpJJd0iHTAK6vLEm_Z9Y-MIkIzmY=',
        storyImg: 'https://i.pinimg.com/736x/91/21/72/9121722d8f1538ea647c1430227fddc8.jpg',
        user: 'friend'
    },
    {
        profileImg: 'https://plus.unsplash.com/premium_photo-1677231559666-53bed9be43ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        storyImg: 'https://images.stockcake.com/public/9/5/c/95ce7317-6435-468f-b78b-acb255d5bb1a_large/india-gate-landmark-stockcake.jpg',
        user: 'friend'
    }
]

const userFeed = [
    {
        userName: 'John Doe',
        profileUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        postDescription: 'Amazing sunset view! 🌅', // Short description
        postImg: ['https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'],
        postedAt: '2025-03-30',
    },
    {
        userName: 'Alex Johnson',
        profileUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
        postDescription: 'Just returned from an incredible hiking trip to the mountains! The fresh air, breathtaking landscapes, and the challenge of reaching the summit were truly unforgettable. Every step was worth it, and the view from the top made all the effort feel so small in comparison. I highly recommend everyone to take a break from the daily hustle and experience the wonders of nature. 🌲🏔️ #HikingAdventure #NatureLover', // Long description
        postImg: [
            'https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            'https://images.pexels.com/photos/439302/pexels-photo-439302.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        ],
        postedAt: '2025-03-28',
    },
    {
        userName: 'Jane Smith',
        profileUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
        postDescription: 'Meet my new adorable puppy! Just got him home today and he is the cutest little bundle of joy. 🐶❤️', // Medium description
        postImg: ['https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'],
        postedAt: '2025-03-29',
    }
];

class HomePage extends Component {
    render () {
        return (
            <HomeMainPage>
                <Navbar />
                <BottomNavBar page='home' />
                <HomeMainBlock>
                    <HomeMainPageH1> Discover </HomeMainPageH1>
                    <DiscoverStoriesBlock className="discover-stories-block">
                        {
                            storiesArr.map(each => (
                                <StoryBlock storyDetails = {each} key = {each.profileImg} />
                            ))
                        }
                    </DiscoverStoriesBlock>
                    <HomeMainPageH1> Recently Post </HomeMainPageH1>
                    <FeedsPostBlock>
                        {
                            userFeed.map(each => (
                                <FeedsPost postDetails = {each} key = {each.userName} />
                            ))
                        }
                    </FeedsPostBlock>
                </HomeMainBlock>
            </HomeMainPage>
        )
    }
}

export default HomePage;