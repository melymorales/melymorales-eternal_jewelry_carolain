import { client } from "../src/lib/contentful";

export default async function Home() {
  const products = await client.getEntries({
    content_type: "producto",
  });

  return (
    <>
      <h2 className="text-3xl mb-8 tracking-wide">
        Colección destacada
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.items.map((product: any) => {
          const image = product.fields.imagenProducto?.[0];
          const imageUrl = image
            ? `https:${image.fields.file.url}`
            : null;

          return (
            <div
              key={product.sys.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4"
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={product.fields.nombreProducto}
                  className="h-64 w-full object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="h-64 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                  Sin imagen
                </div>
              )}

              <h3 className="text-lg mb-1">
                {product.fields.nombreProducto}
              </h3>

              {product.fields.promocion ? (
                <>
                  <p className="text-sm line-through text-gray-400">
                    ${product.fields.precioProducto}
                  </p>
                  <p className="text-lg text-[#D4AF37] font-medium">
                    ${product.fields.precioPromocional}
                  </p>
                </>
              ) : (
                <p className="text-lg">
                  ${product.fields.precioProducto}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

