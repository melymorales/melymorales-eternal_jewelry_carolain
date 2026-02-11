import { client } from "../src/lib/contentful";
import { ProductCard } from "../src/components/ProductCard";
import { Section } from "@/src/components/Section";

export default async function Home() {
  const products = await client.getEntries({
    content_type: "producto",
  });

  const byCategory = (category: string) =>
    products.items.filter(
      (p: any) => p.fields.categoriaProducto === category
    );

  const promociones = products.items.filter(
    (p: any) => p.fields.promocion === true
  );

  return (
    <>
      {/* HERO */}
      <section className="py-20 text-center">
        <h1 className="text-5xl mb-6 text-[#72838B]">
          Eternal Jewelry
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-[#72838B]">
          Joyería en acero inoxidable, baños de oro y plata S925.
          Elegancia que perdura.
        </p>
      </section>

      {/* ANILLOS */}
      <Section
        id="anillos"
        title="Anillos"
        products={byCategory("anillos")}
      />

      {/* ARETES */}
      <Section
        id="aretes"
        title="Aretes"
        products={byCategory("aretes")}
        gray
      />

      {/* COLLARES */}
      <Section
        id="collares"
        title="Collares"
        products={byCategory("collares")}
      />

      {/* PULSERAS */}
      <Section
        id="pulseras"
        title="Pulseras"
        products={byCategory("pulseras")}
        gray
      />

      {/* PROMOCIONES */}
      <Section
        id="promociones"
        title="Promociones"
        products={promociones}
      />

      {/* NOSOTROS */}
      <section id="nosotros" className="py-20 bg-[#F9F9F9] text-center">
        <h2 className="text-3xl mb-6 text-[#72838B]">
          Sobre Nosotros
        </h2>
        <p className="max-w-3xl mx-auto text-[#72838B]">
          Eternal Jewelry es una experiencia que conecta elegancia y
          permanencia. Creamos piezas únicas para acompañarte siempre.
        </p>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="py-20 text-center">
        <h2 className="text-3xl mb-4 text-[#72838B]">
          Ubicación
        </h2>
        <p className="text-[#72838B]">
          Calle Principal 123, Ciudad
        </p>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 bg-[#F9F9F9] text-center">
        <h2 className="text-3xl mb-6 text-[#72838B]">
          Contáctanos
        </h2>
        <p className="text-[#72838B]">
          Instagram: @_eternal_jewelry
        </p>
      </section>
    </>
  );
}
