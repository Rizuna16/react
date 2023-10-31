import CardProduct from "../component/Fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "sepatu Baru",
    prices: "Rp 1.000.000",
    image: "/public/image/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in.`,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.prices} />
        </CardProduct>
      ))}
    </div>
  );
};
export default ProductsPage;
