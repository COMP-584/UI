import ScrollableFeed from 'react-scrollable-feed'
import { ChatState } from '../Context/ChatProvider'

import Message from './Message'

const ScrollableChat = ({ messages }) => {
    const { user } = ChatState()

    return (
        <ScrollableFeed>
            {messages &&
                messages.map((m, i) => (
                    <Message
                        key={i}
                        messages={messages}
                        i={i}
                        m={m}
                        user_id={user._id}
                    />
                ))}
        </ScrollableFeed>
    )
}

export default ScrollableChat
