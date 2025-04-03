import {
    SelfStory
} from './styledComponents'

const SelfStoryBlock = props => {
    const {backgroundImgLink } = props;
    return (
        <SelfStory 
            backgroundImgLink = {backgroundImgLink}
        ></SelfStory>
    )
}

export default SelfStoryBlock;