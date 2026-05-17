import { products } from "@/data/dummyData";
import Image from "next/image";

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const singleProduct = products.find((product) => product.id === Number(id));

  return (
    <div className="max-w-4xl mx-auto p-5">
      <Image
        src={singleProduct.image}
        alt={singleProduct.title}
        width={300}
        height={300}
        className="rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-5">{singleProduct.title}</h1>

      <p className="text-xl mt-2">${singleProduct.price}</p>

      <p className="mt-3 text-gray-600">{singleProduct.description}</p>
    </div>
  );
}
