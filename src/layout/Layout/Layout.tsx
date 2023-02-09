import Navbar from '../Navbar/Navbar';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="flex justify-center">
        <div className="w-[1300px]">{children}</div>
      </main>
      {/* footer */}
    </>
  );
}

export default Layout;
