import React from 'react';
import NextLink from 'next/link';
import { Section, Container, Box, Heading, Code, Grid, Flex, Tooltip, Text, IconButton, theme, Paragraph, } from '@modulz/design-system';
import { HomepageButton } from '@components/HomepageButton';
import { ArrowRightIcon, ExternalLinkIcon, CopyIcon, CheckIcon } from '@modulz/radix-icons';

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
          ShastraOS: Decentralized Desktop OS For 21st Centurary.
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
        A desktop that brings full privacy and security with fluent exprience.
        </Paragraph>
        <Flex css={{ '@bp2': { jc: 'center', my: '$5' } }}>
          <NextLink href="/docs" passHref>
            <HomepageButton as="a" color="violet" css={{ mr: '$3' }}>
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

      <Section size={{ '@initial': '2', '@bp1': '3' }}>
        <Container size="3">

          <Heading as="h3" size="3" css={{ fontWeight: 700, ta: 'center', mb: '$8' }}>
            Why ShastraOS
          </Heading>

        <Grid
          css={{
            gap: '$6',
            gridTemplateColumns: '1fr',
            '@bp1': {
              gap: '$7',
              gridTemplateColumns: '1fr 1fr',
            },
            '@bp2': {
              gap: '$7',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
            },
          }}
        >
          <Box>
            <Flex
              css={{
                ai: 'center',
                jc: 'center',
                width: '$7',
                height: '$7',
                borderRadius: '$round',
                backgroundColor: '$violet5',
                color: '$violet10',
                mb: '$4',
              }}
            >
            <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.25C1 3.11193 1.11193 3 1.25 3H13.75C13.8881 3 14 3.11193 14 3.25V10.75C14 10.8881 13.8881 11 13.75 11H1.25C1.11193 11 1 10.8881 1 10.75V3.25ZM1.25 2C0.559643 2 0 2.55964 0 3.25V10.75C0 11.4404 0.559644 12 1.25 12H5.07341L4.82991 13.2986C4.76645 13.6371 5.02612 13.95 5.37049 13.95H9.62951C9.97389 13.95 10.2336 13.6371 10.1701 13.2986L9.92659 12H13.75C14.4404 12 15 11.4404 15 10.75V3.25C15 2.55964 14.4404 2 13.75 2H1.25ZM9.01091 12H5.98909L5.79222 13.05H9.20778L9.01091 12Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </Flex>
            <Heading as="h4" css={{ mb: '$2' }}>
              Your Own
            </Heading>
            <Text
              as="p"
              size={{
                '@initial': '4',
                '@bp1': '3',
              }}
              variant="gray"
              css={{
                lineHeight: '25px',
              }}
            >
              ShastraOS is privacy focused decentralized OS, gives you your personal workstation feeling. With ShastraOS backups you will able to take backup of your private data and will safely hosted on IPFS.
            </Text>
          </Box>
          <Box>
            <Flex
              css={{
                ai: 'center',
                jc: 'center',
                width: '$7',
                height: '$7',
                borderRadius: '$round',
                backgroundColor: '$violet5',
                color: '$violet10',
                mb: '$4',
              }}
            >
              
              <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </Flex>
            <Heading as="h4" css={{ mb: '$2' }}>
              Powerful
            </Heading>
            <Text
              as="p"
              size={{
                '@initial': '4',
                '@bp1': '3',
              }}
              variant="gray"
              css={{
                lineHeight: '25px',
              }}
            >
              ShastraOS is based on Arch Linux, and comes with enhanced security. ShastraOS is completly focused on users privacy and gives privacy in user's hand.
            </Text>
          </Box>
          <Box>
            <Flex
              css={{
                ai: 'center',
                jc: 'center',
                width: '$7',
                height: '$7',
                borderRadius: '$round',
                backgroundColor: '$violet5',
                color: '$violet10',
                mb: '$4',
              }}
            >
              <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14921 3.99996C2.14921 2.97778 2.97784 2.14915 4.00002 2.14915C5.02219 2.14915 5.85083 2.97778 5.85083 3.99996C5.85083 5.02213 5.02219 5.85077 4.00002 5.85077C2.97784 5.85077 2.14921 5.02213 2.14921 3.99996ZM4.00002 1.24915C2.48079 1.24915 1.24921 2.48073 1.24921 3.99996C1.24921 5.51919 2.48079 6.75077 4.00002 6.75077C5.51925 6.75077 6.75083 5.51919 6.75083 3.99996C6.75083 2.48073 5.51925 1.24915 4.00002 1.24915ZM5.82034 11.0001L2.49998 12.8369V9.16331L5.82034 11.0001ZM2.63883 8.21159C2.17228 7.9535 1.59998 8.29093 1.59998 8.82411V13.1761C1.59998 13.7093 2.17228 14.0467 2.63883 13.7886L6.57235 11.6126C7.05389 11.3462 7.05389 10.654 6.57235 10.3876L2.63883 8.21159ZM8.30001 9.00003C8.30001 8.61343 8.61341 8.30003 9.00001 8.30003H13C13.3866 8.30003 13.7 8.61343 13.7 9.00003V13C13.7 13.3866 13.3866 13.7 13 13.7H9.00001C8.61341 13.7 8.30001 13.3866 8.30001 13V9.00003ZM9.20001 9.20003V12.8H12.8V9.20003H9.20001ZM13.4432 2.19311C13.6189 2.01737 13.6189 1.73245 13.4432 1.55671C13.2675 1.38098 12.9826 1.38098 12.8068 1.55671L11 3.36353L9.19321 1.55674C9.01748 1.381 8.73255 1.381 8.55682 1.55674C8.38108 1.73247 8.38108 2.0174 8.55682 2.19313L10.3636 3.99992L8.55682 5.80671C8.38108 5.98245 8.38108 6.26737 8.55682 6.44311C8.73255 6.61885 9.01748 6.61885 9.19321 6.44311L11 4.63632L12.8068 6.44314C12.9826 6.61887 13.2675 6.61887 13.4432 6.44314C13.6189 6.2674 13.6189 5.98247 13.4432 5.80674L11.6364 3.99992L13.4432 2.19311Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </Flex>
            <Heading as="h4" css={{ mb: '$2' }}>
              Best UI Experience
            </Heading>
            <Text
              as="p"
              size={{
                '@initial': '4',
                '@bp1': '3',
              }}
              variant="gray"
              css={{
                lineHeight: '25px',
              }}
            >
              ShastraOS comes with lastest Gnome Desktop, which gives you modern asthetic experience. ShastraOS Dash customization makes desktop more easy and complete.
            </Text>
          </Box>
          <Box>
            <Flex
              css={{
                ai: 'center',
                jc: 'center',
                width: '$7',
                height: '$7',
                borderRadius: '$round',
                backgroundColor: '$violet5',
                color: '$violet10',
                mb: '$4',
              }}
            >
              <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.30902 1C2.93025 1 2.58398 1.214 2.41459 1.55279L1.05279 4.27639C1.01807 4.34582 1 4.42238 1 4.5V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V4.5C14 4.42238 13.9819 4.34582 13.9472 4.27639L12.5854 1.55281C12.416 1.21403 12.0698 1.00003 11.691 1.00003L7.5 1.00001L3.30902 1ZM3.30902 2L7 2.00001V4H2.30902L3.30902 2ZM8 4V2.00002L11.691 2.00003L12.691 4H8ZM7.5 5H13V13H2V5H7.5ZM5.5 7C5.22386 7 5 7.22386 5 7.5C5 7.77614 5.22386 8 5.5 8H9.5C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7H5.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </Flex>
            <Heading as="h4" css={{ mb: '$2' }}>
              All your apps
            </Heading>
            <Text
              as="p"
              size={{
                '@initial': '4',
                '@bp1': '3',
              }}
              variant="gray"
              css={{
                lineHeight: '25px',
              }}
            >
              All your needed applications are here.
              ShastraOS comes with it's own packages repositories, which gives you choice to download your favorite applications from thousands of packages.
            </Text>
          </Box>
        </Grid>
      </Container>
      </Section>
    </Section>
  );
}
