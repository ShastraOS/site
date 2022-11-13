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
        <><Titles title="Oops! you got wrong way" /><Box
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
                    404
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
                    The page you're looking for couldn't be found.
                </Paragraph>
                <Flex css={{ '@bp2': { jc: 'center', my: '$5' } }}>
                    <NextLink href="/" passHref>
                        <HomepageButton as="a" color="violet" css={{ mr: '$3' }}>
                            Return Home
                            <Box css={{ ml: '$1' }}>
                                <ArrowRightIcon />
                            </Box>
                        </HomepageButton>
                    </NextLink>
                </Flex>
            </Container>
        </>
    );
}
