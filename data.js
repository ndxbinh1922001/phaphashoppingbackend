import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Administrator",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Binh",
      email: "binh@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      //    _id:'1',
      name: "Áo sơ mi Nike",
      slug: "ao-so-mi-nike",
      category: "Áo",
      image: "/images/p1.jpg", // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "Áo chất lượng cao",
    },
    {
      //_id:'2',
      name: "Áo sơ mi Adidas",
      slug: "ao-so-mi-adidas",
      category: "Áo",
      image: "/images/p2.jpg",
      price: 250,
      countInStock: 0,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "Sản phẩm chất lượng cao",
    },
    {
      //_id:'3',
      name: "Quần tây Nike",
      slug: "quan-tay-nike",
      category: "Quần",
      image: "/images/p3.jpg",
      price: 25,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "Sản phẩm chất lượng cao",
    },
    {
      //_id:'4',
      name: "Quần tây Adidas",
      slug: "quan-tay-adidas",
      category: "Quần",
      image: "/images/p4.jpg",
      price: 65,
      countInStock: 5,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "Sản phẩm chất lượng cao",
    },
  ],
};
export default data;
