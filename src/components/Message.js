import { useState } from 'react'
import { Avatar } from '@chakra-ui/avatar'
import { Tooltip } from '@chakra-ui/tooltip'

import {
    isLastMessage,
    isSameSender,
    isSameSenderMargin,
    isSameUser,
} from '../config/ChatLogics'

const Message = ({ messages, i, m, user_id, lang, myLang }) => {
    const [translation, setTranslation] = useState('')

    const getTranslation = async (text) => {
        const res1 = await fetch('https://libretranslate.de/detect', {
            method: 'POST',
            body: JSON.stringify({
                q: text,
            }),
            headers: { 'Content-Type': 'application/json' },
        })

        let langCode = await res1.json()
        console.log('---> Lang code', langCode)
        console.log('From', langCode[0].language, 'To', lang)

        const res = await fetch('https://libretranslate.de/translate', {
            method: 'POST',
            body: JSON.stringify({
                q: text,
                source: langCode[0].language,
                target: lang,
                format: 'text',
            }),
            headers: { 'Content-Type': 'application/json' },
        })

        let data = await res.json()

        setTranslation(data.translatedText)
        console.log(data.translatedText)
    }

    return (
        <div style={{ display: 'flex' }} key={m._id}>
            {(isSameSender(messages, m, i, user_id) ||
                isLastMessage(messages, i, user_id)) && (
                <Tooltip
                    label={m.sender.name}
                    placement="bottom-start"
                    hasArrow
                >
                    <Avatar
                        mt="7px"
                        mr={1}
                        size="sm"
                        cursor="pointer"
                        name={m.sender.name}
                        src={m.sender.pic}
                    />
                </Tooltip>
            )}

            <span
                style={{
                    backgroundColor: `${
                        m.sender._id === user_id ? '#BEE3F8' : '#B9F5D0'
                    }`,
                    marginLeft: isSameSenderMargin(messages, m, i, user_id),
                    marginTop: isSameUser(messages, m, i, user_id) ? 3 : 10,
                    borderRadius: '20px',
                    padding: '5px 15px',
                    maxWidth: '75%',
                }}
            >
                {m.sender._id !== user_id && (
                    <>
                        <span
                            style={{
                                textDecoration: 'underline',
                            }}
                        >
                            {m.sender.name}
                            <button onClick={() => getTranslation(m.content)}>
                                Translate
                            </button>
                        </span>
                        <br />
                    </>
                )}
                {m.content}

                {translation && (
                    <>
                        <br />
                        <span
                            style={{
                                color: 'grey',
                            }}
                        >
                            {translation}
                        </span>
                    </>
                )}
            </span>
        </div>
    )
}

export default Message
