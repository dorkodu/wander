const DEFAULT_TITLE = 'Wander';
const DEFAULT_DESC = 'Social and Decentralized Knowledge of the Humankind.';

export function getMetadata(pageContext: {
  exports: { documentProps?: { title: string, description: string } }
  documentProps?: { title: string, description: string }
}) {

  const title =
    // For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
    (pageContext.exports.documentProps || {}).title ||
    // For dynamic titles (defined in the `export addContextProps()` of the page's `.page.server.js`)
    (pageContext.documentProps || {}).title ||
    DEFAULT_TITLE;

  const description = 
    (pageContext.exports.documentProps || {}).description ||
    (pageContext.documentProps || {}).description ||
    DEFAULT_DESC;


  return { title, description };
}