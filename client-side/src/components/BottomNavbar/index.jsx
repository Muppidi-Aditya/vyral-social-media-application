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

const BottomNavBar = () => {
    return (
        <BottomNavBarBlock>
            <BottomNavbarFirstHalf>
                <BottomNavBarMenuItems>
                    <BottomNavBarMenuItem>
                        <GoHomeFill style = {{
                            fontSize: '28px',
                            color: '#48A6A7'
                        }} />
                    </BottomNavBarMenuItem>
                    <BottomNavBarMenuItem>
                        <GoSearch style = {{
                            fontSize: '28px'
                        }}/>
                    </BottomNavBarMenuItem>
                    <BottomNavBarMenuItem>
                        <IoVideocam style = {{
                            fontSize: '28px'
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