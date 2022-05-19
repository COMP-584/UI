import { ViewIcon, ChevronDownIcon } from '@chakra-ui/icons'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    Menu,
    ModalBody,
    ModalCloseButton,
    MenuButton,
    MenuItem,
    MenuList,
    Button,
    useDisclosure,
    IconButton,
    Text,
    Image,
} from '@chakra-ui/react'

import { ChatState } from '../../Context/ChatProvider'

const ProfileModal = ({ user, children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { myLang, setMyLang } = ChatState()

    return (
        <>
            {children ? (
                <span onClick={onOpen}>{children}</span>
            ) : (
                <IconButton
                    d={{ base: 'flex' }}
                    icon={<ViewIcon />}
                    onClick={onOpen}
                />
            )}
            <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent h="410px">
                    <ModalHeader
                        fontSize="40px"
                        fontFamily="Work sans"
                        d="flex"
                        justifyContent="center"
                    >
                        {user.name}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        d="flex"
                        flexDir="column"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Image
                            borderRadius="full"
                            boxSize="150px"
                            src={user.pic}
                            alt={user.name}
                        />
                        <Text
                            fontSize={{ base: '28px', md: '30px' }}
                            fontFamily="Work sans"
                        >
                            Email: {user.email}
                        </Text>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rightIcon={<ChevronDownIcon />}
                            >
                                Change Your Main Language
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={() => setMyLang('hi')}>
                                    Hindi
                                </MenuItem>
                                <MenuItem onClick={() => setMyLang('en')}>
                                    English
                                </MenuItem>
                                <MenuItem onClick={() => setMyLang('es')}>
                                    Spanish
                                </MenuItem>
                                <MenuItem>More langs on the way</MenuItem>
                            </MenuList>
                        </Menu>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ProfileModal
