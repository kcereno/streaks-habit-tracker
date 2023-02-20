/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ViewToggle from '../../components/ViewToggle/ViewToggle';
import Pagination from '../../components/Pagination/Pagination';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col items-center bg-base-300 mb-20 tablet:mb-0">
        <ViewToggle />
        {children}
        <Pagination />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
