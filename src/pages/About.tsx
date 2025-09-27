import { motion } from 'framer-motion';
import { Users, Users2, BarChart3, Zap, Code, TrendingUp, Calendar, Award, Lightbulb, Users as UsersIcon } from 'lucide-react';

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

const values = [
  { icon: UsersIcon, number: '120+', label: 'Proyek' },
  { icon: Users2, number: '30+', label: 'Klien' },
  { icon: BarChart3, number: '10', label: 'Negara' },
  { icon: Award, number: '96%', label: 'Kepuasan' },
];

const coreValues = [
  {
    icon: Users,
    title: 'Integritas',
    description: 'Kami berkomitmen untuk selalu jujur dan transparan dalam setiap kolaborasi.',
  },
  {
    icon: Users2,
    title: 'Kolaborasi',
    description: 'Keberhasilan dicapai melalui kerja sama yang solid dan saling mendukung.',
  },
  {
    icon: BarChart3,
    title: 'Dampak',
    description: 'Setiap proyek harus memberikan nilai nyata dan dampak positif berkelanjutan.',
  },
];

const vision = 'Menjadi mitra strategis paling dipercaya untuk pertumbuhan bermakna.';

const mission = [
  'Memberikan solusi inovatif berbasis data dan riset mendalam.',
  'Membangun kolaborasi jangka panjang yang saling menguntungkan.',
  'Mendorong transformasi digital yang berkelanjutan dan inklusif.',
  'Menciptakan dampak positif bagi klien, masyarakat, dan lingkungan.',
];

const timeline = [
  { year: '2015', event: 'Didirikan sebagai konsultan strategi kreatif', icon: Calendar },
  { year: '2017', event: 'Memperluas layanan ke transformasi digital', icon: Zap },
  { year: '2019', event: 'Mencapai 50+ proyek dan ekspansi regional', icon: TrendingUp },
  { year: '2021', event: 'Peluncuran divisi pengembangan produk teknologi', icon: Code },
  { year: '2023', event: 'Mencapai 100+ proyek dan sertifikasi ISO 9001', icon: Award },
  { year: '2025', event: 'Target ekspansi internasional dan AI integration', icon: Lightbulb },
];

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center space-y-8"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-foreground">
              Tentang Kami
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              PT Mencari Cinta Sejati adalah konsultan strategi, teknologi, dan kreatif yang membantu brand meraih pertumbuhan berkelanjutan melalui riset, inovasi, dan eksekusi.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nilai Kami</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Prinsip-prinsip yang menjadi fondasi setiap kolaborasi kami.</p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {coreValues.map((value) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="text-center space-y-4 p-6 rounded-lg border border-border bg-card"
                >
                  <div className="h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            {values.map((value) => (
              <motion.div
                key={value.label}
                variants={itemVariants}
                className="space-y-2"
              >
                <value.icon className="h-12 w-12 mx-auto text-primary" />
                <div className="text-3xl md:text-4xl font-bold text-foreground">{value.number}</div>
                <div className="text-muted-foreground">{value.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Visi Kami</h2>
              <p className="text-2xl text-primary font-semibold italic">"{vision}"</p>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Misi Kami</h3>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  {mission.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop"
                alt="Tim kerja di kantor"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center space-y-12"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Perjalanan Kami</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Dari startup kecil hingga konsultan terpercaya di industri.</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="overflow-x-auto pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex space-x-6 min-w-max">
                {timeline.map((item) => (
                  <motion.div
                    key={item.year}
                    variants={itemVariants}
                    className="flex-shrink-0 w-64 text-center space-y-4"
                  >
                    <div className="h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{item.year}</div>
                    <p className="text-muted-foreground">{item.event}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}