import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
  Link,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { ArrowLeft, Home } from "lucide-react";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="min-h-screen bg-[#fffaf8] relative overflow-hidden flex items-center justify-center">
          {/* Background Elements */}
          <div className="absolute top-20 -left-96 w-[500px] h-[500px] bg-[#ff9b71]/10 rounded-full blur-3xl opacity-80" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#ff9b71]/5 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
            {/* 404 Text */}
            <h1 className="text-9xl font-bold text-[#ff9b71]">
              {isRouteErrorResponse(error) ? error.status : "Error"}
            </h1>
            
            {/* Message */}
            <h2 className="mt-8 text-3xl font-bold text-gray-900">
              {isRouteErrorResponse(error) 
                ? "Oops! Page Not Found" 
                : "Oops! Something went wrong"}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {isRouteErrorResponse(error)
                ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
                : "An unexpected error occurred. Please try again later."}
            </p>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-[#ff9b71] text-white font-semibold rounded-xl 
                hover:bg-[#ffb699] transition-all duration-200 gap-2"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center px-6 py-3 bg-[#ff9b71]/10 text-[#ff9b71] font-semibold rounded-xl 
                hover:bg-[#ff9b71]/20 transition-all duration-200 gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>

            {/* Additional Help */}
            <p className="mt-12 text-gray-600">
              Need assistance?{" "}
              <Link
                to="/main/contact"
                className="text-[#ff9b71] hover:text-[#ffb699] font-semibold"
              >
                Contact Support
              </Link>
            </p>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
