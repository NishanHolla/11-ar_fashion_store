import React from "react";

const ul_style={
    listStyle:"none",
    paddingInline:"90px"
};

function Footer(){
    return(
        <div style={{paddingTop:"20px", paddingBottom:"30px", display:"inline-flex", textAlign:"left"}}>
            <ul style={ul_style}>
                <li style={{fontWeight:"500"}}>Welcome to AR Boutique</li>  
                <li>Social Responsibitliy</li>
                <li>Our Tech</li>
                <li>Our Factory</li>
            </ul>
            <ul style={ul_style}>
                <li style={{fontWeight:"500"}}>Help</li>  
                <li>Payment Methods</li>
                <li>Shipping & Delivery</li>
                <li>Return Policy</li>
            </ul>
            <ul style={ul_style}>
                <li style={{fontWeight:"500"}}>Support arbotique@gmail.com</li>  
                <li>Social Responsibitliy</li>
            </ul>
        </div>
    );
}

export default Footer;