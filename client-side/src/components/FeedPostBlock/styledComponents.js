import styled from "styled-components";

export const PostBlock = styled.div`
  width: 100%;
  background-color: white;
  margin-bottom: 15px;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  padding-bottom: 35px;
`;

export const PostHeader = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
`;

export const PostHeaderBlock1 = styled.div`
  height: 100%;
  width: 80px;
  flex-shrink: 0;
  padding: 16px;
`;

export const PostHeaderBlock2 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PostUserName = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 18px;
  margin: 0;
`;

export const PostPostedAt = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: gray;
  margin: 0;
`;

export const PostDescription = styled.div`
  width: 100%;
  font-family: "Poppins", sans-serif;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 10px;
`;

export const PostPhotoContainer = styled.div`
  position: relative;
  height: 240px;
  width: 100%;

  .slick-slider, .slick-list, .slick-track {
    height: 100%;
  }

  .slick-slide > div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #a8a8a826;
  }
`;

export const PostPhoto = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const CarouselIndicators = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 1;
`;

export const CarouselIndicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#0095f6' : '#a8a8a8')};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ active }) => (active ? '#0095f6' : '#c7c7c7')};
  }
`;