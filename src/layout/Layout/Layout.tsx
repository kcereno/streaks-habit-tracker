/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-lone-blocks */
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="app-container min-h-screen  bg-base-100">
      <Navbar />
      <main className="flex justify-center">
        <div className="indicator">
          <span className="indicator-item indicator-middle indicator-end badge badge-secondary">
            <button type="button">+</button>
          </span>

          <div className="grid  bg-base-300 place-items-center my-10">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

{
  /* <div className="indicator">
          <span className="indicator-item indicator-middle badge badge-secondary">
            <button type="button">+</button>
          </span>

          <div className="main-content-container flex justify-center">
            <div className="w-[1300px]">{children}</div>
          </div>
        </div> */
}
