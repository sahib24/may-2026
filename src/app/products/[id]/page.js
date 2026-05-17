import { products } from "@/data/dummyData";
import Image from "next/image";

export default function ProductDetails({ params }) {
  const singleProduct = products.find(
    (product) => product.id === Number(params.id),
  );

  if (!singleProduct) {
    return (
      <div className="text-center mt-20 text-red-500">Product Not Found</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-5">
      <Image
        src={singleProduct.image}
        alt={singleProduct.title}
        width={500}
        height={300}
        className="rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-5">{singleProduct.title}</h1>

      <p className="text-xl mt-2">${singleProduct.price}</p>
    </div>
  );
}
