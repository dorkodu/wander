/* eslint-disable @typescript-eslint/ban-ts-comment */

import * as Wander from "@wander/sdk";

export const peer = new Wander.Peer({ seeds: [], logging: true, cache: false });

peer.accessClaim('myfavoritedrinks', [{ who: "", read: true, write: true }]);
peer.accessClaim('*', [{ who: "", read: true, write: true }]);
peer.cache('/myfavoritedrinks/');

peer.on('connected', () => {
  const userAddress = peer.remote.userAddress;
  console.debug(`${userAddress} connected their remote storage.`);
});

peer.on('network-offline', () => {
  console.debug(`We're offline now.`);
});

peer.on('network-online', () => {
  console.debug(`Hooray, we're back online.`);
});


/**
  Known issues
  Storing files larger than 150MB is not yet supported

  Listing and deleting folders with more than 10000 files will cause problems

  Content-Type is not fully supported due to limitations of the Dropbox API

  Dropbox preserves cases but is not case-sensitive

  getItemURL is not implemented yet (see issue #1052)

  Create a new “scoped” app for the “Dropbox API”, with these scopes:
  account_info.read

  files.metadata.read

  files.metadata.write

  files.content.read

  files.content.write

 */

  const client = peer.space('/foo/');

  // List all items in the "foo/" category/folder
  client.getListing('')
    .then(listing => console.log(listing));
  
  // Write some text to "foo/bar.txt"
  const content = 'The most simple things can bring the most happiness.'
  client.storeFile('text/plain', 'bar.txt', content)
    .then(() => console.log("data has been saved"));
  
  const Bookmarks = { 
    name: 'bookmarks', 
    types: {
      "Bookmark": 
    }
    builder: function(privateClient, publicClient) {
  
  
      return {
        exports: {
  
        add: function (bookmark) {
          bookmark.id = md5Hash(bookmark.url); // hash URL for nice ID
          var path = "archive/" + bookmark.id; // use hashed URL as filename as well
  
          return privateClient.storeObject("archive-bookmark", path, bookmark).
            then(function() {
              return bookmark; // return bookmark with added ID property
            });
        }
        }
      }
  }};
  
  peer.space("bookmark").addBookmark();
  
  peer.bookmarks.add({
    title: 'Unhosted Web Apps',
    url: 'https://unhosted.org',
    tags: ['unhosted', 'remotestorage', 'offline-first']
  })
  .then(() => {
    console.log('stored bookmark successfully');
  })
  .catch((err) => {
    console.error('validation error:', err);
  });