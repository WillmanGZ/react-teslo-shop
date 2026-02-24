import { CustomPagination } from "@/components/custom/CustomPagination";
import { products } from "@/mocks/products.mock";
import CustomJumbotron from "@/shop/components/CustomJumbotron";
import ProductsGrid from "@/shop/components/ProductsGrid";

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron title="Todos los productos"></CustomJumbotron>
      <ProductsGrid products={products}></ProductsGrid>
      <CustomPagination totalPages={7}></CustomPagination>
    </>
  );
};
