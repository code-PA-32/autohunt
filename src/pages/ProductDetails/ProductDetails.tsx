import { ProductDetails } from "features/ProductDetails";
import "./productDetails.scss";
import { Container } from "Components/Container";
export const ProductDetailsPage = () => {
  return (
    <Container className="product_details">
      <ProductDetails />
    </Container>
  );
};
