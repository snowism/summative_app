/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import { Link } from "@reach/router";

const useStyles = makeStyles({
  root: {
    width: 375,
    bottom: 0,
    position: "fixed",
    background: "#E3E0D8",
    borderRadius: 5,
    
  },
});



export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      
      <Link to="/">
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon/>} /></Link>
      <BottomNavigationAction label="Profile" value="profile" icon={<PersonIcon />} />
      
      <Link to="/add-product">
      <BottomNavigationAction label="Sell" value="sell" icon={<LoyaltyIcon/> } /></Link>
      
      <BottomNavigationAction label="Cart" value="cart" icon={<ShoppingCartIcon />} />
    </BottomNavigation>
  );
}
