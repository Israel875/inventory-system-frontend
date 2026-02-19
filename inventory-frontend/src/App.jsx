import { useEffect, useState } from "react";
import ProductionSuggestion from "./components/ProductionSuggestion";
import RawMaterialPage from "./pages/RawMaterialPage";
import ProductPage from "./pages/ProductPage";
import ProductionPage from "./pages/ProductionPage";
import ProductMaterial from "./components/ProductMaterial";




function App() {
  const [materials, setMaterials] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

 
  useEffect(() => {
    fetch("http://localhost:8080/raw-materials")
      .then((response) => response.json())
      .then((data) => setMaterials(data))
      .catch((error) => console.error("Erro ao buscar materiais:", error));
  }, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMaterial = {
      name,
      quantity: Number(quantity),
    };

    try {
      const response = await fetch(
        "http://localhost:8080/raw-materials",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMaterial),
        }
      );

      const data = await response.json();

      
      setMaterials([...materials, data]);

      
      setName("");
      setQuantity("");
    } catch (error) {
      console.error("Error when registering:", error);
    }
  };

  
  const handleDelete = async (id) => {
    try {
      await fetch(
        `http://localhost:8080/raw-materials/${id}`,
        {
          method: "DELETE",
        }
      );

     
      setMaterials(materials.filter((m) => m.id !== id));
    } catch (error) {
      console.error("Erro ao deletar:", error);
    }
  };

  return (
    <>
      <ProductionSuggestion />
      <RawMaterialPage />
      <ProductPage />;
      <ProductionPage />
      <ProductMaterial />
    </>
  );
}

export default App;

