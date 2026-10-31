import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const Products = () => {
    const [products, setProducts] = useState([])


    const getProducts = () => {
        try {
            fetch("https://dummyjson.com/products").then((res) => res.json()).then((data) => {
                console.log(data.products)
                setProducts(data.products);
            }).catch((errRes) => {
                console.log(errRes);
            })
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            <Row className="m-2 p-3">
                {
                    products.map((item) => (
                        <Col className="m-4">
                            <div className="card p-4">
                                <div className="card-header">
                                    <img src={item.thumbnail} />
                                </div>
                                <h1>{item.title}</h1>
                                <h3>Brand {item.brand}</h3>
                                <h3>Price {item.price}</h3>
                                <h3>Ratings {item.ratings}</h3>
                                <div className="stack" style={item.availabilityStatus == "In Stock" ? { backgroundColor: "#00ff00" } : { backgroundColor: "#ff0000" }} > {item.availabilityStatus}</div>
                                <p>{item.description}</p>

                                <div className="card-footer d-flex justify-content-center">
                                    <button className="btn btn-success">Buy</button>
                                    <button className="btn btn-warning mx-4">Cart</button>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Products
