import {
    Section,
    Container,
    Box,
    Card,
    Grid,
    Heading,
    Text,
    Paragraph,
  } from '@modulz/design-system';
  
  export function Community() {
    return (
      <Section size={{ '@initial': '2', '@bp1': '3' }}>
        <Container size="2">
          <Heading as="h3" size="3" css={{ ta: 'center', mb: '$2' }}>
            Cooking...
          </Heading>
          <Paragraph size="2" css={{ ta: 'center', mb: '$8' }}>
            Till then get involved with BUIDLERS
          </Paragraph>
  
          <Grid
            css={{
              gap: '$3',
              gridTemplateColumns: '1fr',
              mx: '-$3',
              '@bp2': {
                gap: '$4',
                gridTemplateColumns: '1fr 1fr 1fr',
                mx: '-$4',
              },
            }}
          >
            <Box>
              <Card
                variant="ghost"
                as="a"
                href="https://twitter.com/shastraos"
                target="_blank"
                rel="noopener noreferrer"
                css={{
                  p: '$4',
                }}
              >
                <Box css={{ mb: '$5' }}>
                  <svg
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M28.9993 6.50637C27.9673 6.9667 26.8601 7.27923 25.6985 7.4186C26.8851 6.70064 27.796 5.56035 28.2222 4.20468C27.1108 4.87196 25.8823 5.35341 24.5745 5.61525C23.5258 4.48764 22.0341 3.78235 20.3795 3.78235C17.2082 3.78235 14.6343 6.38389 14.6343 9.58936C14.6343 10.0455 14.6845 10.4889 14.7848 10.9113C10.009 10.6705 5.77634 8.35616 2.94345 4.84239C2.45041 5.69972 2.16629 6.69641 2.16629 7.76068C2.16629 9.77519 3.18162 11.5532 4.72341 12.5921C3.78329 12.5626 2.89749 12.3007 2.12033 11.8657C2.12033 11.8911 2.12033 11.9122 2.12033 11.9375C2.12033 14.7502 4.10084 17.0984 6.729 17.6305C6.24849 17.7614 5.73874 17.8332 5.21645 17.8332C4.84458 17.8332 4.48525 17.7952 4.13427 17.7276C4.86547 20.0335 6.98805 21.7144 9.49921 21.7609C7.53123 23.3193 5.05768 24.2484 2.36267 24.2484C1.89888 24.2484 1.44344 24.2188 0.992188 24.1681C3.5326 25.8152 6.55351 26.7781 9.80005 26.7781C20.367 26.7781 26.1456 17.9303 26.1456 10.2566C26.1456 10.0032 26.1414 9.75407 26.1289 9.5049C27.2528 8.68558 28.2264 7.66355 28.9952 6.49792L28.9993 6.50637Z"
                        fill="#1d9bf0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="28" height="23" fill="white" transform="translate(1 3.78235)" />
                      </clipPath>
                    </defs>
                  </svg>
                </Box>
                <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                  Follow on Twitter
                </Text>
                <Text as="p" size="3" css={{ lineHeight: '23px', color: '$slate11' }}>
                Stay updated with latest posts and announcements on our Twitter. An emerging community is aiting or you there!
                </Text>
              </Card>
            </Box>
            <Box>
              <Card
                variant="ghost"
                as="a"
                href="https://guild.xyz/shastraos"
                target="_blank"
                rel="noopener noreferrer"
                css={{
                  p: '$4',
                }}
              >
                <Box css={{ mb: '$5' }}>
                  <svg
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.3899 23.9519C21.1526 24.8925 22.0678 25.9858 22.0678 25.9858C27.391 25.8172 29.5878 22.5222 29.8042 22.1977C29.8162 22.1797 29.8221 22.1709 29.8221 22.1722C29.8221 14.062 26.1611 7.47729 26.1611 7.47729C22.5255 4.75695 19.0424 4.83322 19.0424 4.83322L18.6865 5.24C23.0085 6.53661 25.017 8.44339 25.017 8.44339C22.3729 7.01966 19.7797 6.3078 17.3645 6.02814C15.5339 5.82475 13.7797 5.8756 12.2289 6.07899C12.0957 6.07899 11.9819 6.09836 11.8537 6.1202C11.835 6.12337 11.816 6.1266 11.7967 6.12983C10.9068 6.23153 8.74581 6.53661 6.02547 7.73153C5.08479 8.13831 4.52547 8.44339 4.52547 8.44339C4.52547 8.44339 6.61022 6.43492 11.1865 5.13831L10.9323 4.83322C10.9323 4.83322 7.47462 4.75695 3.81361 7.47729C3.81361 7.47729 0.152588 14.062 0.152588 22.1722C0.152588 22.1722 2.28818 25.8332 7.90683 26.0112C7.90683 26.0112 8.8475 24.8925 9.61022 23.9264C6.3814 22.9603 5.16106 20.9519 5.16106 20.9519C5.16106 20.9519 5.4153 21.1298 5.87293 21.3841C5.88864 21.3841 5.90435 21.3938 5.92607 21.4072C5.93949 21.4155 5.9552 21.4252 5.97462 21.4349C6.01276 21.4603 6.05089 21.4794 6.08903 21.4985C6.12717 21.5175 6.1653 21.5366 6.20344 21.562C6.83903 21.918 7.47462 22.1976 8.05937 22.4264C9.10174 22.8586 10.3475 23.24 11.7967 23.5197C13.7034 23.8756 15.9407 24.0027 18.3814 23.5451C19.5763 23.3163 20.7967 22.9858 22.0678 22.4519C22.9577 22.1214 23.9492 21.6383 24.9916 20.9519C24.9916 20.9519 23.7204 23.0112 20.3899 23.9519ZM16.9323 17.0112C16.9323 15.4603 18.0763 14.2146 19.5255 14.2146C20.9492 14.2146 22.1187 15.4603 22.1187 17.0112C22.1187 18.562 20.9746 19.8078 19.5255 19.8078C18.1017 19.8078 16.9323 18.562 16.9323 17.0112ZM7.65259 17.0112C7.65259 15.4603 8.79666 14.2146 10.2458 14.2146C11.695 14.2146 12.8645 15.4603 12.839 17.0112C12.839 18.562 11.695 19.8078 10.2458 19.8078C8.82208 19.8078 7.65259 18.562 7.65259 17.0112Z"
                      fill="#7289DA"
                    />
                  </svg>
                </Box>
                <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                  Join Community
                </Text>
                <Text as="p" size="3" css={{ lineHeight: '23px', color: '$slate11' }}>
                You can participate in community activities, forums, receive announcements, attend events, and get early access to upcoming services.
                </Text>
              </Card>
            </Box>
            <Box>
              <Card
                variant="ghost"
                as="a"
                href="https://tally.so/r/n9BR8K"
                target="_blank"
                rel="noopener noreferrer"
                css={{
                  p: '$4',
                  color: '$hiContrast',
                }}
              >
                <Box css={{ mb: '$5' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5" width="30" height="31" id="heart"><defs><clipPath id="a"><path d="M0 38h38V0H0v38Z"></path></clipPath></defs><g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)"><path fill="#78b159" d="M36.885 25.166c0 5.45-4.418 9.868-9.867 9.868-3.308 0-6.227-1.633-8.018-4.129-1.79 2.496-4.71 4.129-8.017 4.129-5.45 0-9.868-4.418-9.868-9.868 0-.772.098-1.52.266-2.241C2.752 14.413 12.216 5.431 19 2.965c6.783 2.466 16.249 11.448 17.617 19.96.17.721.268 1.469.268 2.241"></path></g></svg>
                </Box>
                <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
                  Contribute
                </Text>
                <Text as="p" size="3" css={{ lineHeight: '23px', color: '$slate11' }}>
                  Become contributor at ShastraOS. Your contributions can be recognized and appreciated by the community.
                </Text>
              </Card>
            </Box>
          </Grid>
        </Container>
      </Section>
    );
  }
  