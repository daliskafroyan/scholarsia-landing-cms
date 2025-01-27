'use client';
import { Box } from '@mantine/core';
import { ReactNode, CSSProperties } from 'react';
import styles from './AuroraBackground.module.css';

interface AuroraBackgroundProps {
  children: ReactNode;
  showRadialGradient?: boolean;
  style?: CSSProperties;
}

export function AuroraBackground({ children, showRadialGradient = true, style }: AuroraBackgroundProps) {
  return (
    <Box className={styles.wrapper} style={style}>
      <div className={styles.auroraContainer}>
        <div className={styles.auroraEffect} />
      </div>
      <div className={styles.dotPattern} />
      <div className={styles.content}>
        {children}
      </div>
    </Box>
  );
}