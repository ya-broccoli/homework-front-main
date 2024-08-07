type ButtonPropsType = {
  callBack: () => void
  name: string
};

export const Button = ({ name, callBack }: ButtonPropsType) => {

  const callBackHandler = () => {
    callBack()
  };

  return (
    <button id={'hw04-button'} onClick={callBackHandler}>{name}</button>
  );
};
