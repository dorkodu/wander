interface ID {
  namespace: string;
  type: string;
  id: string;
}

const wander: any = {
  get(nodeId: ID) {},
};

wander.get("namespace:type", 12345);

const user = {
  node: {},
};

// CREATE: creates a new, typed entity (object)
// wander.create(type, requiredFields);

const newDiscussion = wander.create("forum:discussion", {
  //id: "17876866568290304",
  //userId: "11823434422026240",
  //date: 1676793377199,
  title: "🔼 Forum Updates",
  readme: "➡️ New updates are rolled everyday at midnight.",
  //favouriteCount: 3,
  //argumentCount: 1,
  //commentCount: 0,
  //lastUpdateDate: 1676793593272,
  //favourited: false,
});

/**
 * newDiscussion somehow push to network
 * if succeed, it returns a Wander Node
 */

const response = wander.push(newDiscussion, user);

// server (or network, superpeers etc.) decides the "push" result
if (response.status) console.log(response.data.node);

// response content
response.status;
response.entity.node;
response.entity.node.type;
response.entity.node.id;
response.entity.data;

/*
{
  //id: "17876866568290304",
  //userId: "11823434422026240",
  //date: 1676793377199,
  title: "🔼 Forum Updates",
  readme: "➡️ New updates are rolled everyday at midnight.",
  //favouriteCount: 3,
  //argumentCount: 1,
  //commentCount: 0,
  //lastUpdateDate: 1676793593272,
  //favourited: false,
}
*/

const universalId: string =
  "forum:discussion:7bcd47f4-c7dd-4dae-9bed-294b50a4bdf4";

const id: ID = {
  namespace: "forum",
  type: "discussion",
  id: "7bcd47f4-c7dd-4dae-9bed-294b50a4bdf4",
};

// READ:
wander.read(universalId);
wander.read(id);

// UPDATE:
wander.write("forum:discussion", 1);

// DELETE:
wander.write("forum:discussion", 1);

const sage: any = {};
sage.get("");

/*
{
  a: sage.query("getArguments", { discussionId, anchorId, type }, { ctx: "a" }),
  b: sage.query("getUser", {}, { ctx: "a", wait: "a" }),
}
*/
