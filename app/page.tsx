import Link from 'next/link';
import { reader } from './reader';
import { Container, Title, Text, Anchor } from '@mantine/core';
import { HeaderMenu } from './components/HeaderMenu';

export default async function Homepage() {
  const posts = await reader.collections.posts.all();

  return (
    <Container size="md" py="xl">
      <HeaderMenu />
      <Title order={1}>Keystatic ⚡️</Title>
      <Text>This homepage shows how to load a collection from the reader API.</Text>
      <Text>
        <Anchor href="/keystatic">Click here to visit the Admin UI</Anchor>, or the link
        below to view a post in the collection.
      </Text>
      <Title order={2} mt="lg">Posts</Title>
      {/* <List>
        {posts.map(post => (
          <List.Item key={post.slug}>
            <Link href={`/${post.slug}`}>{post.entry.title}</Link>
          </List.Item>
        ))}
      </List> */}
    </Container>
  );
}