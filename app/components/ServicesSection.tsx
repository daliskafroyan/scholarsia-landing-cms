import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import styles from './ServicesSection.module.css';
import {
  IconSchool,
  IconNotes,
  IconUserCheck,
  IconSearch,
  IconFiles,
  IconTent,
  IconUsers,
  IconHome,
  IconArrowRight,
  IconProps,
  Icon,
} from '@tabler/icons-react';
import { Text } from '@mantine/core';
import { AuroraBackground } from './AuroraBackground';

// Define the service data type
type ServiceData = {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  title: string;
  description: string;
}

// Extract service data
const servicesData: ServiceData[] = [
  {
    icon: IconSchool,
    title: 'College Camp',
    description: 'Persiapan intensif untuk masuk perguruan tinggi impian, termasuk pemilihan jurusan dan kampus yang tepat',
  },
  {
    icon: IconTent,
    title: 'Seasonal Camp',
    description: 'Program liburan yang menggabungkan pembelajaran dan kegiatan menyenangkan untuk pengembangan diri',
  },
  {
    icon: IconUserCheck,
    title: 'Bootcamp',
    description: 'Program intensif jangka pendek untuk mempersiapkan kemampuan spesifik dalam bidang akademik atau karir',
  },
  {
    icon: IconUsers,
    title: 'Komunitas Pelajar',
    description: 'Bergabung dengan jaringan pelajar Indonesia yang belajar di seluruh dunia untuk berbagi pengalaman',
  },
  {
    icon: IconHome,
    title: 'Akomodasi',
    description: 'Bantuan mencari dan mengatur tempat tinggal yang aman dan nyaman selama masa studi di luar negeri',
  },
];

// Reusable ServiceCard component
const ServiceCard: React.FC<ServiceData> = ({ icon: Icon, title, description }) => (
  <div className={styles.serviceCard}>
    <div className={styles.iconWrapper}>
      <Icon size={24} stroke={1.5} />
    </div>
    <Text component="h3" fw={600} mb="xs">{title}</Text>
    <Text>{description}</Text>
    {/* <div className={styles.cardFooter}>
      <button className={styles.learnMore}>
        Learn more <IconArrowRight size={16} />
      </button>
    </div> */}
  </div>
);

export function ServicesSection() {
  return (
    // <AuroraBackground>
      <div className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <Text tt="capitalize" fw="bold" fz="lg">Program Kami</Text>
          <Text component="h2" className={styles.sectionTitle}>Apa yang kami sediakan?</Text>
          <Text className={styles.sectionDescription}>
            Eksplor program pendidikan dan pengembangan diri untuk membantu kamu mencapai potensi maksimal dalam perjalanan akademik dan karir internasional.
          </Text>
          {/* <button className={styles.scheduleButton}>Schedule Discussion →</button> */}
        </div>

        <div className={styles.serviceCards}>
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    // </AuroraBackground>
  );
}