import React from 'react';
import Footer from '@theme-original/Footer';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';

// The Shopify section (/shopify) must stay self-contained: no other sales
// channel or marketplace may be named — or linked — anywhere a Shopify visitor
// or App Store reviewer can see it. The global footer links to Core pages
// (/docs/sales-channels, /docs/integrations, /docs/inventory, /docs/intro) that
// name eBay/Biblio/Alibris marketplaces, so it cannot be shown on /shopify.
//
// This wrapper renders a dedicated, Shopify-scoped footer on every /shopify
// route (only Shopify docs links + generic Help links) and the normal global
// footer everywhere else. The check runs during render, so the server-rendered
// HTML for /shopify pages ships WITHOUT any marketplace link — the isolation
// holds in the static output, not just in the browser.

// Shopify-only documentation links (mirrors shopify/ pages + their sidebar).
const SHOPIFY_DOCS = [
  {label: 'Overview', to: '/shopify'},
  {label: 'Installing the app', to: '/shopify/installing'},
  {label: 'Choosing your inventory source', to: '/shopify/inventory-source'},
  {label: 'Importing a distributor file', to: '/shopify/importing-distributor-file'},
  {label: 'How syncing works', to: '/shopify/how-syncing-works'},
];

const SHOPIFY_MORE = [
  {label: 'How books become products', to: '/shopify/products-and-variants'},
  {label: 'Creating books manually', to: '/shopify/creating-books-manually'},
  {label: 'Customizing product pages', to: '/shopify/customizing-product-pages'},
  {label: 'Frequently asked questions', to: '/shopify/faq'},
];

// Generic Help links — no channel/marketplace names, safe on /shopify.
const HELP = [
  {label: 'Contact support', href: 'mailto:support@bookhead.net'},
  {label: 'Roadmap', href: 'https://bookhead.canny.io'},
  {label: 'Changelog', href: 'https://bookhead.canny.io/changelog'},
  {label: 'Bookhead', href: 'https://bookhead.net'},
];

function FooterColumn({title, items}) {
  return (
    <div className="col footer__col">
      <div className="footer__title">{title}</div>
      <ul className="footer__items clean-list">
        {items.map((item, i) => (
          <li key={i} className="footer__item">
            {item.to ? (
              <Link className="footer__link-item" to={item.to}>
                {item.label}
              </Link>
            ) : (
              <Link className="footer__link-item" href={item.href}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShopifyFooter() {
  return (
    <footer className="footer footer--dark">
      <div className="container container-fluid">
        <div className="row footer__links">
          <FooterColumn title="Bookhead for Shopify" items={SHOPIFY_DOCS} />
          <FooterColumn title="More" items={SHOPIFY_MORE} />
          <FooterColumn title="Help" items={HELP} />
        </div>
        <div className="footer__bottom text--center">
          <div className="footer__copyright">
            {`Copyright © ${new Date().getFullYear()} Bookhead.`}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function FooterWrapper(props) {
  const {pathname} = useLocation();
  const inShopifySection =
    pathname === '/shopify' || pathname.startsWith('/shopify/');

  if (inShopifySection) {
    return <ShopifyFooter />;
  }

  return <Footer {...props} />;
}
