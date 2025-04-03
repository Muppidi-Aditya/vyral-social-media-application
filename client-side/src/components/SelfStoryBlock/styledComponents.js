import styled from "styled-components"

export const SelfStory = styled.div`
    height: 140px;
    width: 110px;
    flex-shrink: 0;
    border-radius: 20px;
    background-image: url(${props => props.backgroundImgLink});
    background-size: cover;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`