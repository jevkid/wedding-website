import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix';
import type { MetaFunction } from 'remix';
import mainStyles from './tailwind.css';
import styles from './styles/index.css';

interface LayoutProps {
  children: any;
}

export function links() {
  return [
    { rel: 'stylesheet', href: mainStyles },
    { rel: 'stylesheet', href: styles },
  ];
}

export const meta: MetaFunction = () => {
  return { title: 'M&S Wedding' };
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="app__container">
      <div className="app__navigation--list">
        <Link to="/">Home</Link>
        <Link to="/rsvp">RSVP</Link>
        <Link to="/travel">Travel</Link>
        <Link to="/travel">Things to do</Link>
        <Link to="/travel">Schedule</Link>
        <Link to="/travel">Registry</Link>
      </div>
      <div className="app__main">{children}</div>
    </div>
  );
}

interface ErrorBoundaryProps {
  error: Error;
}

export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

interface DocumentProps {
  children: any;
  title?: string;
}

function Document({ children, title }: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}