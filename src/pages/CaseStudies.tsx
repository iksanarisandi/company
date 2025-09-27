import { motion, easeOut } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';
import { ArrowRight, Eye } from 'lucide-react';

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

export function CaseStudiesPage() {
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
            Studi Kasus
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Lihat bagaimana kami membantu klien mencapai hasil luar biasa melalui strategi dan eksekusi yang tepat.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={cardVariants}>
                <Link to={`/proyek/${project.slug}`} className="block">
                  <Card className="h-full group overflow-hidden hover:shadow-xl transition-all duration-300 glass-card">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge variant="secondary" className="text-xs">
                          {project.industry}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <CardTitle className="text-xl font-bold text-foreground leading-tight">
                        {project.title}
                      </CardTitle>
                      <div className="space-y-2">
                        {project.kpis.map((kpi, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <ArrowRight className="h-3 w-3 text-primary flex-shrink-0" />
                            <span>{kpi}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <CardDescription className="text-sm text-muted-foreground">
                          Lihat detail lengkap
                        </CardDescription>
                        <Eye className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}