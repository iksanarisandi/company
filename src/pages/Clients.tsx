import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};


const clientLogos = [
  { name: "Nusa Mart", logo: "https://via.placeholder.com/120x40/FF6B6B/FFFFFF?text=Nusa+Mart", industry: "Ritel" },
  { name: "EduPrime", logo: "https://via.placeholder.com/120x40/4ECDC4/FFFFFF?text=EduPrime", industry: "Edukasi" },
  { name: "Bank XYZ", logo: "https://via.placeholder.com/120x40/45B7D1/FFFFFF?text=Bank+XYZ", industry: "Keuangan" },
  { name: "RS ABC", logo: "https://via.placeholder.com/120x40/F7DC6F/000000?text=RS+ABC", industry: "Kesehatan" },
  { name: "D'Eat", logo: "https://via.placeholder.com/120x40/96CEB4/FFFFFF?text=D'Eat", industry: "F&B" },
  { name: "Pemkot Wakanda", logo: "https://via.placeholder.com/120x40/3498DB/FFFFFF?text=Pemkot", industry: "Pemerintahan" },
  { name: "Nusa Mart", logo: "https://via.placeholder.com/120x40/FF6B6B/FFFFFF?text=Nusa+Mart", industry: "Ritel" },
  { name: "EduPrime", logo: "https://via.placeholder.com/120x40/4ECDC4/FFFFFF?text=EduPrime", industry: "Edukasi" },
];

export function ClientsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PT Mencari Cinta Sejati",
            "review": testimonials.map((testimonial) => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating,
                "bestRating": 5,
              },
              "author": {
                "@type": "Person",
                "name": testimonial.name,
              },
              "reviewBody": testimonial.quote,
            })),
          }),
        }}
      />

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
              Klien & Testimoni
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            >
              Bergabunglah dengan ratusan klien yang telah mempercayai kami untuk pertumbuhan bisnis mereka.
            </motion.p>
          </div>
        </section>

        {/* Clients Logos Carousel */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center text-foreground mb-12"
            >
              Mitra Terpercaya
            </motion.h2>
            <motion.div
              animate={{ x: [0, -100] }}
              transition={{
                x: {
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear"
                }
              }}
              className="overflow-hidden"
            >
              <div className="flex space-x-12">
                {clientLogos.map((client, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-32 h-16 bg-background dark:bg-card rounded-lg shadow-md flex items-center justify-center border border-border"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-10 w-auto object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center text-foreground mb-12"
            >
              Apa Kata Klien Kami
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {testimonials.slice(0, 3).map((testimonial) => (
                <motion.div key={testimonial.id} variants={itemVariants}>
                  <Card className="h-full glass-card">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <CardTitle className="text-lg font-semibold text-foreground">
                            {testimonial.name}
                          </CardTitle>
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <span>{testimonial.position}, {testimonial.company}</span>
                            <div className="flex ml-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={cn(
                                    "h-3 w-3 fill-current",
                                    i < testimonial.rating ? "text-yellow-400" : "text-muted-foreground"
                                  )}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="italic text-muted-foreground leading-relaxed">
                        "{testimonial.quote}"
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}