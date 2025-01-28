import { Box, Button, Container } from '@mantine/core';
import './styles.css';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero.section';
import { BenefitSection } from '@/components/benefit.section';
import styles from '@/styles/shared.module.css';
import { ServicesSection } from '@/components/services.section';
import { BlogSection } from '@/components/blog.section';
import { Footer } from '@/components/footer';
import { EmailBanner } from '@/components/email-banner.section';

export default async function Home() {

  return (
    <>
     <Navigation />
     <HeroSection />
     <div className={styles.creamBackground}>
        <div className={styles.sectionWrapper}>
          <div className={styles.sectionContainer}>
            <BenefitSection />
          </div>
        </div>

        <ServicesSection />
      </div>
      <BlogSection />
      <Box py={{ base: 40, md: 80 }}>
        <Container size="lg">
          <EmailBanner />
        </Container>
        </Box>
      <Footer />
    </>
  );
}
