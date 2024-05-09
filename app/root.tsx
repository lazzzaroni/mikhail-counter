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
import clsx from "clsx";
import { isbot } from "isbot";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";

import Footer from "~/components/footer";
import Header from "~/components/header";

import faviconAssetUrl from "./assets/favicon.svg";
import { themeSessionResolver } from "./sessions.server";
import { keepAwake } from "./sleep.server";
import fontStylesheetUrl from "./styles/font.css";
import tailwindStylesheetUrl from "./styles/tailwind.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Mikhail Counter" },
    {
      name: "description",
      content:
        "Revolutionary app for keeping track of how many times I've been called Mikhail",
    },
  ];
};
export const links: LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: faviconAssetUrl },
  { rel: "stylesheet", href: tailwindStylesheetUrl },
  { rel: "stylesheet", href: fontStylesheetUrl },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export async function loader({ request }: LoaderFunctionArgs) {
  const isBot = isbot(request.headers.get("user-agent"));
  if (!isBot) {
    void keepAwake();
  }
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
        <div className="mx-auto flex h-svh min-w-0 max-w-5xl flex-auto flex-col justify-between p-4">
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
