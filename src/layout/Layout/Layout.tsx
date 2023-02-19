/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col  bg-neutral mb-20">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
