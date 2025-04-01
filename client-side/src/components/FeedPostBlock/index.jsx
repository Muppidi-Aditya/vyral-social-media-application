import { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {
  PostBlock,
  PostHeader,
  PostHeaderBlock1,
  PostHeaderBlock2,
  PostUserName,
  PostPostedAt,
  PostDescription,
  PostPhotoContainer,
  PostPhoto,
  CarouselIndicators,
  CarouselIndicator
} from './styledComponents';

const FeedsPost = ({ postDetails }) => {
  const { userName, profileUrl, postDescription, postImg, postedAt } = postDetails;
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <PostBlock>
      <PostHeader>
        <PostHeaderBlock1>
          <img 
            src={profileUrl} 
            style={{
              height: '100%',
              width: '100%',
              borderRadius: '50%',
            }} 
            alt="Profile" 
          />
        </PostHeaderBlock1>
        <PostHeaderBlock2>
          <PostUserName>{userName}</PostUserName>
          <PostPostedAt>Posted at {postedAt}</PostPostedAt>
        </PostHeaderBlock2>
      </PostHeader>
      <PostDescription>
        <p>{postDescription}</p>
      </PostDescription>
      <PostPhotoContainer>
        <Slider ref={sliderRef} {...settings}>
          {postImg.map((each, index) => (
            <div key={index}>
              <PostPhoto src={each} alt={`Post ${index}`} />
            </div>
          ))}
        </Slider>
        {postImg.length > 1 && (
          <CarouselIndicators>
            {postImg.map((_, index) => (
              <CarouselIndicator
                key={index}
                active={index === currentIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </CarouselIndicators>
        )}
      </PostPhotoContainer>
    </PostBlock>
  );
};

export default FeedsPost;