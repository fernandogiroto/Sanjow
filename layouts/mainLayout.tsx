import { NextPage } from 'next';
import { useRouter } from 'next/router';
import MenuNavbar from '../components/MenuNavbar';

type LayoutProps = {
  title?: string;
}

const MainLayout: NextPage<LayoutProps> = ({ children, title }) => {
  const router = useRouter();

  // State

  // Hooks

  // Template
  return (
    <div>
      <main>
        <MenuNavbar></MenuNavbar>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
