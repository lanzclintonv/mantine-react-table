import Link from 'next/link';
import { Anchor, Box, Button, Stack, Text, Title } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import { HomeCards } from '../components/mdx/HomeCards';
import { LinkCards } from '../components/mdx/LinkCards';
import { StatBadges } from '../components/mdx/StatBadges';
import { ComparisonTable } from '../components/mdx/ComparisonTable';
import { LinkHeading } from '../components/mdx/LinkHeading';
import { FeatureTable } from '../components/mdx/FeatureTable';
import { SampleCodeSnippet } from '../components/mdx/SampleCodeSnippet';
import { getPrimaryShade } from 'mantine-react-table/src/column.utils';

const HomePage = () => {
  return (
    <>
      <Stack sx={{ maxWidth: '95ch', margin: 'auto' }}>
        <Title
          sx={{
            textAlign: 'center',
            fontSize: '5rem',
            fontWeight: 'bold',
            marginTop: '5rem',
            marginBottom: '2rem',
            lineHeight: '6rem',
            '@media (max-width: 1024px)': {
              fontSize: '3rem',
              lineHeight: '4rem',
              marginBottom: '16px',
            },
            '@media (max-width: 768px)': {
              fontSize: '32px',
              lineHeight: '3rem',
            },
          }}
          order={1}
        >
          Welcome To
          <br />
          <Box
            sx={(theme) => ({
              background: `-webkit-linear-gradient(left, ${
                theme.colors[theme.primaryColor][getPrimaryShade(theme)]
              }, ${theme.colors.teal[7]})`,
              display: 'inline',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            })}
          >
            Mantine&nbsp;React&nbsp;Table
            <Box
              component="sup"
              sx={(theme) => ({
                background: `-webkit-linear-gradient(left, ${theme.colors.teal[7]}, ${theme.colors.teal[7]})`,
                display: 'inline',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '32px',
                '@media (max-width: 768px)': {
                  fontSize: '24px',
                },
              })}
            >
              V1
            </Box>
          </Box>
        </Title>
        <Title
          color="dimmed"
          sx={{
            fontSize: '2.25rem',
            marginBottom: '2rem',
            textAlign: 'center',
            lineHeight: '2.25rem',
            fontWeight: 'normal',
            '@media (max-width: 768px)': {
              fontSize: '24px',
            },
          }}
          order={2}
        >
          Built with{' '}
          <Link href="https://mantine.dev/" passHref legacyBehavior>
            <Anchor
              sx={(theme) => ({
                color: theme.colors[theme.primaryColor][getPrimaryShade(theme)],
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              })}
              target="_blank"
              rel="noreferrer"
            >
              Mantine<sup>V5</sup>
            </Anchor>
          </Link>{' '}
          and&nbsp;
          <Link href="https://tanstack.com/table/v8" passHref legacyBehavior>
            <Anchor
              color="teal"
              sx={{
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
              target="_blank"
              rel="noreferrer"
            >
              TanStack&nbsp;Table<sup>V8</sup>
            </Anchor>
          </Link>
        </Title>
        <StatBadges />
        <Title
          color="dimmed"
          sx={{
            fontSize: '24px',
            marginTop: '2rem',
            textAlign: 'center',
            lineHeight: '32px',
            fontWeight: 'normal',
            textTransform: 'capitalize',
            '@media (max-width: 768px)': {
              fontSize: '1.2rem',
            },
          }}
          order={3}
        >
          Quickly create high-quality React data tables with
          Material&nbsp;Design
        </Title>
        <Box
          sx={{
            margin: '3rem auto',
            marginBottom: '16px',
            display: 'grid',
            gap: '24px',
            width: '100%',
            justifyContent: 'center',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            '@media (max-width: 1024px)': {
              gridTemplateColumns: '16rem 16rem',
            },
            '@media (max-width: 768px)': {
              gridTemplateColumns: '16rem',
            },
            '> a': {
              display: 'block',
            },
          }}
        >
          <Link href="/docs/getting-started/install" passHref>
            <Button
              rightIcon={<IconChevronRight />}
              fullWidth
              size="lg"
              variant="filled"
            >
              Get Started
            </Button>
          </Link>
          <Link href="/docs/api" passHref>
            <Button
              rightIcon={<IconChevronRight />}
              fullWidth
              size="lg"
              sx={(theme) => ({
                backgroundColor: theme.fn.rgba(
                  theme.colors[theme.primaryColor][getPrimaryShade(theme)],
                  0.1,
                ),
                color: theme.colors[theme.primaryColor][getPrimaryShade(theme)],
                '&:hover': {
                  backgroundColor: theme.fn.rgba(
                    theme.fn.darken(
                      theme.colors[theme.primaryColor][getPrimaryShade(theme)],
                      0.1,
                    ),
                    0.2,
                  ),
                },
              })}
              variant="filled"
            >
              API
            </Button>
          </Link>
          <Link href="/docs/examples" passHref>
            <Button
              rightIcon={<IconChevronRight />}
              fullWidth
              size="lg"
              sx={(theme) => ({
                backgroundColor: theme.fn.rgba(
                  theme.colors[theme.primaryColor][getPrimaryShade(theme)],
                  0.1,
                ),
                color: theme.colors[theme.primaryColor][getPrimaryShade(theme)],
                '&:hover': {
                  backgroundColor: theme.fn.rgba(
                    theme.fn.darken(
                      theme.colors[theme.primaryColor][getPrimaryShade(theme)],
                      0.1,
                    ),
                    0.2,
                  ),
                },
              })}
              variant="filled"
            >
              Examples
            </Button>
          </Link>
          <Link href="/docs/guides" passHref>
            <Button
              rightIcon={<IconChevronRight />}
              fullWidth
              size="lg"
              sx={(theme) => ({
                backgroundColor: theme.fn.rgba(
                  theme.colors[theme.primaryColor][getPrimaryShade(theme)],
                  0.1,
                ),
                color: theme.colors[theme.primaryColor][getPrimaryShade(theme)],
                '&:hover': {
                  backgroundColor: theme.fn.rgba(
                    theme.fn.darken(
                      theme.colors[theme.primaryColor][getPrimaryShade(theme)],
                      0.1,
                    ),
                    0.2,
                  ),
                },
              })}
              variant="filled"
            >
              Guides
            </Button>
          </Link>
        </Box>
        <Box py="16px">
          <SampleCodeSnippet className="language-bash">
            npm i mantine-react-table @mantine/core @mantine/hooks
            @emotion/react @tabler/icons
          </SampleCodeSnippet>
        </Box>
        <HomeCards />
      </Stack>
      <Title
        sx={{
          textAlign: 'center',
          marginTop: '5rem',
          fontSize: '32px',
        }}
        order={3}
      >
        Is{' '}
        <Box
          sx={(theme) => ({
            background: `-webkit-linear-gradient(left, ${
              theme.colors[theme.primaryColor][getPrimaryShade(theme)]
            }, ${theme.colors.teal[7]})`,
            display: 'inline',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          })}
        >
          &lt;MantineReactTable&nbsp;/&gt;
        </Box>{' '}
        Right For Your Project?
      </Title>
      <LinkHeading
        color="dimmed"
        sx={{
          margin: '2rem auto',
          justifyContent: 'center',
        }}
        order={4}
      >
        Let&apos;s Compare
      </LinkHeading>
      <ComparisonTable />
      <LinkHeading
        color="dimmed"
        sx={{
          justifyContent: 'center',
          margin: '2rem auto',
        }}
        order={4}
      >
        Feature Comparison
      </LinkHeading>
      <FeatureTable />
      <Text component="p" size="sm" sx={{ marginTop: '16px' }}>
        *If you see any inaccuracies in this table, PRs are welcome!
      </Text>
      <LinkCards />
    </>
  );
};

export default HomePage;