import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
            <div>
                  <Navbar />
                  <div className="min-h-screen">{children}</div>
                  <Footer />
            </div>
      );
}
