import { useParams } from "react-router-dom";
import { getProduct } from "../api/products";
import { useQuery } from "@tanstack/react-query";

const SoloProduct = () => {
  const { name } = useParams(); // Extract product name from URL

  const { data, isLoading, error } = useQuery({
    queryFn: () => getProduct(name),
    queryKey: ['product', name]
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;

  if (data) {
    const product = data; // Assuming data contains product information
    return (
      <>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        {/* Display other product details */}
      </>
    );
  }

  // If data is not yet available (initial render), return a placeholder:
  return <div>No product found yet.</div>;
};

export default SoloProduct;
