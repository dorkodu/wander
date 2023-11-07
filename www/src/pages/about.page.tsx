export { Page, meta };

const meta = {
  title: "About",
  description: "This is the page description.",
};

function Page() {
  return (
    <div>
      <h1>About</h1>
      <p>This is about.</p>
    </div>
  );
}
