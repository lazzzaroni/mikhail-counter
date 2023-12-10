import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import fontStylesheetUrl from "./styles/font.css";
import tailwindStylesheetUrl from "./styles/tailwind.css";
import faviconAssetUrl from "./assets/favicon.svg";

export const meta: MetaFunction = () => {
  return [
    { title: "Mikhail Counter" },
    { name: "description", content: "Mikhail Counter" },
  ];
};
export const links: LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: faviconAssetUrl },
  { rel: "stylesheet", href: tailwindStylesheetUrl },
  { rel: "stylesheet", href: fontStylesheetUrl },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
