import Navbar from '../navbar/navbar';
import { ReactElement } from 'react';

export function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
