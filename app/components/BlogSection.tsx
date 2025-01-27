import React from "react";
import { Container, Text, SimpleGrid, Badge, Avatar, Box, Group, Stack, Card, Image } from "@mantine/core";
import classes from './BlogSection.module.css';

const blogPosts = [
  {
    id: 1,
    title: "How to Apply for International Scholarships",
    description:
      "Discover the step-by-step process to secure international scholarships. Learn about essential documents, application strategies, and tips to make your application stand out from thousands of other candidates.",
    author: {
      name: "Sarah Chen",
      avatar: "https://github.com/shadcn.png",
    },
    category: "Scholarship",
    image: "https://picsum.photos/800/450",
  },
  {
    id: 2,
    title: "Top Universities Offering Full Scholarships in 2024",
    description:
      "Explore comprehensive full-ride scholarship opportunities at prestigious universities worldwide. From tuition fees to living expenses, these programs cover everything you need to pursue your academic dreams.",
    author: {
      name: "Michael Rodriguez",
      avatar: "https://github.com/shadcn.png",
    },
    category: "Education",
    image: "https://picsum.photos/800/450",
  },
  {
    id: 3,
    title: "Study Abroad: Student Success Stories",
    description:
      "Read inspiring stories from students who successfully secured scholarships and are now studying at their dream universities. Learn from their experiences, challenges, and strategies for academic success.",
    author: {
      name: "Emma Watson",
      avatar: "https://github.com/shadcn.png",
    },
    category: "Success Stories",
    image: "https://picsum.photos/800/450",
  },
];

const BlogCard = ({ post }) => {
  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={post.image} alt={post.title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {post.title}
          </Text>
        </Group>
        <Text fz="sm" mt="xs" c="dimmed" className={classes.description}>
          {post.description}
        </Text>
      </Card.Section>
    </Card>
  );
};

export function BlogSection() {
  return (
    <Box pt={{ base: 40, md: 80 }} style={{ background: '#fff' }}>
      <Container size="lg">
        <Stack gap="xl">
          <Box>
            {/* <Text tt="capitalize" fw="bold" fz="lg">Blog & Insights</Text> */}
            <Text fz={{ base: 32, md: 48 }} fw={500} lh={1.2}>
              Insight Untukmu
            </Text>
            {/* <Text c="dimmed" style={{ maxWidth: 800 }}>
              Temukan informasi terbaru seputar beasiswa dan pendidikan internasional untuk membantu perjalanan akademikmu.
            </Text> */}
          </Box>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={24}>
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
