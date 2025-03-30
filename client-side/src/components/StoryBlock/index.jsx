import {
    StoryBlockDiv,
    OwnUserImg,
    PlusOuterBox,
    PlusInnerBox,
    FriendUserImg,
    FriendUserImgOuterBlock
} from './styledComponents'

import { FaPlus } from "react-icons/fa";

const StoryBlock = props => {
    const { storyDetails } = props;
    const { profileImg, storyImg, user } = storyDetails;

    return (
        user === 'own' ? (
            <StoryBlockDiv style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <OwnUserImg src={profileImg} />
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
        ) : (
            <StoryBlockDiv style={{
                backgroundImage: `url(${storyImg})`,
                backgroundSize: 'cover',
                position: 'relative',
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    zIndex: 1,
                    borderRadius: '20px'
                }} />

                <FriendUserImgOuterBlock style={{
                    position: 'relative',
                    zIndex: 2,
                }}>
                    <FriendUserImg src={profileImg} />
                </FriendUserImgOuterBlock>
            </StoryBlockDiv>
        )
    );
};

export default StoryBlock;