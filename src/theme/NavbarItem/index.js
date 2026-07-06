import React from 'react';
import NavbarItem from '@theme-original/NavbarItem';
import {useLocation} from '@docusaurus/router';

// The Shopify section (/shopify) must stay self-contained: no non-Shopify
// product may be named anywhere a Shopify visitor or App Store reviewer can see
// it — including the global navbar. This wrapper hides both the "Selling on
// channels" dropdown (which names other sales channels) and the "Apps" dropdown
// (which names Canva/ISBN Magic) on every /shopify route, so the Shopify chrome
// names no non-Shopify product.
//
// The check runs during render, so the server-rendered HTML for /shopify pages
// is generated WITHOUT these dropdowns — the isolation holds in the static
// output, not just in the browser.
const HIDDEN_ON_SHOPIFY = new Set(['Selling on channels', 'Apps']);

export default function NavbarItemWrapper(props) {
  const {pathname} = useLocation();
  const inShopifySection = pathname === '/shopify' || pathname.startsWith('/shopify/');

  if (inShopifySection && HIDDEN_ON_SHOPIFY.has(props.label)) {
    return null;
  }

  return <NavbarItem {...props} />;
}
