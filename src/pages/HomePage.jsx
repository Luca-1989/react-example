import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Product 1",
    description: "This is a description for product 1.",
    price: "19.99",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    name: "Product 2",
    description: "This is a description for product 2.",
    price: "29.99",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    name: "Product 3",
    description: "This is a description for product 3.",
    price: "39.99",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    name: "Product 4",
    description: "This is a description for product 4.",
    price: "49.99",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    name: "Product 5",
    description: "This is a description for product 5.",
    price: "59.99",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    name: "Product 6",
    description: "This is a description for product 6.",
    price: "69.99",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    name: "Product 7",
    description: "This is a description for product 7.",
    price: "79.99",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    name: "Product 8",
    description: "This is a description for product 8.",
    price: "89.99",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
