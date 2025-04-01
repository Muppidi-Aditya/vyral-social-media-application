import styled from 'styled-components'

export const BottomNavBarBlock = styled.div`
    height: 80px;
    width: calc(100vw - 40px);
    left: 20px;
    bottom: 10px !important;
    background-color: transparent;
    position: absolute;
    bottom: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
`

export const BottomNavbarFirstHalf = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const BottomNavbarSecondHalf = styled.div`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #48A6A7;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const BottomNavBarMenuItems = styled.div`
    height: 80%;
    width: 250px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    justify-content: center;
    border-radius: 25px;
    gap: 10px;
`

export const BottomNavBarMenuItem = styled.div`
    height: 64px;
    width: 64px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`