import { useEffect, useState } from "react";

function ProductionSuggestion() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/production/suggestions")
      .then((response) => response.json())
      .then((data) => setSuggestions(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Production Suggestion</h2>

      {suggestions.length === 0 ? (
        <p>No products can be produced with current stock.</p>
      ) : (
        <ul>
          {suggestions.map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <strong>{item.productName}</strong>
              {" - "}Quantity: {item.quantity}
              {" - "}Total Value: ${item.totalValue}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductionSuggestion;

