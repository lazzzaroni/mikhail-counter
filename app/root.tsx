import { cssBundleHref } from "@remix-run/css-bundle";
import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import faviconAssetUrl from "./assets/favicon.svg";
import fontStylesheetUrl from "./styles/font.css";
import tailwindStylesheetUrl from "./styles/tailwind.css";

import clsx from "clsx";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";

import Footer from "~/components/footer";
import Header from "~/components/header";
import { themeSessionResolver } from "./sessions.server";

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

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

export function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />

        <Links />
      </head>

      <body>
        <div className="mx-auto flex h-svh min-w-0 max-w-xl flex-auto flex-col justify-between p-4">
          <Header />

          <main className="mx-auto py-10">
            <Outlet />
          </main>

          <Footer />
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
