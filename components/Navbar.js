import Link from "next/link";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <h1>BuyNow</h1>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/seller/login">Seller Login</Link>
      <Link href="/seller/register">Seller Register</Link>
      <Link href="/products">Products</Link>
      <Link href="/seller/addproducts">Add Products</Link>
    </div>
  );
}
