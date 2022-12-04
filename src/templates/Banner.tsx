import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Join the Discord community to begin building your empire today!"
      subtitle="Your empire is just one API call away."
      button={
        <Link href="https://discord.gg/64tYmMefbH">
          <a>
            <Button>Join Discord</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
