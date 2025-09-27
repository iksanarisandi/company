import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const navigation = [
  { title: 'Tentang', href: '/tentang' },
  { title: 'Layanan', href: '/layanan' },
  { title: 'Proyek', href: '/proyek' },
  { title: 'Tim', href: '/tim' },
  { title: 'Karier', href: '/karier' },
  { title: 'Kontak', href: '/kontak' },
];

const legal = [
  { title: 'Syarat & Ketentuan', href: '/syarat' },
  { title: 'Kebijakan Privasi', href: '/privasi' },
];

const social = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/pt-mencari-cinta-sejati', icon: Linkedin },
  { name: 'Instagram', href: 'https://instagram.com/ptmencaricintasejati', icon: Instagram },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 dark:bg-muted/80 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MCS</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">PT Mencari Cinta Sejati</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Konsultan strategi, teknologi, dan kreatif yang membantu brand meraih pertumbuhan berkelanjutan melalui riset, inovasi, dan eksekusi.
            </p>
            <div className="flex space-x-4">
              {social.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-lg border border-border bg-background flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <platform.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Hubungi Kami</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Graha Harmoni Lt. 10, Wakanda</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@mencaricintasejati.co.id</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+62 823 4730 3153</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} PT Mencari Cinta Sejati. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}