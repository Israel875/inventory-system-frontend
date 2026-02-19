import { useState } from "react";

function RawMaterialForm({ onAdd }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !quantity) return;

    onAdd({
      name,
      quantity: Number(quantity),
    });

    setName("");
    setQuantity("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Name of the material"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default RawMaterialForm;
