import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { CONTACT } from './theme';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AboutPage from './Components/Aboutus';
import ContactPage from './Components/Contact';
import GalleryPage from './Components/Gallery';
import ServicesPage from './Components/Servicepage';
import Chatbot from './Components/Chatbot';

function HomePage() {
  return (
  <div className="App">
      <HomeCarousel />
      <header className="App-header" style={{ padding: '2rem 0 1rem' }}>
        <h1>Welcome to Vine Earthworks</h1>
        <p>Explore our glass, aluminium, and earthmoving services.</p>
      </header>
      <main style={{ padding: '2rem', maxWidth: 960, margin: '0 auto' }}>
        <section style={{ marginBottom: '2rem' }}>
          <h2>Find the page you need</h2>
          <p>Use the navigation menu to browse our services, gallery, contact form, and company overview.</p>
        </section>
      </main>
    </div>
);
}

const HOME_SLIDES = [
  {
    title: 'Modern Glass & Aluminium Solutions',
    subtitle: 'Precision installations for homes, offices, and commercial facades.',
    button: 'View Services',
    image: '/Glass installation.jpg',
  },
  {
    title: 'Dependable Earthmoving Expertise',
    subtitle: 'Site clearing, excavation, road grading, and material delivery across Nairobi.',
    button: 'Learn More',
    image: '/earthmoving.jpg',
  },
  {
    title: 'Projects Delivered On Time',
    subtitle: 'Quality workmanship and responsive support for every stage of your build.',
    button: 'Get a Quote',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80',
  },
];

function HomeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % HOME_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: 420, marginBottom: 32 }}>
      {HOME_SLIDES.map((slide, index) => (
        <div
          key={slide.title}
          style={{
            position: index === activeIndex ? 'relative' : 'absolute',
            inset: 0,
            opacity: index === activeIndex ? 1 : 0,
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            transform: index === activeIndex ? 'translateX(0)' : 'translateX(5%)',
            backgroundImage: `linear-gradient(to bottom, rgba(9, 18, 32, 0.45), rgba(9, 18, 32, 0.75)), url('${slide.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: 420,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ maxWidth: 960, padding: '2rem', color: '#fff', textAlign: 'center' }}>
            <p style={{ fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16, color: '#f9b384' }}>Vine Earthworks</p>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 56px)', marginBottom: 16, lineHeight: 1.05 }}>{slide.title}</h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 720, margin: '0 auto 24px', color: '#dfe9ff' }}>{slide.subtitle}</p>
            <button
              type="button"
              onClick={() => navigate('/services')}
              style={{
                background: '#E8541A',
                border: 'none',
                borderRadius: 8,
                padding: '14px 28px',
                color: '#fff',
                fontSize: 16,
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              {slide.button}
            </button>
          </div>
        </div>
      ))}

      <div style={{ position: 'absolute', left: 20, bottom: 20, display: 'flex', gap: 10 }}>
        {HOME_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.85)',
              background: index === activeIndex ? '#fff' : 'transparent',
              cursor: 'pointer',
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function WhatsAppFloat() {
  const number = CONTACT.phone.replace(/\D/g, '');

  const message = `👋 Hello from Vine Earthworks! I'm interested in your services. Please send me your brochure and more details on your offers:\n\n- Glass & Aluminium installations\n- Curtain walls, frameless doors, and shower cubicles\n- Excavation, road grading, and site preparation\n- Materials supply and earthmoving services\n\nThank you!`;

  
  const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer noopener"
      style={{
        position: 'fixed',
        bottom: 28,
        left: 28,
        zIndex: 1101,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        background: '#25D366',
        color: '#fff',
        borderRadius: 999,
        padding: '14px 18px',
        textDecoration: 'none',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 700,
        boxShadow: '0 12px 32px rgba(0,0,0,0.22)',
      }}
      aria-label="Chat with us on WhatsApp"
    >
      <span style={{ fontSize: 22 }}>💬</span>
      Chat with us
    </a>
  );
}



function AppRoutes() {
  const navigate = useNavigate();

  const handleNavigate = (pageOrRoute) => {
    if (typeof pageOrRoute === 'string' && pageOrRoute.startsWith('/')) {
      return navigate(pageOrRoute);
    }

    switch (pageOrRoute) {
      case 'home':
        return navigate('/');
      case 'about':
        return navigate('/about');
      case 'contact':
        return navigate('/contact');
      case 'gallery':
        return navigate('/gallery');
      case 'services':
        return navigate('/services');
      case 'chat':
        return navigate('/chat');
      default:
        return navigate('/');
    }
  };

  return (
    <>
      <Navbar onNavigate={handleNavigate} />
      <div style={{ minHeight: 'calc(100vh - 180px)' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/services" element={<ServicesPage onNavigate={handleNavigate} />} />
          <Route path="/chat" element={<Chatbot onNavigate={handleNavigate} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <WhatsAppFloat />
      <Chatbot onNavigate={handleNavigate} />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
