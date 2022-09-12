import Product from "./Product";

function ProductList() {
  const products = [
    {
      index: 0,
      name: "BALUBA",
      price: "$3,079.77",
      picture: "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
      asin: "631f8c54a9946ad9c9f6d1a0",
    },
    {
      index: 1,
      name: "MARVANE",
      price: "$3,297.62",
      picture: "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
      asin: "631f8c542aa25f91adb83d5a",
    },
    {
      index: 2,
      name: "PORTICO",
      price: "$3,297.89",
      picture: "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
      asin: "631f8c5489166ad08c5f9311",
    },
    {
      index: 3,
      name: "ISODRIVE",
      price: "$1,903.06",
      picture: "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
      asin: "631f8c54753822e43c4affde",
    },
    {
      index: 4,
      name: "BOLAX",
      price: "$3,644.94",
      picture: "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
      asin: "631f8c543f715e73c391b16c",
    },
    {
      index: 5,
      name: "AQUAMATE",
      price: "$3,199.03",
      picture: "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
      asin: "631f8c54cefa2cfaab81c11a",
    },
  ];

  return (
    <div>
      {products.map((product) => (
        <Product product={product} key={product.index}></Product>
      ))}
    </div>
  );
}

export default ProductList;
