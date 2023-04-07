import React from 'react';

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <i class="fa-solid fa-cart-shopping" style={styles.cartIcon}></i>
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
}

const styles = {
  cartIcon: {
    height: 30,
    marginRight: 20
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '2px 6px',
    position: 'absolute',
    right: 0,
    top: -9
  }
};


export default Navbar;