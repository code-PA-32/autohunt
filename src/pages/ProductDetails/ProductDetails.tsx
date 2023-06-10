import { ProductDetails } from "features/ProductDetails";
import { Container } from "Components/Container";

import "./productDetails.scss";

export const ProductDetailsPage = () => {
  return (
    <Container className="product_details">
      <ProductDetails />
    </Container>
  );
};
