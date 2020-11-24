import React, { useState, useEffect } from "react";
const Datalist = () => {
    const [page, setPage] = useState(1);
    const [commitHistory, setCommitHistory] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setCommitHistory(json))
    }, []);

    return (
        <div class="container">
             <div style={{textAlign:"right"}}><a href="/">Home</a></div>
            <div>Data List</div>
            <div class="row">
                {commitHistory.map((c, index) => (
                    <div key={index} class="col-lg-4 col-md-3 col-sm-6 col-xs-12">
                        <div class="my-list">
                            <img src={c.image} alt="Product" style={{ width: "120px" }} alt="dsadas" />
                            <h3>{c.title.substring(0, 15)}</h3>
                            <span>${c.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Datalist;