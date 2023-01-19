import { FC, ReactNode } from 'react';

import Head from "next/head";

import { Navbar } from '../ui';

interface LayoutProps {
    children?: ReactNode,
    title?: string
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Arnau MQ"/>
            <meta name="description" content={`Información sobre el pokemon ${title}`} />
            <meta name="keywords" content={`${title} pokemon, pokjedex`} />
        </Head>

        {<Navbar />}

        <main style={{
            padding: "0 20px"
        }}>
            { children }
        </main>
    </>
  )
}