import React from 'react';
import styles from "../styles/Subscribe.module.scss";
import Input, {InputTypes} from "./Input";

const Subscribe = () => {
    return (
        <div>
            <span className={styles.subscribeText}>Подпишись на скидки и акции</span>
            <Input inputType={InputTypes.email}
                   placeholder='Введите ваш E-mail'
                   whiteInput={true}
                   onButtonClick={() => {
                   }}/>
        </div>
    );
};

export default Subscribe;