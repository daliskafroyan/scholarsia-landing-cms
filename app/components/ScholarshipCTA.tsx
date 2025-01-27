import React from "react";
import { Box, Container, Text, TextInput, Button, Group, Stack } from "@mantine/core";

export function ScholarshipCTA() {
  return (
    <Box
      style={{
        borderRadius: 24,
        backgroundImage: "url('/bg-pattern-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      py={{ base: 40, md: 80 }}
      mx={{ base: 20, md: 80 }}
      mb={80}
    >
      <Container size="lg">
        <Group align="flex-start" gap="xl" justify="space-between">
          <Stack gap="md" style={{ flex: 1 }}>
            <Text fz={{ base: 32, md: 48 }} fw={500} c="white">
              Penasaran dengan program Scholarsia?
            </Text>

            <Text fz="lg" c="white">
              Program Scholarsia memberikan akses ke beasiswa dan peluang pendidikan dari lebih dari 50 universitas internasional, Gabung Sekarang & Dapatkan Info Beasiswa dan Program Lainnya yang Menginspirasi!
            </Text>

            <Group gap="md">
              <TextInput
                placeholder="EMAIL KAMU"
                size="lg"
                style={{ flex: 1 }}
                styles={{
                  input: {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    // '&::placeholder': {
                    //   color: 'rgba(255, 255, 255, 1)',
                    // },
                  },
                }}
              />
              <Button
                size="lg"
                variant="filled"
                color="white"
                styles={{
                  root: {
                    color: 'var(--mantine-color-red-7)',
                  },
                }}
              >
                DAPATKAN INFO LENGKAP
              </Button>
            </Group>
          </Stack>

          <Box
            style={{
              flex: 1,
              maxWidth: '400px',
              '@media (max-width: 768px)': {
                display: 'none',
              },
            }}
          >
            <img
              src="/hero-image.svg"
              alt="Happy student"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Group>
      </Container>
    </Box>
  );
}