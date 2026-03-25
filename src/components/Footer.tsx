import { Droplets, MapPin, Clock, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-aqua-900 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="w-6 h-6 text-aqua-300" />
              <span className="text-lg font-bold text-white tracking-tight">
                Ríos de Agua Viva
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Una comunidad apasionada por Jesús, donde puedes crecer en fe y
              encontrar familia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-aqua-300 mb-4">
              Navegación
            </h3>
            <div className="space-y-2">
              {[
                { href: "/quienes-somos", label: "Quiénes Somos" },
                { href: "/servicios", label: "Servicios" },
                { href: "/eventos", label: "Eventos" },
                { href: "/lo-que-creemos", label: "Lo que Creemos" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/50 hover:text-aqua-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-aqua-300 mb-4">
              Encuéntranos
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-white/50">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-aqua-400" />
                <span>
                  Carretera Federal México-Puebla, San Juan Tlautla, San Andrés
                  Cholula, Puebla
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-white/50">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-aqua-400" />
                <span>Domingos 12:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Iglesia Cristiana Ríos de Agua Viva.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
