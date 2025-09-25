import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const { productID } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${productID}`)
      .then(res => res.json())
      .then(product => {
        setTitle(product.title);
        setPrice(product.price);
      });
  }, [productID]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/products/${productID}`, {
      method: "PUT",
      body: JSON.stringify({ title, price }),
    })
      .then(res => res.json())
      .then(() => navigate("/products"));
  };

  return (
    <>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </>
  );
}

export default EditProduct;
