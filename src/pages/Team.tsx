import { motion, easeOut } from 'framer-motion';
import { team } from '@/data/team';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Linkedin, Mail, Phone } from 'lucide-react';

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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const hoverVariants = {
  hover: { scale: 1.02, y: -5 },
  tap: { scale: 0.98 },
};

export function TeamPage() {
  const whatsappUrl = `https://wa.me/6282347303153?text=Halo,%20saya%20tertarik%20bergabung%20dengan%20tim%20PT%20Mencari%20Cinta%20Sejati.`;

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
            Tim Kami
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Orang-orang berbakat yang mendedikasikan diri untuk menciptakan dampak positif melalui inovasi dan kolaborasi.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {team.map((member) => (
              <motion.div key={member.id} variants={cardVariants}>
                <Card className="h-full glass-card overflow-hidden group cursor-pointer relative">
                  <CardHeader className="relative pb-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Avatar className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-2xl font-bold">
                          {member.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Phone className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <CardTitle className="text-xl font-bold text-foreground">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground font-medium">
                      {member.position}
                    </CardDescription>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.expertise}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Bergabunglah dengan Tim Kami
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kami sedang mencari talenta berbakat untuk bergabung dalam perjalanan menciptakan dampak positif.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-400 to-violet-400 hover:from-cyan-500 hover:to-violet-500 px-8">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Lamar Sekarang
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}