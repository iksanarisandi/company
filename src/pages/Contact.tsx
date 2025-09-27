import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

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

interface FormData {
  name: string;
  email: string;
  company: string;
  needs: string;
}

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    needs: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsLoading(false);
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', needs: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const whatsappUrl = `https://wa.me/6282347303153?text=Halo%20PT%20Mencari%20Cinta%20Sejati,%20saya%20ingin%20konsultasi%20mengenai%20${formData.needs || 'solusi%20bisnis'}.`;

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
            Kontak Kami
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Butuh solusi? Tim kami siap membantu.
          </motion.p>
          <motion.div variants={itemVariants} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-400 to-violet-400 hover:from-cyan-500 hover:to-violet-500 px-8 text-lg shadow-lg">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Konsultasi via WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-2xl">
                    <MapPin className="h-6 w-6" />
                    <span>Informasi Kantor</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Alamat</h3>
                        <p className="text-muted-foreground">Graha Harmoni Lt. 10, Wakanda, Indonesia</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Jam Kerja</h3>
                        <p className="text-muted-foreground">Senin - Jumat: 09:00 - 18:00 WIB</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Email</h3>
                        <p className="text-muted-foreground">hello@mencaricintasejati.co.id</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Telepon</h3>
                        <p className="text-muted-foreground">+62 823 4730 3153</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="glass-card overflow-hidden">
                <CardHeader className="p-0">
                  <CardTitle className="p-4 border-b border-border">Lokasi Kami</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted/50 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
                      <p className="text-muted-foreground">Graha Harmoni Lt. 10, Wakanda</p>
                      <Badge variant="outline" className="text-xs">Peta Lokasi (Placeholder)</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                  <CardDescription>
                    Isi form di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Nama Lengkap
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Masukkan nama lengkap Anda"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Masukkan alamat email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-foreground">
                        Perusahaan (Opsional)
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Nama perusahaan Anda"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="needs" className="text-sm font-medium text-foreground">
                        Kebutuhan Anda
                      </label>
                      <Textarea
                        id="needs"
                        name="needs"
                        placeholder="Ceritakan tentang kebutuhan atau proyek yang ingin Anda diskusikan..."
                        value={formData.needs}
                        onChange={handleInputChange}
                        rows={4}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-400 to-violet-400 hover:from-cyan-500 hover:to-violet-500"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Send className="h-4 w-4 mr-2 animate-spin" />
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Kirim Pesan
                        </>
                      )}
                    </Button>
                  </form>

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200"
                    >
                      <div className="flex items-center space-x-2">
                        <Send className="h-5 w-5" />
                        <span>Pesan berhasil dikirim! Tim kami akan menghubungi Anda segera.</span>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}