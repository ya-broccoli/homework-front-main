import {ChangeEvent} from 'react';

type InputPropsType = {
	currentText: string
	setCurrentText: (text: string) => void
};

export const Input = ({ currentText, setCurrentText }: InputPropsType) => {

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setCurrentText(e.currentTarget.value);
	};

	return (
	  <input id={'hw04-input'} type="text" value={currentText} onChange={onChangeHandler} />
	);
};
