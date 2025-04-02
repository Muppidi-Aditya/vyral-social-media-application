import { FaPlus } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { IoVideocam } from "react-icons/io5";

import {
    BottomNavBarBlock,
    BottomNavbarFirstHalf,
    BottomNavbarSecondHalf,
    BottomNavBarMenuItems,
    BottomNavBarMenuItem
} from './styledComponents'

const BottomNavBar = props => {
    const {page} = props;
    return (
        <BottomNavBarBlock>
            <BottomNavbarFirstHalf>
                <BottomNavBarMenuItems>
                    <BottomNavBarMenuItem>
                        <GoHomeFill style = {{
                            fontSize: '28px',
                            color: page === 'home' ? '#48A6A7' : 'inherit'
                        }} />
                    </BottomNavBarMenuItem>
                    <BottomNavBarMenuItem>
                        <GoSearch style = {{
                            fontSize: '28px',
                            color: page === 'search' ? '#48A6A7' : 'inherit'
                        }}/>
                    </BottomNavBarMenuItem>
                    <BottomNavBarMenuItem>
                        <IoVideocam style = {{
                            fontSize: '28px',
                            color: page === 'video' ? '#48A6A7' : 'inherit'
                        }}/>
                    </BottomNavBarMenuItem>
                </BottomNavBarMenuItems>
            </BottomNavbarFirstHalf>
            <BottomNavbarSecondHalf>
                <FaPlus style = {{
                    fontSize: '32px',
                    color: 'white'
                }} />
            </BottomNavbarSecondHalf>
        </BottomNavBarBlock>
    )
}

export default BottomNavBar;