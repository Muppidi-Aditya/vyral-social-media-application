import styled from "styled-components";

export const ProfileNavBarBlock = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
`

export const ProfileName = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 28px;
`

export const ProfileEditBtn = styled.button`
    height: 50px;
    width: 100px;
    font-family: "Poppins", sans-serif;
    border-style: none;
    font-size: 20px;
    border-radius: 30px;
`

export const ProfileMenuToggleBtn = styled.div`
    height: 100px;
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
`
export const ProfileMenuHrBlock = styled.hr`
    width: 40%;
    border-width: 2px;
    border-style: solid;
    background-color: #000;
    border-radius: 20px;
    margin: 1px 0;
    transition: all 0.3s ease-in-out;

    ${props => props.$isOpen && props.$first && `
        transform: rotate(45deg) translate(10px, 5px);
    `}

    ${props => props.$isOpen && props.$second && `
        transform: rotate(-45deg) translate(5px, -5px);
    `}
`;