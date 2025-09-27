import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { cn } from '@/lib/utils';

const navigation = [
  { title: 'Home', href: '/' },
  { title: 'Tentang', href: '/tentang' },
  { title: 'Layanan', href: '/layanan' },
  { title: 'Proyek', href: '/proyek' },
  { title: 'Klien & Testimoni', href: '/klien' },
  { title: 'Tim', href: '/tim' },
  { title: 'Karier', href: '/karier' },
  { title: 'Kontak', href: '/kontak' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/6282347303153?text=Halo%20PT%20Mencari%20Cinta%20Sejati,%20saya%20ingin%20konsultasi.`;

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
      scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'
    )}>
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold text-primary">
          PT Mencari Cinta Sejati
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link to={item.href} className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild variant="default" size="lg">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-cyan-400 to-violet-400 hover:from-cyan-500 hover:to-violet-500">
              Konsultasi WhatsApp
            </a>
          </Button>
          <DarkModeToggle />
        </div>

        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Button asChild className="w-full mt-4 bg-gradient-to-r from-cyan-400 to-violet-400">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Konsultasi WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}

      {/* Sticky WhatsApp button for desktop */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <Button asChild size="icon" className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.317 5.987A12.712 12.712 0 0 0 12 2.8a12.71 12.71 0 0 0-9 3.187A12.71 12.71 0 0 0 2.8 12a12.71 12.71 0 0 0 3.187 9A12.71 12.71 0 0 0 12 21.2a12.71 12.71 0 0 0 9-3.187 12.71 12.71 0 0 0 3.187-9A12.71 12.71 0 0 0 21.317 6z"></path>
              <path d="M16.25 8.75a2.75 2.75 0 1 0-2.75 2.75 2.75 2.75 0 0 0 2.75-2.75zM10.75 16.25a6.75 6.75 0 0 1-6.75-6.75h2a4.75 4.75 0 0 0 4.75 4.75v2z"></path>
            </svg>
          </a>
        </Button>
      </div>
    </header>
  );
}