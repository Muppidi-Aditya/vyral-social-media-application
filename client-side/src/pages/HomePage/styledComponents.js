import styled from 'styled-components'

export const HomeMainPage = styled.div`
    height: 100dvh;
    width: 100vw;
    padding-top: 10px;
    background-image: linear-gradient(#48A6A7, #F2EFE7, white);
    display: flex;
    flex-direction: column;
`

export const HomeMainPageH1 = styled.div`
    font-family: "Poppins", sans-serif;
    font-size: 18px;
`

export const HomeMainBlock = styled.div`
    height: 100%;
    width: 100vw;
    padding: 20px;
    overflow: scroll;
`

export const DiscoverStoriesBlock = styled.div`
    height: 140px;
    width: 100%;
    margin-top: 15px;
    overflow-x: scroll;
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    flex-shrink: 0;
`

export const FeedsPostBlock = styled.div`
    width: 100%;
    padding-top: 20px;
`