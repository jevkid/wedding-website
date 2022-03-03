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
import { date, venue } from './constants';
import { format, formatDistanceStrict } from 'date-fns';
import styles from './styles/index.css';

interface LayoutProps {
  children: any;
}

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=BhuTuka+Expanded+One&family=IM+Fell+Double+Pica:ital@0;1&family=Josefin+Slab:wght@200;300;500&family=Jost:wght@100;200;300&family=Poppins:ital,wght@0,300;0,400;0,500;1,300&display=swap',
    },
  ];
}

export const meta: MetaFunction = () => {
  return { title: 'M&S Wedding' };
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="app__container">
      <div className="navbar">
        <div className="app__navigation--mobile">
          <input className="nav-checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-menu">
            <span className="hamburger-menu__line hamburger-menu__line--line1"></span>
            <span className="hamburger-menu__line hamburger-menu__line--line2"></span>
            <span className="hamburger-menu__line hamburger-menu__line--line3"></span>
          </div>
          <div className="logo">
            <h1>Megan &amp; Simon</h1>
          </div>
          <div className="hamburger-menu__items">
            <li>
              <a className="navLink" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="navLink" href="/rsvp">
                RSVP
              </a>
            </li>
            <li>
              <a className="navLink" href="/travel">
                Travel
              </a>
            </li>
            <li>
              <a className="navLink" href="/travel">
                Schedule
              </a>
            </li>
            <li>
              <a className="navLink" href="/travel">
                Registry
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className="app__titleContainer--mobile">
        <h3 className="app__titleContainer--subtitle">
          {format(date, 'MMMM do, yyyy')} &middot; {venue.city}, {venue.country}
        </h3>
      </div>
      <div className="app__titleContainer--desktop">
        <h1 className="app__titleContainer--desktop--title">
          Megan &amp; Simon
        </h1>
        <h3 className="app__titleContainer--desktop--subtitle">
          {format(date, 'MMMM do, yyyy')} &middot; {venue.city}, {venue.country}
        </h3>
        <h3 className="app__titleContainer--desktop--subtitle">
          {formatDistanceStrict(date, new Date(), { unit: 'day' })} to go
        </h3>
      </div>
      <nav>
        <div className="app__navigation--desktop">
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/rsvp">
            RSVP
          </Link>
          <Link className="navLink" to="/travel">
            Travel
          </Link>
          <Link className="navLink" to="/travel">
            Things to do
          </Link>
          <Link className="navLink" to="/travel">
            Schedule
          </Link>
          <Link className="navLink" to="/travel">
            Registry
          </Link>
        </div>
      </nav>
      <hr className="divider" />
      {children}
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
        <div className="error__container">
          <h1>Oops, sorry about this.</h1>
          <p>Could you hit the back button and try again?</p>
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
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
