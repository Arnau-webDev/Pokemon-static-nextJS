import { FC, ReactNode } from 'react';

import Head from "next/head";

import { Navbar } from '../ui';

interface LayoutProps {
    children?: ReactNode,
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title }) => {

  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Arnau MQ"/>
            <meta name="description" content={`Información sobre el pokemon ${title}`} />
            <meta name="keywords" content={`${title} pokemon, pokjedex`} />

            <meta property="og:title" content={`Información sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
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