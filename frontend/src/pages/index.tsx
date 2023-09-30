import React from 'react';
import Head from 'next/head'
import { t, Trans } from '@lingui/macro';

import { Box, Container, Heading, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
<<<<<<< HEAD
import { getLocalizationServerSideProps, loadCatalog } from '../lib/Lingui';
=======
import { loadCatalog } from '../lib/Lingui';
>>>>>>> 8d7e139 (Shot in the dark)

function Home() {
  return (
    <>
      <Head>
        <title>
          {t`ConquestDB`}
        </title>
      </Head>
      <Container minH="lg">
        <Box
          maxW="64rem"
          marginX="auto"
          py={{ base: "3rem", lg: "4rem" }}
          px={{ base: "1rem", lg: "0" }}
        >
          <Heading>
            {t`Welcome to ConquestDB`}
          </Heading>
          <Text paddingTop="2em">
          </Text>
          <Text paddingTop="2em">
            <Trans>You can view <Link textDecorationLine="underline" as={NextLink} href="/cards">player cards</Link>.</Trans>
          </Text>
        </Box>
      </Container>
    </>
  );
}


<<<<<<< HEAD
export default Home;

export const getServerSideProps = getLocalizationServerSideProps;
=======
export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> {
  // some server side logic

  return {
    props: {
      i18n: await loadCatalog(ctx.locale as string),
    },
  };
}



export default Home;
>>>>>>> 8d7e139 (Shot in the dark)
