import React from 'react';
import { Section, Container, Box, Heading, Code, Grid, Flex, Tooltip, Text, IconButton, theme, Paragraph, Separator, } from '@modulz/design-system';
import { HomepageButton } from '@components/HomepageButton';
import { ArrowRightIcon, ExternalLinkIcon, CopyIcon, CheckIcon } from '@modulz/radix-icons';
import { Titles } from '@components/Titles';
import { Header } from '@components/Header';
import NextLink from 'next/link';
import { StarFilledIcon } from '@modulz/radix-icons';


export default function Error() {

    return (
        <><Titles title="ShastraOS Preview Release" /><Box
            css={{
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                position: 'absolute',
                zIndex: '-1',
            }} /><Header /><Container size="3">
                <Heading
                    as="h1"
                    size="3"
                    css={{
                        mb: '$3',
                        '@bp1': {
                            pr: 100,
                        },
                        fontWeight: 700,
                        '@bp2': {
                            ta: 'center',
                            px: 180,
                        },
                        '@bp3': {
                            px: 200,
                        },
                    }}
                >
                    Get your device run Preview
                </Heading>
                <Paragraph
                    size="2"
                    as="h4"
                    css={{
                        mb: '$8',
                        '@bp2': {
                            mx: 210,
                            ta: 'center',
                            mb: '$9',
                        },
                    }}
                >
                    Download latest image file and try testing it on your device.
                </Paragraph>
                <Flex css={{ '@bp2': { jc: 'center', my: '$5' } }}>
                    <NextLink href="https://osdn.net/projects/shastraos/downloads/77132/ShastraOS-preview-2022.10.18-x86_64.iso/" passHref>
                    <HomepageButton
                        css={{ mr: '$1' }}
                        as="a"
                        color="indigo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Latest
                        <Box css={{ ml: '$1' }}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        </Box>
                    </HomepageButton>
                    </NextLink>
                    <HomepageButton href="/docs/install" as="a" css={{ mr: '$3' }}>
                        Installation Guide
                            <Box css={{ ml: '$1' }}>
                                <ArrowRightIcon />
                            </Box>
                    </HomepageButton>
                </Flex>
            </Container>
        </>
    );
}
