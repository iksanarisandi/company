import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Heart, Award, Clock, MapPin, GraduationCap, Coffee, Wifi } from 'lucide-react';

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

const benefits = [
  { icon: Heart, title: 'Budaya Kolaboratif', description: 'Kami percaya pada kerja tim yang saling mendukung dan menghargai setiap kontribusi.' },
  { icon: Clock, title: 'Fleksibilitas Waktu', description: 'Jam kerja fleksibel yang memungkinkan work-life balance yang sehat.' },
  { icon: Wifi, title: 'Remote Friendly', description: 'Opsi kerja remote atau hybrid sesuai kebutuhan tim dan proyek.' },
  { icon: Coffee, title: 'Lingkungan Nyaman', description: 'Kantor modern dengan fasilitas lengkap untuk mendukung kreativitas.' },
  { icon: GraduationCap, title: 'Pengembangan Diri', description: 'Pelatihan dan workshop rutin untuk meningkatkan skill dan karir.' },
  { icon: Award, title: 'Benefit Kompetitif', description: 'Asuransi kesehatan, tunjangan, dan bonus berbasis performa.' },
];

const jobOpenings = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    level: 'Senior',
    type: 'Full-time',
    location: 'Remote',
    description: 'Membangun antarmuka pengguna yang responsif dan modern menggunakan React, TypeScript, dan Tailwind CSS. Kolaborasi dengan tim desain dan backend.',
    requirements: [
      '5+ tahun pengalaman React/TypeScript',
      'Mahir Tailwind CSS dan modern UI libraries',
      'Pengalaman dengan state management (Zustand/Redux)',
      'Portofolio proyek digital yang impactful',
    ],
  },
  {
    id: '2',
    title: 'Digital Marketing Specialist',
    level: 'Mid-level',
    type: 'Hybrid',
    location: 'Jakarta',
    description: 'Mengelola kampanye digital, analisis performa, dan strategi konten untuk klien di berbagai industri.',
    requirements: [
      '3+ tahun pengalaman digital marketing',
      'Mahir Google Analytics, Ads, dan SEO tools',
      'Kreatif dalam content creation dan social media',
      'Pengalaman dengan A/B testing dan data-driven decisions',
    ],
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    level: 'Mid-level',
    type: 'Full-time',
    location: 'Remote/Hybrid',
    description: 'Mendesain pengalaman pengguna yang intuitif dan visual yang menarik untuk produk digital klien.',
    requirements: [
      '3+ tahun pengalaman UX/UI design',
      'Mahir Figma, Adobe XD, atau Sketch',
      'Pengalaman dengan user research dan prototyping',
      'Portofolio desain web/mobile yang kuat',
    ],
  },
  {
    id: '4',
    title: 'Business Development Manager',
    level: 'Senior',
    type: 'Full-time',
    location: 'Jakarta',
    description: 'Mencari peluang bisnis baru, membangun relasi klien, dan mengembangkan strategi pertumbuhan.',
    requirements: [
      '5+ tahun pengalaman business development',
      'Jaringan kuat di industri kreatif/teknologi',
      'Kemampuan negosiasi dan presentasi yang excellent',
      'Pengalaman dengan CRM dan sales pipeline',
    ],
  },
];

export function CareersPage() {
  const whatsappUrl = `https://wa.me/6282347303153?text=Halo,%20saya%20tertarik%20dengan%20posisi%20di%20PT%20Mencari%20Cinta%20Sejati.`;

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
            Karier
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Bergabunglah dengan tim inovatif kami dan ciptakan dampak nyata di dunia bisnis dan teknologi.
          </motion.p>
        </div>
      </section>

      {/* Company Culture & Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center space-y-12"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Budaya Kerja Kami</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Kami percaya pada lingkungan kerja yang mendukung kreativitas, kolaborasi, dan pertumbuhan pribadi.
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center space-y-4 p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
                >
                  <div className="h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Lowongan Tersedia</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Lihat posisi yang sedang kami buka dan lamar sekarang untuk bergabung dengan tim berbakat kami.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto space-y-4">
                {jobOpenings.map((job) => (
                  <AccordionItem key={job.id} value={job.id} className="border-border">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <Badge variant="secondary">{job.level}</Badge>
                            <Badge variant="outline">{job.type}</Badge>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{job.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">Persyaratan:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                        <Button asChild variant="outline" className="flex-1">
                          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            Lamar via WhatsApp
                          </a>
                        </Button>
                        <Button variant="ghost" className="flex-1">
                          Download JD
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold">
              Siap untuk Karier Impian Anda?
            </h3>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Jika Anda passionate tentang menciptakan dampak dan siap bergabung dengan tim inovatif, kami menunggu Anda.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-muted">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Hubungi Tim Rekrutmen
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}