import { useState } from "react";

function ProductForm({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price) {
      alert("All fields are required");
      return;
    }

    onAdd({
      name,
      price: Number(price),
    });

    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Product price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default ProductForm;

