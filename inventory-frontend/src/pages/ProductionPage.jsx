import { useEffect, useState } from "react";

function ProductionPage() {
  const [suggestions, setSuggestions] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
  fetch("http://localhost:8080/production/suggestions")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("DATA RECEIVED:", data);

      setSuggestions(data);

      const total = data.reduce(
        (acc, item) => acc + Number(item.totalValue),
        0
      );

      setTotalValue(total);
    })
    .catch((error) => {
      console.error("Error fetching suggestion:", error);
    });
}, []);


  return (
    <div className="container" style={{ padding: "20px" }}>
      <h1>Production Suggestion</h1>

      {suggestions.length === 0 ? (
        <p>No products can be produced with current stock.</p>
      ) : (
        <>
          <ul>
            {suggestions.map((item) => (
              <li key={`${item.productName}-${item.quantity}`}>
                {item.productName} - Quantity: {item.quantity ?? 0} - Total Value: $
                {Number(item.totalValue ?? 0).toFixed(2)}
              </li>
            ))}
          </ul>

          <h3>Total Value: ${totalValue.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

export default ProductionPage;

