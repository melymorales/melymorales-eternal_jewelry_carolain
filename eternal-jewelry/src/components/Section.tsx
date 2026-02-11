import { ProductCard } from "./ProductCard";

interface SectionProps {
    id: string;
    title: string;
    products: any[];
    gray?: boolean;
}

export function Section({
    id,
    title,
    products,
    gray,
}: SectionProps) {
    return (
        <section
            id={id}
            className={`py-20 ${gray ? "bg-[#F9F9F9]" : ""}`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl mb-12 text-center text-[#72838B]">
                    {title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product: any) => {
                        const image = product.fields.ImagenProducto?.[0];
                        const imageUrl = image
                            ? `https:${image.fields.file.url}`
                            : "/placeholder.jpg";

                        return (
                            <ProductCard
                                key={product.sys.id}
                                name={product.fields.NombreProducto}
                                price={
                                    product.fields.Promoción
                                        ? `$${product.fields.PrecioPromocional}`
                                        : `$${product.fields.PrecioProducto}`
                                }
                                available={true}
                                image={imageUrl}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
