import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomeHero } from '@/pages/Home';
import { AboutPage } from '@/pages/About';
import { ServicesPage } from '@/pages/Services';
import { CaseStudiesPage } from '@/pages/CaseStudies';
import { ProjectDetail } from '@/pages/ProjectDetail';
import { ClientsPage } from '@/pages/Clients';
import { TeamPage } from '@/pages/Team';
import { CareersPage } from '@/pages/Careers';
import { ContactPage } from '@/pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomeHero />} />
              <Route path="/tentang" element={<AboutPage />} />
              <Route path="/layanan" element={<ServicesPage />} />
              <Route path="/proyek" element={<CaseStudiesPage />} />
              <Route path="/proyek/:slug" element={<ProjectDetail />} />
              <Route path="/klien" element={<ClientsPage />} />
              <Route path="/tim" element={<TeamPage />} />
              <Route path="/karier" element={<CareersPage />} />
              <Route path="/kontak" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
