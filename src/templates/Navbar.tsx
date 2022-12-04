import Link from 'next/link';

import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Navbar = () => {
  return (
    <NavbarTwoColumns logo={<Logo xl />}>
      <li>
        <Link href="/docs">
          <a>Docs</a>
        </Link>
      </li>
      <li>
        <Link href="https://discord.gg/64tYmMefbH">
          <a>Discord</a>
        </Link>
      </li>
    </NavbarTwoColumns>
  );
};

export { Navbar };
