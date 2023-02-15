import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="app-container min-h-screen flex flex-col bg-base-100">
      <Navbar />
      <main className="flex-1">
        <div className="main-content-container flex justify-center">
          <div className="w-[1300px]">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
