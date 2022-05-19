import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button,
    IconButton,
} from '@chakra-ui/react'

const LanguageChanger = ({ title, setLang }) => {
    return (
        <div>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {title}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => setLang('en')}>English</MenuItem>
                    <MenuItem onClick={() => setLang('hi')}>Hindi</MenuItem>
                    <MenuItem onClick={() => setLang('es')}>Spanish</MenuItem>
                    <MenuItem>More langs on the way</MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}

export default LanguageChanger
