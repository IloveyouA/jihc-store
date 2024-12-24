import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all', 'clothes', 'hats', 'accessories', 'items'

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const localProductsData = [
    { id: 1, title: 'КЕҢЖЕЙДЕ MDRN IDENTITY', price: 26, image: './assets/image1.jpeg', description: 'АҚ', category: 'clothes' },
    { id: 2, title: 'КЕҢЖЕЙДЕ MDRN IDENTITY', price: 26, image: './assets/image2.jpeg', description: 'КӨК', category: 'clothes' },
    { id: 3, title: 'КЕҢЖЕЙДЕ MDRN IDENTITY', price: 26, image: './assets/image3.jpeg', description: 'ҚОЮ КӨК', category: 'clothes' },
    { id: 4, title: 'КЕҢЖЕЙДЕ MDRN IDENTITY', price: 26, image: './assets/image4.jpeg', description: 'АҚ', category: 'clothes' },
    { id: 5, title: 'ФУТБОЛКА JAQSY KÜNDER', price: 19.99, image: './assets/image5.jpeg', description: 'САРҒЫШ', category: 'hats' },
    { id: 6, title: 'ФУТБОЛКА EST.1465', price: 19.99, image: './assets/image6.jpeg', description: 'АҚ', category: 'hats' },
    { id: 7, title: 'ФУТБОЛКА EST.1465', price: 19.99, image: './assets/image7.jpeg', description: 'КҮЛГІН', category: 'hats' },
    { id: 8, title: 'ФУТБОЛКА EST.1465', price: 19.99, image: './assets/image8.jpeg', description: 'ҚОЮ САРЫ', category: 'hats' },
    { id: 9, title: 'КЕПКА QR', price: 19.99, image: './assets/image10.jpeg', description: 'ҚАРА', category: 'accessories' },
    { id: 10, title: 'КЕПКА QR', price: 19.99, image: './assets/image11.jpeg', description: 'КӨК', category: 'accessories' },
    { id: 11, title: 'КЕПКА QR', price: 19.99, image: './assets/image12.jpeg', description: 'ҚОЮ КӨК', category: 'accessories' },
    { id: 12, title: 'КЕПКА QR', price: 19.99, image: './assets/image13.jpeg', description: 'ҚЫЗЫЛ', category: 'accessories' },
    { id: 13, title: 'КЕРАМИКАлық КЕСЕ BJ', price: 19.99, image: './assets/image14.jpeg', description: 'АҚ', category: 'items' },
    { id: 14, title: 'КЕРАМИКАлық КЕСЕ BJ', price: 19.99, image: './assets/image15.jpeg', description: 'КӨК', category: 'items' },
    { id: 15, title: 'ТЕРМО БӨТЕЛКЕ', price: 19.99, image: './assets/image16.jpeg', description: 'АҚ', category: 'items' },
    { id: 16, title: 'ТЕРМО БӨТЕЛКЕ', price: 19.99, image: './assets/image17.jpeg', description: 'ҚЫЗЫЛ', category: 'items' },
  ];

  useEffect(() => {
    setTimeout(() => {
      setProducts(localProductsData);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredProducts =
    filter === 'all' ? products : products.filter((product) => product.category === filter);

  const Loading = () => (
    <div className="container my-5 py-3">
      <div className="row">
        {[...Array(4)].map((_, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <Skeleton height={250} width={200} />
            <Skeleton height={20} width={150} />
            <Skeleton height={50} />
          </div>
        ))}
      </div>
    </div>
  );

  const ShowProducts = () => (
    <div className="container my-5 py-3">
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-dark" onClick={() => addProduct(product)}>
                  Add to Cart
                </button>
                <Link to={`/product/${product.id}`} className="btn btn-outline-dark mx-2">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center my-4">
          <button className="btn btn-outline-dark mx-2" onClick={() => setFilter('all')}>
            All
          </button>
          <button className="btn btn-outline-dark mx-2" onClick={() => setFilter('clothes')}>
            Clothes
          </button>
          <button className="btn btn-outline-dark mx-2" onClick={() => setFilter('hats')}>
            T-shirts
          </button>
          <button className="btn btn-outline-dark mx-2" onClick={() => setFilter('accessories')}>
            Accessories
          </button>
          <button className="btn btn-outline-dark mx-2" onClick={() => setFilter('items')}>
            Items
          </button>
        </div>
        <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </>
  );
};

export default Products;
