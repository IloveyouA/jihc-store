import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    setLoading(true);
    setLoading2(true);

    // Use local data instead of fetching from the API
    const productsData = [
      {
        id: 1,
        title: "КЕҢЖЕЙДЕ MDRN IDENTITY",
        price: 26,
        image: "../assets/image1.jpeg",
        description: "кеңжейде. кез келген мезгілге арналған ыңғайлы киім. топтамада базалық және принтті үлгілер бар. qr-дың фирмалық үлгісінде жасалған.",
        category: "КЕҢЖЕЙДЕ",
        rating: { rate: 4.5 },
      },
      {
        id: 2,
        title: "КЕҢЖЕЙДЕ MDRN IDENTITY",
        price: 29.99,
        image: "../assets/image2.jpeg",
        description: "кеңжейде. кез келген мезгілге арналған ыңғайлы киім. топтамада базалық және принтті үлгілер бар. qr-дың фирмалық үлгісінде жасалған.",
        category: "category1",
        rating: { rate: 4.5 },
      },
      {
        id: 3,
        title: "КЕҢЖЕЙДЕ MDRN IDENTITY",
        price: 29.99,
        image: "../assets/image3.jpeg",
        description: "кеңжейде. кез келген мезгілге арналған ыңғайлы киім. топтамада базалық және принтті үлгілер бар. qr-дың фирмалық үлгісінде жасалған.",
        category: "category1",
        rating: { rate: 4.5 },
      },
      {
        id: 4,
        title: "КЕҢЖЕЙДЕ MDRN IDENTITY",
        price: 29.99,
        image: "../assets/image4.jpeg",
        description: "кеңжейде. кез келген мезгілге арналған ыңғайлы киім. топтамада базалық және принтті үлгілер бар. qr-дың фирмалық үлгісінде жасалған.",
        category: "category1",
        rating: { rate: 4.5 },
      },
      {
        id: 5,
        title: "ФУТБОЛКА JAQSY KÜNDER",
        price: 29.99,
        image: "../assets/image5.jpeg",
        description: "күнделікті киюге арналған жеңіл әрі ыңғайлы футболкалар. топтамада базалық және принтті үлгілер бар. qr-дың фирмалық үлгісінде жасалған.",
        category: "category1",
        rating: { rate: 4.5 },
      },
      {
        id: 6,
        title: "ФУТБОЛКА EST.1465",
        price: 29.99,
        image: "../assets/image6.jpeg",
        description: "күнделікті киюге арналған жеңіл әрі ыңғайлы футболкалар. топтамада базалық және принтті үлгілер бар. qr-дың фирмалық үлгісінде жасалған.",
        category: "category1",
        rating: { rate: 4.5 },
      },
      {
        id: 7,
        title: "ФУТБОЛКА EST.1465",
        price: 29.99,
        image: "../assets/image7.jpeg",
        description: "күнделікті киюге арналған жеңіл әрі ыңғайлы футболкалар. топтамада базалық және принтті үлгілер бар. qr-дың фирмалық үлгісінде жасалған.",
        category: "category1",
        rating: { rate: 4.5 },
      },
      {
        id: 8,
        title: "ФУТБОЛКА EST.1465",
        price: 29.99,
        image: "../assets/image8.jpeg",
        description: "күнделікті киюге арналған жеңіл әрі ыңғайлы футболкалар. топтамада базалық және принтті үлгілер бар. qr-дың фирмалық үлгісінде жасалған.",
        category: "category1",
        rating: { rate: 4.5 },
      },
      {
        id: 9,
        title: "Product 1",
        price: 29.99,
        image: "../assets/image10.jpeg",
        description: "кепка. күнделікті лукты толықтыратын ерекше аксессуар.",
        category: "category1",
        rating: { rate: 4.5 },
      },
      {
        id: 10,
        title: "Product 1",
        price: 29.99,
        image: "../assets/image11.jpeg",
        description: "кепка. күнделікті лукты толықтыратын ерекше аксессуар.",
        category: "category1",
        rating: { rate: 4.5 },
      },
      {
        id: 11,
        title: "Product 1",
        price: 29.99,
        image: "../assets/image12.jpeg",
        description: "кепка. күнделікті лукты толықтыратын ерекше аксессуар.",
        category: "category1",
        rating: { rate: 4.5 },
      },
      {
        id: 12,
        title: "Product 1",
        price: 29.99,
        image: "../assets/image13.jpeg",
        description: "кепка. күнделікті лукты толықтыратын ерекше аксессуар.",
        category: "category1",
        rating: { rate: 4.5 },
      },
      {
        id: 13,
        title: "Product 1",
        price: 29.99,
        image: "../assets/image14.jpeg",
        description: "керамикалық кесе. ыстық және салқын сусындар үшін өте қолайлы. ыдыс жуғыш машинада жууға болады.",
        category: "category1",
        rating: { rate: 4.5 },
      },
      {
        id: 14,
        title: "Product 1",
        price: 29.99,
        image: "../assets/image15.jpeg",
        description: "керамикалық кесе. ыстық және салқын сусындар үшін өте қолайлы. ыдыс жуғыш машинада жууға болады.",
        category: "category1",
        rating: { rate: 4.5 },
      },
      {
        id: 15,
        title: "Product 1",
        price: 29.99,
        image: "../assets/image16.jpeg",
        description: "ыңғайлы көлемдегі жаңа бөтелке. жоғары сапалы тот баспайтын болаттан жасалған. сұйықтықтың температурасын ұзақ уақытқа сақтайды. мектепке, серуенге және күнделікті алып жүруге қолайлы.",
        category: "category1",
        rating: { rate: 4.5 },
      },
      {
        id: 16,
        title: "Product 2",
        price: 19.99,
        image: "../assets/image17.jpeg",
        description: "ыңғайлы көлемдегі жаңа бөтелке. жоғары сапалы тот баспайтын болаттан жасалған. сұйықтықтың температурасын ұзақ уақытқа сақтайды. мектепке, серуенге және күнделікті алып жүруге қолайлы.",
        category: "category2",
        rating: { rate: 3.8 },
      },
    ];

    const foundProduct = productsData.find((prod) => prod.id === parseInt(id));
    setProduct(foundProduct);

    const similarProductsList = productsData.filter(
      (prod) => prod.category === foundProduct.category && prod.id !== parseInt(id)
    );
    setSimilarProducts(similarProductsList);

    setLoading(false);
    setLoading2(false);
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead">
                {product.rating && product.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6  my-4">${product.price}</h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {similarProducts.map((item) => {
              return (
                <div key={item.id} className="card mx-4 text-center">
                  <img
                    className="card-img-top p-3"
                    src={item.image}
                    alt="Card"
                    height={300}
                    width={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.substring(0, 15)}...
                    </h5>
                  </div>
                  <div className="card-body">
                    <Link
                      to={"/product/" + item.id}
                      className="btn btn-dark m-1"
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => addProduct(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
          <h2 className="">You may also Like</h2>
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            >
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
