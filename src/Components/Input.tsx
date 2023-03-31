import React, {useState} from 'react';
import styles from '../../styles/Input.module.scss';
import searchIcon from '../../img/search-icon.svg';
import arrowRightIcon from '../../img/arrow-right.svg';

export enum InputTypes {
    search = 'search',
    email = 'email'
}

interface SearchInputProps {
    inputType: InputTypes;
    placeholder: string;
    whiteInput?: boolean;
    onButtonClick: (inputValue: string) => void;
}

const Input: React.FC<SearchInputProps> = ({
                                               inputType,
                                               placeholder,
                                               whiteInput = false,
                                               onButtonClick
}) => {

    const [inputValue, setInputValue] = useState<string>('')

    return (
        <label className={whiteInput ? styles.inputWhite : styles.input}>
            <input type="text"
                   placeholder={placeholder}
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}/>
                <span onClick={() => onButtonClick(inputValue.toLowerCase())} className={styles.btn}>
                    <img src={inputType === 'search' ? searchIcon : arrowRightIcon} alt="поиск"/>
                </span>
        </label>
    );
};

export default Input;