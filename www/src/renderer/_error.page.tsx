export { Page };

function Page({ is404 }: { is404: boolean }) {
  if (is404) {
    return <Error404 />;
  } else {
    return <Error500 />;
  }
}

const Error404 = () => (
  <div>
    <h1>404 Page Not Found</h1>
    <p>This page could not be found.</p>
  </div>
);

const Error500 = () => (
  <div>
    <h1>500 Internal Server Error</h1>
    <p>Well, something is broken.</p>
  </div>
);
