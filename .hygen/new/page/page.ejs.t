---
to: src/pages/<%= path %>/<%= h.changeCase.paramCase(name) %>.tsx
---

import React, { useState } from 'react';
import Head from 'next/head';
import makeGlobalStyles from 'src/styles/make-global-styles';

interface serverSideProps {
  props: props;
}
interface props {
  props: any;
}

export default function <%= h.changeCase.camel(name) %>(props: props): JSX.Element {
  /**
   * ステートの初期化
   */

  /**
   * イベントハンドラ
   */

  const classes = makeGlobalStyles();
  return (
    <>
      <Head>
        <title><%= h.changeCase.camel(name) %></title>
      </Head>
      <main className={classes.container}></main>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export async function getServerSideProps(ctx: any): Promise<serverSideProps> {
  const props = {};

  return { props };
}
