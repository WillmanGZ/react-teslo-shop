import { CustomPagination } from "@/components/custom/CustomPagination";
import CustomJumbotron from "@/shop/components/CustomJumbotron";

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron title="Todos los productos"></CustomJumbotron>
      <CustomPagination totalPages={7}></CustomPagination>
    </>
  );
};
