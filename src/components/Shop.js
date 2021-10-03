import promotionimg from '../Assets/Place Holder 4.png';
import productimg from '../Assets/Place Holder 5.png';
import '../styles/shop.scss';

function Shop() {
  const arr = [productimg, productimg, productimg];

  return (
    <section className="shop" id="shop">
      <div className="promotion">
        <div className="wrapper">
          <div className="text-container">
            <h2>Program Promotion</h2>
            <p>
              {'text '.repeat(35)}
            </p>
          </div>
          <div className="img-container">
            <img src={promotionimg} alt="program promotion img" />
          </div>
        </div>
      </div>
      <div className="products">
        <div className="wrapper">
          <h2>Featured Products</h2>
          <ul>
            {
              arr.map((item, index) => {
                return (
                  <li key={index}>
                    <img src={item} alt="product imgs"></img>
                    <h3>Product Title</h3>
                    <p>{'text '.repeat(8)}</p>
                    <p>$0.00</p>
                    <button>shop now</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Shop;