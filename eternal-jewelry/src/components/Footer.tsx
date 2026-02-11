import { Instagram, MapPin, Phone, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-[#72838B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white mb-4 tracking-wide">
              ETERNAL JEWELRY
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Joyería en acero inoxidable, baños de oro y plata S925.
              Pulseras permanentes. Una experiencia que conecta elegancia.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white mb-4 tracking-wide">
              Contacto
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+123456789"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Phone size={16} />
                <span>+123 456 789</span>
              </a>

              <a
                href="mailto:info@eternaljewelry.com"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Mail size={16} />
                <span>info@eternaljewelry.com</span>
              </a>

              <div className="flex items-start gap-2 text-white/80 text-sm">
                <MapPin size={16} className="mt-1" />
                <span>Calle Principal 123, Ciudad</span>
              </div>
            </div>
          </div>

          {/* Redes */}
          <div>
            <h3 className="text-white mb-4 tracking-wide">
              Redes Sociales
            </h3>
            <a
              href="https://instagram.com/_eternal_jewelry"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
            >
              <Instagram size={16} />
              <span>@_eternal_jewelry</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm flex items-center justify-center gap-1">
            Hecho con{" "}
            <Heart
              size={14}
              className="text-pink-300"
              fill="currentColor"
            />{" "}
            por Eternal Jewelry © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
