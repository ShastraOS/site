import React from 'react';
import NextLink from 'next/link';
import { Section, Container, Box, Heading, Flex, Paragraph, } from '@modulz/design-system';
import { HomepageButton } from '@components/HomepageButton';
import { ArrowRightIcon, ExternalLinkIcon,} from '@modulz/radix-icons';
import { Community } from './Community';

export function Hero() {
  const [hasCopied, setHasCopied] = React.useState(false);

  return (
    <Section
      size={{
        '@initial': '2',
        '@bp1': '3',
      }}
      css={{
        pt: '$3',
        '@bp2': {
          pt: '$6',
        },
      }}
    >
      <Container size="4">
        <Heading
        as="h2"
          size="4"
          css={{
            background: 'linear-gradient(to right, #bfe5ff, #9e77ed)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
            mb: '$3',
            '@bp1': {
              pr: 100,
            },
            fontWeight: 700,
            '@bp2': {
              ta: 'left',
              px: 180,
            },
            '@bp3': {
              px: 200,
            },
          }}
        >You deserve a better workstation!
        </Heading>
        <Heading
        as="h3"
          size="2"
          css={{
            background: 'linear-gradient(to left, #ad67cd, #b48fff)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
            mb: '$3',
            '@bp1': {
              pr: 100,
            },
            fontWeight: 700,
            '@bp2': {
              ta: 'left',
              px: 180,
            },
            '@bp3': {
              px: 200,
            },
          }}
        >Decentralized Desktop OS For 21st Century!
        </Heading>
        <Paragraph
          size="2"
          as="h4"
          css={{
            mb: '$8',
            '@bp2': {
              mx: 210,
              ta: 'left',
              mb: '$9',
            },
          }}
        >
        A workstation that brings full privacy and security with fluent experience.
        </Paragraph>
        <Flex css={{ '@bp2': { mx: 210, jc: 'left', my: '$5' } }}>
          <HomepageButton
            css={{ mr: '$1' }}
            as="a"
            href="/preview"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developer Preview
            <Box css={{ ml: '$1' }}>
              <ExternalLinkIcon />
            </Box>
          </HomepageButton>
        </Flex>
      </Container>
      <Community />
      </Section>
  );
}
