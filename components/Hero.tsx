import React from 'react';
import NextLink from 'next/link';
import { Section, Container, Box, Heading, Grid, Flex, Tooltip, Text, IconButton, Separator, theme, Paragraph, } from '@modulz/design-system';
import { HomepageButton } from '@components/HomepageButton';
import { ArrowRightIcon, ExternalLinkIcon, CopyIcon, CheckIcon } from '@modulz/radix-icons';
import { FeaturesHero } from './FeaturesHero';
import copy from 'copy-to-clipboard';

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
        as="h1"
          size="4"
          css={{
            mb: '$4',
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
        >
          Shastra-OS
        </Heading>
        <Heading
        as="h2"
          size="3"
          css={{
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
        >
          Decentralized Desktop OS For 21st Century!
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
        A desktop that brings full privacy and security with fluent experience. <br />
        Currently under development
        </Paragraph>
        <Flex css={{ '@bp2': { mx: 210, jc: 'left', my: '$5' } }}>
          <NextLink href="/preview" passHref>
            <HomepageButton as="a" color="indigo" css={{ mr: '$3' }}>
              ShastraOS Preview
              <Box css={{ ml: '$1' }}>
                <ArrowRightIcon />
              </Box>
            </HomepageButton>
          </NextLink>
          <HomepageButton
            css={{ mr: '$1' }}
            as="a"
            href="https://guild.xyz/shastraos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Community
            <Box css={{ ml: '$1' }}>
              <ExternalLinkIcon />
            </Box>
          </HomepageButton>
        </Flex>
      </Container>

      <FeaturesHero />
      </Section>
  );
}
