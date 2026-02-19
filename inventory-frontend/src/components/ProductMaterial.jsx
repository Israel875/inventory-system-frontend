import { useEffect, useState } from "react";

const PRODUCT_URL = "http://localhost:8080/products";
const RAW_URL = "http://localhost:8080/raw-materials";
const ASSOCIATION_URL = "http://localhost:8080/product-materials";

function ProductMaterial() {
  const [products, setProducts] = useState([]);
  const [materials, setMaterials] = useState([]);

  const [productId, setProductId] = useState("");
  const [rawMaterialId, setRawMaterialId] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    loadProducts();
    loadMaterials();
  }, []);

  const loadProducts = async () => {
    const res = await fetch(PRODUCT_URL);
    const data = await res.json();
    setProducts(data);
  };

  const loadMaterials = async () => {
    const res = await fetch(RAW_URL);
    const data = await res.json();
    setMaterials(data);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!productId || !rawMaterialId || !quantity || Number(quantity) <= 0) {
    alert("Fill all fields correctly");
    return;
  }

  const response = await fetch(ASSOCIATION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId: Number(productId),
      rawMaterialId: Number(rawMaterialId),
      requiredQuantity: Number(quantity),
    }),
  });

  if (!response.ok) {
    console.error("Error creating association");
  }

  setProductId("");
  setRawMaterialId("");
  setQuantity("");
};


  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Associate Raw Material to Product</h2>

      <form onSubmit={handleSubmit}>
        <select
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        >
          <option value="">Select Product</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>

        <select
          value={rawMaterialId}
          onChange={(e) => setRawMaterialId(e.target.value)}
        >
          <option value="">Select Raw Material</option>
          {materials.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Quantity needed"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button type="submit">Associate</button>
      </form>
    </div>
  );
}

export default ProductMaterial;
