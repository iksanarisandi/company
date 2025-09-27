import { motion, type RepeatType, easeInOut } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.5 },
  },
};

const parallaxVariants = {
  hidden: { y: 0 },
  visible: {
    y: -20,
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse" as RepeatType,
      ease: easeInOut,
    },
  },
};

export function HomeHero() {
  const whatsappUrl = `https://wa.me/6282347303153?text=Halo%20PT%20Mencari%20Cinta%20Sejati,%20saya%20ingin%20konsultasi.`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted/50">
      {/* Background shapes */}
      <motion.div 
        className="absolute inset-0"
        variants={parallaxVariants}
        initial="hidden"
        animate="visible"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(34, 211, 238, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)`,
        }}
      />
      
      {/* Hero image */}
      <motion.div 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full bg-cover bg-center opacity-20"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop')",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Badge */}
          <motion.div variants={badgeVariants}>
            <Badge variant="secondary" className="text-xs px-4 py-2 bg-accent/20 text-accent-foreground">
              Sejak 2015 • 120+ Proyek • 30+ Klien
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={childVariants}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight"
          >
            Mencipta Nilai dari Setiap Kolaborasi.
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={childVariants}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            PT Mencari Cinta Sejati adalah konsultan strategi, teknologi, dan kreatif yang membantu brand bertumbuh berkelanjutan.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={childVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="px-8 bg-gradient-to-r from-cyan-400 to-violet-400 hover:from-cyan-500 hover:to-violet-500 text-lg font-semibold shadow-lg">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Konsultasi via WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 border-2 border-border text-lg font-semibold">
              <Link to="/layanan">Lihat Layanan</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}