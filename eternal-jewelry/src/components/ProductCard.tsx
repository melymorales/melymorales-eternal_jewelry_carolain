import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  available: boolean;
  image: string;
}

export function ProductCard({
  name,
  price,
  available,
  image,
}: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-[#72838B]">
          {name}
        </h3>

        <div className="flex items-center justify-between">
          <p className="text-xl text-[#72838B]">
            ₡{price}
          </p>

          <div
            className={`px-3 py-1 rounded-full text-xs ${
              available
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {available ? "Disponible" : "Agotado"}
          </div>
        </div>

        <button
          className="mt-4 w-full py-3 rounded-full flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:opacity-50"
          style={{
            backgroundColor: "#CAC9CF",
            color: "#72838B",
          }}
          disabled={!available}
        >
          <ShoppingBag size={18} />
          <span>{available ? "Consultar" : "No disponible"}</span>
        </button>
      </div>
    </div>
  );
}
