import { useState } from 'react';
import {
    ProfileNavBarBlock,
    ProfileName,
    ProfileEditBtn,
    ProfileMenuToggleBtn,
    ProfileMenuHrBlock
} from './styledComponents'

const ProfileNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <ProfileNavBarBlock>
            <ProfileName> Aditya </ProfileName>
            <div style = {{
                height: '100%',
                display: 'flex',
                alignItems: 'center'
            }}>
                <ProfileMenuToggleBtn onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <ProfileMenuHrBlock $isOpen={isMenuOpen} $first />
                    <ProfileMenuHrBlock $isOpen={isMenuOpen} $second />
                </ProfileMenuToggleBtn>
            </div>
        </ProfileNavBarBlock>
    )
}

export default ProfileNavbar;