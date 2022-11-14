import { Box, Flex, Text } from '@modulz/design-system';

const getBarColor = (name) => {
  switch (name) {
    case 'ShastraOS':
      return '$indigo9';
    case 'ShastraOS Preview':
      return '$indigo9';
    case 'ShastraOS Beta':
      return '$indigo8';
    case 'Installer':
      return '$indigo8';
    default:
      return 'gray';
  }
};

export function BenchmarkChart({ data }) {
  const maxValue = Math.max(...data.map((r) => r.value));

  return (
    <Flex css={{ gap: '$2', mt: '$4' }}>
      <Box css={{ flex: '0 1 auto' }}>
        {data.map((result) => (
          <Text
            key={result.name}
            size="1"
            css={{
              my: '$1',
              lineHeight: '$sizes$5',
              whiteSpace: 'nowrap',
              ta: 'right',
              fontWeight:
                result.name === 'ShastraOS' || result.name === 'ShastraOS Preview' ? '500' : '400',
            }}
          >
            {result.name}
          </Text>
        ))}
      </Box>
      <Box css={{ flex: '1 1 100%' }}>
        {data.map((result) => (
          <Flex
            key={result.name}
            css={{ alignItems: 'center', gap: '$2', my: '$1', paddingRight: '57px' }}
          >
            <Box
              css={{
                height: '$5',
                bc: getBarColor(result.name),
                width: `${(result.value / maxValue) * 100}%`,
                position: 'relative',
              }}
            >
              <Text
                size="1"
                css={{
                  lineHeight: '$sizes$5',
                  whiteSpace: 'nowrap',
                  position: 'absolute',
                  right: '-$1',
                  transform: 'translateX(100%)',
                }}
              >
                {result.value}ms
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
}
