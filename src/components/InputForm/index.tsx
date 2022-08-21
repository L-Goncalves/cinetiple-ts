import "./index.scss";

export const InputForm = ({ type }) => {
  return (
    <>
      <input className="input" placeholder={type} type={type} />
    </>
  );
};
