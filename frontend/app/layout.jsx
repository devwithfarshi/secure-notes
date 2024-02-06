import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
export const metadata = {
  title: "Secure Notes",
  description: "Keep your notes safe!",
};

export default function RootLayout({ children }) {
  return (
    <html className="dark" lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="images/favicon/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="icon"
          href="images/favicon/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body className="bg-light dark:bg-dark text-bgDark dark:text-light">
        <div className="container">{children}</div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          bodyClassName={"toast-container"}
        />
      </body>
    </html>
  );
}
