import styled from 'styled-components'

export const ProfileMainPage = styled.div`
    height: 100dvh;
    width: 100vw;
    padding-top: 10px;
    background-image: linear-gradient(#48A6A7, #F2EFE7, white);
    padding-bottom: 20px;
`

export const ProfileBlock = styled.div`
    height: 320px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ProfileBlockName = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    margin-top: 10px;
    font-size: 30px;
`

export const ProfileBlockUserName = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 550;
    color: #808080;
`

export const ProfileDetails = styled.div`
    height: 120px;
    width: calc(100% - 40px);
    border-style: none;
    border-top: solid;
    border-bottom: solid;
    border-color: #80808047;
    display: flex;
    margin-bottom: 30px;
`

export const ProfileDetailsBlock = styled.div`
    height: 100%;
    width: 33.3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;

    & > h1 {
        font-size: 28px;
        font-weight: 550;
    }

    & > p {
        font-size: 20px;
        color: #808080;
    }
`

export const ProfileSelfStoriesBlock = styled.div`
    width: 100%;
    display: flex;
    height: 150px;
    padding-left: 20px;
    overflow-x: scroll;
    padding-bottom: 10px;
    gap: 10px;
    padding-right: 20px;
`

export const AllPostsStoriesToggleBlock = styled.div`
    height: 80px;
    width: 100%;
    margin-top: 20px;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
`

export const PostStoryBtn = styled.div`
    height: 100%;
    flex-grow: 1;
    border-bottom-style: solid;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 25px;
    color: black;
    border-color: black;

    & > p {
        font-family: "Poppins", sans-serif;
    }
`

export const UserReelsBlock = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
`

export const UserReel = styled.div`
    height: 240px;
    width: calc((100vw - 64px)/3);
    background-image: url(${props => props.backgroundImgLink});
    background-size: cover;
    border-radius: 10px;
`