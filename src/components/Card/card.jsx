import "./card.css";
import { useMediaQuery } from 'react-responsive'

import Dice from '../../assets/icon-dice.svg';
import dividerMobile from '../../assets/pattern-divider-mobile.svg';
import dividerDesktop from '../../assets/pattern-divider-desktop.svg';
import Spinner from "../Spinner";
import { useEffect, useState } from "react";

const Card = ({ advice, action, isLoading }) => {
  const [ disabled, setDisabled] = useState(true);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

  useEffect(() => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  }, [advice])

  return <div className="wrapper">
    { isLoading ? <Spinner /> : <div className="card center">
        <div className="header"> ADVICE #{advice.id}</div>
        <div className="content"> { advice.advice }</div>
        <div className="divider">
          <img src={isTabletOrMobile ? dividerMobile : dividerDesktop} alt="divider" />
        </div>    
        <button className="next-btn center" onClick={disabled ? null : action} disabled={disabled} >
          <img src={Dice} alt="dice"/> 
        </button>
      </div>}
</div>;
};

export default Card;
