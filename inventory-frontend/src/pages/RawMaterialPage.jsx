import { useEffect, useState } from "react";
import RawMaterialForm from "../components/RawMaterialForm";

const API_URL = "http://localhost:8080/raw-materials";

function RawMaterialPage() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    loadMaterials();
  }, []);

  const loadMaterials = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMaterials(data);
    } catch (error) {
      console.error("Error loading materials:", error);
    }
  };

  const handleAdd = async (material) => {
  console.log("ENVIANDO:", material);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(material),
    });

    console.log("STATUS:", response.status);

    await loadMaterials();
  } catch (error) {
    console.error("Error adding material:", error);
  }
};


  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      await loadMaterials();
    } catch (error) {
      console.error("Error deleting material:", error);
    }
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h1>Raw Material Stock</h1>

      <RawMaterialForm onAdd={handleAdd} />

      {materials.length === 0 ? (
        <p>No materials found.</p>
      ) : (
        <ul>
          {materials.map((material) => (
            <li key={material.id}>
              {material.name} - Quantity: {material.quantity}
              <button className="delete-btn"
                onClick={() => handleDelete(material.id)}
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

export default RawMaterialPage;
