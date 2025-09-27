import { motion, easeOut } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/data/services';
import { cn } from '@/lib/utils';
import { BarChart3, Zap, Code, Palette, TrendingUp, GraduationCap } from 'lucide-react';

const iconMap = {
  BarChart3,
  Zap,
  Code,
  Palette,
  TrendingUp,
  GraduationCap,
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export function ServicesPage() {
  const whatsappUrl = `https://wa.me/6282347303153?text=Halo%20PT%20Mencari%20Cinta%20Sejati,%20saya%20ingin%20informasi%20layanan.`;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Layanan Kami
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Solusi komprehensif untuk pertumbuhan bisnis Anda melalui strategi, teknologi, dan kreativitas.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {services.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div key={service.id} variants={cardVariants}>
                  <Card className="h-full glass-card hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="h-16 w-16 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground text-center mt-4">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-center text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                      <div className="flex justify-center">
                        <Button asChild variant="outline" className="group-hover:translate-x-1 transition-transform duration-300">
                          <Link to="/kontak">
                            Pelajari lebih lanjut
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-20 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              Siap untuk memulai kolaborasi?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Setiap brand memiliki cerita unik. Mari kita ciptakan solusi yang tepat untuk pertumbuhan Anda.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-400 to-violet-400 hover:from-cyan-500 hover:to-violet-500 px-8">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Konsultasi Gratis
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}