'use client';

import { Container, Group, SegmentedControl, Button } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderMenu.module.css';

const links = [
  { link: '/features', label: 'Features' },
  { link: '/docs', label: 'Documentation' },
  { link: '/about', label: 'About' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/faq', label: 'FAQ' },
];

export function HeaderMenu() {
  // const [opened, { toggle }] = useDisclosure(false);

  const segments = links.map((link) => ({
    value: link.link,
    label: link.label,
  }));

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <MantineLogo size={28} />
          <Group justify="center" style={{ flex: 1 }}>
            <SegmentedControl
              data={segments}
              onChange={(value) => {
                console.log('Navigate to:', value);
              }}
              radius="xl"
              size="md"
              classNames={{
                root: classes.segmentedControl,
                indicator: classes.segmentedControlIndicator,
                control: classes.segmentedControlControl,
                label: classes.segmentedControlLabel,
              }}
            />
          </Group>
          <Group gap="xs" visibleFrom="sm">
            <Button variant="subtle" size="sm">Log in</Button>
            <Button size="sm">Sign up</Button>
          </Group>
          {/* <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" /> */}
        </div>
      </Container>
    </header>
  );
}