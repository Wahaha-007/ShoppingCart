import './cart.css';

const Cart = (props) => {

  const onPlus = (e, ele) => {

    props.accessCart(ele, '+');

  }
  const onMinus = (e, ele) => {

    props.accessCart(ele, '-');

  };

  const displayTable = props.cart.map(ele => {
    return (
      <tr key={ele.number}>
        <td>{ele.name}</td>
        <td>{ele.price}</td>
        <td>{ele.qty}</td>
        <td>
          <button onClick={e => onPlus(e, ele)}>+</button>
          <button onClick={e => onMinus(e, ele)}>-</button>
        </td>
      </tr>
    )
  });



  return (

    <div className="etable">
      <br />
      <table className="tablemain">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th colSpan={2}>Qty</th>
          </tr>
        </thead>
        <tbody>

          {displayTable}

        </tbody>
      </table>
      <div className="summary">
        <h2>Summary $  : {props.getSumPrice(props.cart)}        <button className="checkout"> Check Out</button></h2>
      </div>
    </div>
  );
}

export default Cart; 