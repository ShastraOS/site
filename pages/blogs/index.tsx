import NextLink from 'next/link';
import { Box, Container, Text, Flex, Link, Badge } from '@modulz/design-system';
import { parseISO, format } from 'date-fns';
import { authors } from '@data/authors';
import { Titles } from '@components/Titles';
import { getAllFrontmatter } from '@lib/mdx';
import { Header } from '@components/Header';

export default function Blogs({ frontmatters }) {
  return (
    <Box>
      <Titles title="Blogs" description="Posting Soon..." />

      <Header />

      <Container size="3" css={{ textAlign: 'center', mb: '$4' }}>
        <Text as="h1" size={{ '@initial': '6', '@bp2': '7' }} css={{ mb: '$4', fontWeight: 500 }}>
          Blogs
        </Text>
        <Text as="h2" size={{ '@initial': '4', '@bp2': '6' }} css={{ color: '$slate11', mb: '$4' }}>
          Posting Soon...
        </Text>
      </Container>

      <Container size="2" css={{ my: '$8' }}>
        {frontmatters.map((frontmatter) => (
          <Box
            key={frontmatter.title}
            css={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Box css={{ mb: '$7' }}>
              <NextLink href={`/blogs/${frontmatter.slug}`} passHref>
                <Link>
                  <Text
                    as="h3"
                    size="6"
                    css={{ display: 'inline', fontWeight: 500, lineHeight: '30px' }}
                  >
                    {frontmatter.title}
                  </Text>
                </Link>
              </NextLink>
              <Flex css={{ mt: '$2', alignItems: 'center' }}>
                <Text as="time" size="2" css={{ color: '$slate11' }}>
                  {format(parseISO(frontmatter.publishedAt), 'MMMM yyyy')}
                </Text>
                <Text size="2" css={{ color: '$slate11' }}>
                  &nbsp;by {authors[frontmatter.by].name}
                </Text>
                {frontmatter.type === 'changelog' && <Badge css={{ ml: '$2' }}>Changelog</Badge>}
              </Flex>
              <Text as="p" size="4" css={{ lineHeight: '25px', mt: '$2', color: '$slate11' }}>
                {frontmatter.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export function getStaticProps() {
  const frontmatters = getAllFrontmatter('blogs');
  const sortedFrontmatters = frontmatters.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return { props: { frontmatters: sortedFrontmatters } };
}
