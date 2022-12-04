import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { Navbar } from './Navbar';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <Navbar />
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-500">Code</span>
            {' your way to the top of the industry.'}
          </>
        }
        description="Join the Discord community and create your API key to start building your empire today!"
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Start building</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
