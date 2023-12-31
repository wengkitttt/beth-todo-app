import { Html } from "@elysiajs/html";

// color based on https://colorhunt.co/palette/f9f7f7dbe2ef3f72af112d4e

const Layout = (props: { children: any }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://unpkg.com/htmx.org@1.9.10"
          integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
          crossorigin="anonymous"
        ></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          rel="icon"
          href="https://i.ibb.co/Byk375F/favicon-32x32.png"
          type="image/x-icon"
        />
        <title>BETH Todo App</title>
      </head>

      <body class="bg-[#3F72AF] flex w-full h-screen justify-center items-center">
        {props.children}
      </body>
    </html>
  );
};

export default Layout;
