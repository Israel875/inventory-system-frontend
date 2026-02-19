import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";

const API_URL = "http://localhost:8080/products";

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  const handleAdd = async (product) => {
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      await loadProducts();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      await loadProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h1>Product Management</h1>

      <ProductForm onAdd={handleAdd} />

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - Value: ${product.price}
              <button
                onClick={() => handleDelete(product.id)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductPage;
