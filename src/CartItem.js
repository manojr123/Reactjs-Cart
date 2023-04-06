import React from 'react';

class CartItem extends React.Component {
  constructor () {
    super();
    this.state = {
      price: 999,
      title: 'Mobile Phone',
      qty: 1,
      img: ''
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  increaseQuantity = () => {
    console.log('this', this.state);
        // this.state.qty += 1;
    // console.log('this', this.state);
    // setState form 1
    // this.setState({
    //   qty: this.state.qty + 1
    // });

    // setState form 2 - if prevState required use this
    this.setState((prevState) => {
        return {
          qty: prevState.qty + 1
        }
      });
  
  }
  decreaseQuantity = () => {

    const { qty } = this.state;

    if ( qty == 0 ) {
        return;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1
      }
    });
  }

  render () {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <i className="fa-solid fa-circle-plus action-icons"  onClick={this.increaseQuantity}></i>
            <i className="fa-solid fa-circle-minus action-icons" onClick={this.decreaseQuantity}></i>
            <i className="fa-solid fa-trash-can action-icons"></i>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;