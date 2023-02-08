import Navbar from '../Navbar/Navbar';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="flex justify-center bg-gray-600 ">
        <div className="w-[1200px]">{children}</div>
      </main>
      {/* footer */}
    </>
  );
}

export default Layout;
