import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, Eye, TrendingUp } from 'lucide-react';

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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Proyek Tidak Ditemukan</h1>
          <Button asChild variant="outline">
            <a href="/proyek">Kembali ke Studi Kasus</a>
          </Button>
        </div>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/6282347303153?text=Halo,%20saya%20tertarik%20dengan%20proyek%20${project.title}%20dan%20ingin%20diskusi%20lebih%20lanjut.`;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <Button asChild variant="outline" className="mb-4">
                <Link to="/proyek">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali ke Studi Kasus
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-6">
              <Badge variant="secondary" className="text-sm">
                {project.industry}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto space-y-12"
          >
            {/* Hero Image */}
            <motion.div variants={itemVariants}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg shadow-lg object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>

            {/* KPIs */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
              {project.kpis.map((kpi, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-muted/50 rounded-lg">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{kpi}</h3>
                    <p className="text-sm text-muted-foreground">Hasil yang dicapai</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Problem-Solution-Result */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Masalah</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Klien menghadapi tantangan dalam {project.industry.toLowerCase()} dengan {project.title.toLowerCase()}. 
                    Mereka membutuhkan solusi yang inovatif untuk mencapai target pertumbuhan.
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Solusi</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Kami menerapkan strategi komprehensif yang mencakup riset pasar mendalam, desain UX/UI yang user-centric, 
                    dan implementasi teknologi modern untuk memecahkan masalah utama klien.
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Hasil</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Proyek berhasil diselesaikan dengan melebihi ekspektasi, memberikan ROI yang signifikan dan 
                    membuka peluang kolaborasi jangka panjang dengan klien.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div 
              variants={itemVariants}
              className="text-center space-y-6 pt-12 border-t border-border"
            >
              <h3 className="text-2xl font-semibold text-foreground">
                Ingin hasil serupa untuk bisnis Anda?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-cyan-400 to-violet-400">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Diskusi Proyek <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/layanan">
                    Lihat Layanan Kami
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}