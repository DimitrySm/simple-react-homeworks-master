import React, { ChangeEvent } from "react";
import s from "./Greeting.module.css";
import searchButton from "./search_button.jpg";

type GreetingPropsType = {
  name: string; // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void; // need to fix any
  addUser: () => void; // need to fix any
  error: string | null; // need to fix any
  totalUsers: number; // need to fix any
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
  // const inputClass = error ? s.error : ""; // need to fix with (?:)
  const inputClass = `${s.search__style} ${error ? s.error : ""}`;

  return (
    <div className={s.container}>
      <input value={name} onChange={setNameCallback} className={inputClass} />
      <button onClick={addUser} className={s.button__style}>
        <img className={s.img__style} src={searchButton} alt="0" />
      </button>
      <span className={s.totalUsers}>{totalUsers}</span>
    </div>
  );
};

export default Greeting;
