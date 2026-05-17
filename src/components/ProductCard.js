import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="block border rounded-xl p-4 shadow-md hover:shadow-lg transition"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={600}
        height={300}
        className="w-full h-52 object-cover rounded-lg"
      />

      <h2 className="text-xl font-bold mt-3">{product.title}</h2>

      <p className="text-gray-600">${product.price}</p>

      <p className="text-sm text-gray-500">{product.category}</p>
    </Link>
  );
}
