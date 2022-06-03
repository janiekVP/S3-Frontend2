import React from "react";
import accountImage from "../images/accountLogo.png";
import '../style/AccountButton.css';

function AccountButton() {
    return(
        <div className='AccountButton'>
            <img className='AccountImage' src={accountImage} alt='accountImage'></img>
        </div>
    )
}

export default AccountButton;