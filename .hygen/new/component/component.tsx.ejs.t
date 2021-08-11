---
to: src/components/<%= path %>/<%= h.changeCase.paramCase(name) %>.tsx
---
import React, { useState } from 'react';
import makeGlobalStyles from 'src/styles/make-global-styles';

interface props {
  props: any;
}

export default function <%= h.changeCase.camel(name) %>(props: props): JSX.Element {
  const urlBase = process.env.NEXT_PUBLIC_REQUEST_URL_BASE;
  /**
   * ステートの初期化
   */

  /**
   * イベントハンドラ
   */

  const classes = makeGlobalStyles();
  return (
    <>
      <h1>content</h1>
    </>
  );
}
