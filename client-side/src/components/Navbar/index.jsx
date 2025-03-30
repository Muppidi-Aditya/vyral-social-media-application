import {
    NavbarBlock,
    NotificationsBlock,
    MessageIconBlock,
    ProfileBlock
} from './styleComponents'

import { GoBellFill } from "react-icons/go";
import { AiTwotoneMessage } from "react-icons/ai";

const Navbar = () => {
    return (
        <NavbarBlock>
            <div style = {{
                display: 'flex',
            }}>
                <NotificationsBlock>
                        <GoBellFill style = {{
                            fontSize: '20px',
                            color: 'black'
                        }} />
                        <p style = {{
                            fontSize: '20px',
                            fontWeight: '500',
                            margin: '0'
                        }}> 3 </p>
                </NotificationsBlock>
                <MessageIconBlock>
                    <AiTwotoneMessage style = {{
                        fontSize: '25px',
                    }} />
                </MessageIconBlock>
            </div>
            <ProfileBlock>
                <img 
                    style = {{
                        height: '100%',
                        width: '100%',
                        borderRadius: '50%',
                    }}
                    src = 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
                />
            </ProfileBlock>
        </NavbarBlock>
    )
}

export default Navbar;