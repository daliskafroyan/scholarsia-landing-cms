'use client'

import Link from 'next/link';
// import { reader } from './reader';
import { Container, Title, Text, Anchor, Button, HoverCard, HoverCardDropdown, Group, HoverCardTarget, Box } from '@mantine/core';
import { HeaderMenu } from './components/HeaderMenu';
import { ServicesSection } from './components/ServicesSection';
import { BenefitSection } from './components/BenefitSection';
import { BlogSection } from './components/BlogSection';
import { ScholarshipCTA } from './components/ScholarshipCTA';
import {Footer} from './components/Footer'
import { HeaderMegaMenu } from './components/HeaderMegaMenu';
import styles from './styles/shared.module.css';
import { HeroSection } from './components/HeroSection';
import { EmailBanner } from './components/EmailBanner';

export default function Homepage() {
  // const posts = await reader.collections.posts.all();

  return (
    <>
      {/* <HeaderMegaMenu /> */}
      <HeaderMenu />
      {/* <div className={styles.sectionWrapper}>
        <div className={styles.sectionContainer}> */}
          <HeroSection />
        {/* </div>
      </div> */}
      <div className={styles.creamBackground}>
        <div className={styles.sectionWrapper}>
          <div className={styles.sectionContainer}>
            <BenefitSection />
          </div>
        </div>

        <ServicesSection />
      </div>

      <BlogSection />
      {/* <ScholarshipCTA /> */}
      {/* <div className={styles.basicWrapper}>
        <div className={styles.sectionContainer}> */}
        <Box py={{ base: 40, md: 80 }}>
        <Container size="lg">
          <EmailBanner />
        </Container>
        </Box>
        {/* </div> */}
      {/* </div> */}
      <Footer />
    </>
  );
}