import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-100 p-4 border-b">
        <ul className="flex space-x-4">
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/clients">Clients</Link></li>
          <li><Link href="/caregivers">Caregivers</Link></li>
          <li><Link href="/shifts">Shifts</Link></li>
          <li><Link href="/compliance">Compliance</Link></li>
          <li><Link href="/documents">Documents</Link></li>
          <li><Link href="/audit">Audit</Link></li>
        </ul>
      </nav>
      <main className="p-4 flex-grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;
