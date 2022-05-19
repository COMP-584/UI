import { Select } from '@chakra-ui/react'

import codes from 'iso-language-codes'

const LanguageChanger = ({ title, setLang }) => {
    return (
        <div>
            <Select
                placeholder={title}
                onChange={(e) => setLang(e.target.value)}
            >
                {codes.map((code, i) => (
                    <option key={i} value={code.iso639_1}>
                        {code.name}
                    </option>
                ))}
            </Select>
        </div>
    )
}

export default LanguageChanger
