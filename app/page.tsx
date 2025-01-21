import Link from 'next/link';
import { reader } from './reader';
import { Container, Title, Text, Anchor, Button } from '@mantine/core';
import { HeaderMenu } from './components/HeaderMenu';

export default async function Homepage() {
  const posts = await reader.collections.posts.all();

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(pattern-bg.svg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(pattern-bg.svg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transform: 'rotate(180deg)',
      }} />
      <Container size="xl" py="xl">
        <HeaderMenu />
        <div style={{
          position: 'relative',
          background: 'white',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 0 40px 20px white',
          backdropFilter: 'blur(10px)',
          marginTop: '2rem',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'center',
          }}>
            <div>
              <Title order={2}>Maksimalkan Potensimu dengan Akses Global ke Pendidikan Terbaik</Title>
              <Text mt="lg" c="dimmed">
                Platform Terbaik untuk Beasiswa, Pertukaran Pelajar, dan Program Pendidikan Internasional
              </Text>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <Button color="red">CARI BEASISWA</Button>
                <Button variant="outline">LIHAT PROGRAM LAIN</Button>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="hero-image.svg"
                alt="Hero illustration"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}