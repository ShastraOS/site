import React from 'react';
import { Section, Container, Box, Heading, Code, Grid, Flex, Tooltip, Text, IconButton, theme, Paragraph, Separator, } from '@modulz/design-system';
import { HomepageButton } from '@components/HomepageButton';
import { ArrowRightIcon, ExternalLinkIcon, CopyIcon, CheckIcon } from '@modulz/radix-icons';
import { Titles } from '@components/Titles';
import { Header } from '@components/Header';
import Avatars from '@components/Avatars';
import NextLink from 'next/link';
import { StarFilledIcon } from '@modulz/radix-icons';

interface SocialLink {
    platform: string;
    url: string;
  }
  
  interface TeamMember {
    name: string;
    avatarUrl: string;
    socialLinks: SocialLink[];
  }
  

export default function Team() {

    return (
        <><Titles title="ShastraOS Team" />
        <Box
        css={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          position: 'absolute',
          zIndex: '-1',
          background:
            'radial-gradient(circle at 95% 10%, $indigo1, rgba(255, 255, 255, 0) 15%), radial-gradient(circle at 30% 20%, $plum6, rgba(255, 255, 255, 0) 45%), radial-gradient(circle at 85% 80%, $plum3, rgba(255, 255, 255, 0) 0%)',
          '@bp2': {
            background:
              'radial-gradient(circle at 15% 90%, $violet8, rgba(255, 255, 255, 0) 50%), radial-gradient(circle at 80% 20%, $indigo6, rgba(255, 255, 255, 0) 50%), radial-gradient(circle at 85% 80%, $indigo1, rgba(255, 255, 255, 0) 0%)',
          },
        }}
      />
        <Box
            css={{
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                position: 'absolute',
                zIndex: '-1',
            }} />
            <Header />
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
                    Meet the #BUIDLERS of ShastraOS
                </Heading>
                <Heading
                    as="h3"
                    size="1"
                    css={{
                        mb: '$4',
                        '@bp1': {
                            pr: 100,
                        },
                        fontWeight: 600,
                        '@bp2': {
                            ta: 'left',
                            px: 180,
                        },
                        '@bp3': {
                            px: 220,
                        },
                    }}
                >
                    We aim to provide a completely decentralised, user's own workstations.
                </Heading>
            </Container>
            <Container size="4"
            css={{
                mb: '$4',
                '@bp1': {
                    pr: 100,
                },
                '@bp2': {
                    ta: 'left',
                    px: 180,
                },
                '@bp3': {
                    px: 220,
                },
            }}>
                <Avatars  />
            </Container>
            </>
    );
}
