// @ts-nocheck
// App info is the namespace used when initializing the ODD SDK program
const appInfo = { creator: "Nullsoft", name: "Winamp" }

// After retrieving a session or loading the file system manually
const fs = session.fs // or program.loadFileSystem(username)

// List the user's public files
await fs.ls(odd.path.directory("public"))

// List the user's private files that belong to a specific app
await fs.ls(odd.path.appData(appInfo))

// Create a sub directory and write to a file
await fs.write(
  odd.path.appData(appInfo, odd.path.file("Sub Directory", "hello.txt")),
  new TextEncoder().encode("👋")
)

// Persist changes and announce them to your other devices
await fs.publish()

// Read from a file
const content = new TextDecoder().decode(
  await fs.read(
    odd.path.appData(appInfo, odd.path.file("Sub Directory", "hello.txt"))
  )
)

// public directory
const publicPath = odd.path.directory("public", "some", "directory")
const publicLinksObject = await fs.ls(publicPath)

// private directory
const privatePath = odd.path.directory("private", "some", "directory")
const privateLinksObject = await fs.ls(privatePath)

// convert private links object to a list
const links = Object.entries(privateLinksObject)

// working with links
const data = await Promise.all(links.map(([name, _]) => {
  return fs.read(
    odd.path.file("private", "some", "directory", name)
  )
}))

// create a directory called "directory" at "public/some/"
const updatedCID = await fs.mkdir(odd.path.directory("public", "some", "directory"))

const fromPath = odd.path.file("public", "doc.md")
const toPath = odd.path.file("private", "Documents", "notes.md")
const updatedCID = await fs.mv(fromPath, toPath)

const updatedCID = await fs.rm(odd.path.file("private", "some", "file"))

const articlePath = odd.path.file("private", "Blog Posts", "article.md")
const file = await fs.get(articlePath)

file.history.list()
// { delta: -1, timestamp: 1606236743 }
// { delta: -2, timestamp: 1606236532 }

// List more than (by default) 5 versions
file.history.list(10)

// Get the previous version
file.history.back()

// Go back two versions
const delta = -2
file.history.back(delta)

// Get a version strictly before a timestamp
// The first version (delta -2) is prior to
// the second version (delta -1) timestamp
file.history.prior(1606236743)

const fs = await program.fileSystem.load(username)

function UCAN() {
  import * as odd from "@oddjs/odd"

  // DIDs
  const ourDID = await odd.did.ucan()
  const otherDID = "did:key:EXAMPLE"

  /**
   * This can be another UCAN which has a bigger, or equal,
   * set of permissions than the UCAN we're building later.
   */
  const possibleProof = null // or, other UCAN.

  /**
   * The UCAN, encoded as a string.
   */
  const ucan = await odd.ucan.build({
    audience: otherDID,
    issuer: ourDID,
    lifetimeInSeconds: 60 * 60 * 24, // UCAN expires in 24 hours
    proof: possibleProof
  })
}

function SESSION() {

  export class Session {
    #crypto: Crypto.Implementation
    #storage: Storage.Implementation
  
    fs?: FileSystem
    type: string
    username: string
  }

  program.on('session:create', ({ session }) => { 
    console.log('A session was created', session)
  })
  
  program.on('session:destroy', ({ username }) => { 
    console.log('A session was destroyed for username', username)
  })

}

function AUTH() {
  const username = "llama"

  // Check if username is valid and available
  const valid = program.auth.isUsernameValid(username)
  const available = await program.auth.isUsernameAvailable(username)

  if (valid && available) {
    // Register the user
    const { success } = await program.auth.register({ username })
    
    // Create a session on success
    const session = success ? program.auth.session() : null
  }

  const agentDID = await program.agentDID()
  const accountDID = await program.accountDID(username)

  // The producer should already have an active session
  const producer = await program.auth.accountProducer(program.session.username)

  // The producer receives a challenge PIN from the consumer
  producer.on("challenge", challenge => {
    // Either show `challenge.pin` or have the user input a PIN and check if they're equal.
    if (userInput === challenge.pin) challenge.confirmPin()
    else challenge.rejectPin()
  })

  // The producer reports whether a user approved or rejected
  producer.on("link", ({ approved }) => {
    if (approved) console.log("Linked device successfully")
  })

  // The username can be transmitted in a QRCode or a copy link
  // Alternatively, the user can enter the username into an input
  const consumer = await program.auth.accountConsumer(username)
  
  // The consumer generates a PIN and sends it to the producer
  consumer.on("challenge", ({ pin }) => {
    // Display the PIN
    showPinOnUI(pin)
  })
  
  // The consumer receives an approval or rejection message from the producer
  consumer.on("link", async ({ approved, username }) => {
    if (approved) {
      console.log(`Successfully authenticated as ${username}`)
      session = await program.auth.session()
    }
  })
}




/*

Components
The elements of a distributed app

The ODD SDK is built on a few foundational blocks, the Webnative File System (), , s, and s. How these pieces are bound to an identity, communicated to other devices and users, encrypted, and transferred, is customizable through components. By default, the ODD SDK uses the Fission infrastructure, but you don't have to.
There are seven components:

- Auth. Responsible for , , and .
- Capabilities. Determines how  are requested and collected.
- Crypto. How should private-public key pairs and symmetric keys be stored? How do I sign a message? Which key types should I support for the did:key method? What are my agent and sharing key pairs?
- Depot. Gets IPLD data in and out of your program by creating and referencing CIDs. File system data is brought in and shipped out through this component.
- Manners. Various behavioral elements. If the debug configuration flag is enabled, how does the logging happen, file system hooks, etc.
- Reference. Responsible for the sources of truth: the data root (root CID of WNFS), the DID root (your account DID, aka. root agent DID), DNS, and repositories of various items.
- Storage. Stores and retrieves ephemeral and session data.

*/