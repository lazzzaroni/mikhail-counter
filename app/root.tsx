import { cssBundleHref } from "@remix-run/css-bundle";
import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import fontStylesheetUrl from "./styles/font.css";
import tailwindStylesheetUrl from "./styles/tailwind.css";
import faviconAssetUrl from "./assets/favicon.svg";

import clsx from "clsx";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";

import { themeSessionResolver } from "./sessions.server";
import { ModeToggle } from "./components/mode-toggle";

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

// Return the theme from the session storage using the loader
export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}
// Wrap your app with ThemeProvider.
// `specifiedTheme` is the stored theme in the session storage.
// `themeAction` is the action name that's used to change the theme in the session storage.
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
          <header className="flex justify-between">
            <h1 className="text-2xl">
              <span className="font-light">Mick</span>
              <span className="font-semibold">Pal</span>
            </h1>
            <ModeToggle />
          </header>
          <main className="mx-auto py-10">
            <Outlet />
          </main>
          <footer className="text-center text-sm text-muted-foreground">
            <Link
              to="https://github.com/lazzzaroni"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200 hover:text-foreground hover:underline"
            >
              github
            </Link>
          </footer>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
