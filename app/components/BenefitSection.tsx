import React from "react";
import { Text, Container, SimpleGrid, Box, Stack } from "@mantine/core";
import styles from "./BenefitSection.module.css";

export function BenefitSection() {
  const benefits = [
    {
      step: "1",
      title: "Raih pendidikan berkualitas terbaik",
      description: "Kami membantu kamu untuk mendapatkan pendidikan berkualitas tinggi dengan program yang sesuai dengan kebutuhan dan aspirasi karirmu.",
    },
    {
      step: "2",
      title: "Jaringan global yang membuka pintu peluang tak terbatas",
      description: "Bangun jaringan global yang membuka peluang tak terbatas untuk pengembangan karir dan akademik melalui koneksi dengan institusi dan profesional internasional.",
    },
    {
      step: "3",
      title: "Berinteraksi dengan Mahasiswa dan Professional dari seluruh dunia",
      description: "Perluas wawasan dan pengalaman melalui interaksi dengan mahasiswa dan profesional dari berbagai negara dan latar belakang budaya.",
    },
  ];

  return (
    <Box className={styles.servicesSection}>
      <Container size="lg">
        <div className={styles.sectionHeader}>
          <Text tt="capitalize" fw="bold" fz="lg">Dapat apa di Scholarsia?</Text>
          <Text component="h2" className={styles.sectionTitle}>
            Manfaat yang kamu dapatkan
          </Text>
          <Text className={styles.sectionDescription}>
            Bergabung dengan Scholarsia membuka peluang untuk mengembangkan diri dan meraih pendidikan berkualitas internasional.
          </Text>
        </div>

        <SimpleGrid cols={3} spacing={40}>
          {benefits.map((benefit) => (
            <div key={benefit.step} className={styles.serviceCard}>
              <div className={styles.stepNumber}>
                {benefit.step}
              </div>
              <Text component="h3" fw={600} mb="xs">
                {benefit.title}
              </Text>
              <Text>
                {benefit.description}
              </Text>
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}