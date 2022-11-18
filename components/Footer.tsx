import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Grid, Text, Flex, Separator, Link } from '@modulz/design-system';
import { LogoShastraB } from '@components/LogoShastraB';

export const Footer = () => {
  return (
    <Box as="footer" css={{ py: '$9' }}>
      <Flex css={{ justifyContent: 'center', mb: '$9' }}>
        <Separator size="2" />
      </Flex>
      <Container size="3">
        <Grid
          css={{
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '$2',
            '& ul': { listStyle: 'none', margin: '0', padding: '0' },
            '@bp2': {
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '$2',
            },
          }}
        >
          <Flex
            css={{
              '@bp2': {
                flexDirection: 'column',
                alignItems: 'center',
              },
            }}
          >
            <NextLink href="/" passHref>
              <Box
                as="a"
                css={{
                  color: '$hiContrast',
                  display: 'inline-flex',
                  '&:focus': {
                    boxShadow: 'none',
                  },
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: 'hidden',
                    clip: 'rect(0, 0, 0, 0)',
                    whiteSpace: 'nowrap',
                    border: 0,
                  }}
                >
                  Homepage
                </span>
                <LogoShastraB />
              </Box>
            </NextLink>
            <Text
              as="h4"
              size="5"
              css={{
                lineHeight: '20px',
                alignItems: 'center',
                ml: '$6',
                color: '$slate11',
                pr: '$8',
                '@bp2': { mt: '$6', ml: '4' },
              }}
            >
              ShastraOS
            </Text>
          </Flex>
          <Box>
            <Text as="h4" size="4" css={{ fontWeight: 500, lineHeight: '30px' }}>
              About
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/overview" passHref>
                    <Link variant="subtle">Introduction</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/team" passHref>
                    <Link variant="subtle">Team</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/faq" passHref>
                    <Link variant="subtle">FAQ</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/blogs" passHref>
                    <Link variant="subtle">Blogs</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
          <Text as="h4" size="4" css={{ fontWeight: 500, lineHeight: '30px' }}>
              Developers
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/devguide" passHref>
                    <Link variant="subtle">Quick Overview</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs" passHref>
                    <Link variant="subtle">Documentation</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/contribute" passHref>
                    <Link variant="subtle">Contribute</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/donate" passHref>
                    <Link variant="subtle">Support Us 💜</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
          <Text as="h4" size="4" css={{ fontWeight: 500, lineHeight: '30px' }}>
              Learn More
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="https://raw.githubusercontent.com/Shastra-OS/shastraos-iso/master/LICENSE" passHref>
                    <Link variant="subtle">Licence</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  {/* <Link
                    variant="subtle"
                    href="/tnc"
                    css={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    Legal Terms
                    <Flex as="span" css={{ ml: '$1', color: '$slate8' }}>
                      <ExternalIcon />
                    </Flex>
                  </Link> */}
                  Legal Terms
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  {/* <Link
                    variant="subtle"
                    href="/privacy"
                    css={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    Privacy Policy
                    <Flex as="span" css={{ ml: '$1', color: '$slate8' }}>
                      <ExternalIcon />
                    </Flex>
                  </Link> */}
                  Privacy Policy
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  {/* <Link
                    variant="subtle"
                    href="/careers"
                    css={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    Careers
                    <Flex as="span" css={{ ml: '$1', color: '$slate8' }}>
                      <ExternalIcon />
                    </Flex>
                  </Link> */}
                </Text>
              </li>
            </ul>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
