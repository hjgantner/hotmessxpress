import React, { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [hasError, setError] = useState(false);


    return (
        <main>
            <section>
                <div className="banner-innerpage">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 mt-5 align-self-center text-center">
                                <h1 className>Hot Mess Xxxpress</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Products;