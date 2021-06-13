import React, { useState, useEffect } from "react";

//useEffect : side effect when a resource type changes
function useEffectPage() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  console.log("RENDER");
  //UseEffect-Form 1
  useEffect(() => {
    console.log("This will be called on every render");
  });

  //UseEffect-Form-2
  useEffect(() => {
    console.log("useEffect called for resourceType");
    let url = `https://jsonplaceholder.typicode.com/${resourceType}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((dataJson) => setItems(dataJson));
  }, [resourceType]); //whatever values are passed in bracket if those values are changes then only the useEffect will be called.

  //UseEffect-Form-3
  useEffect(() => {
    console.log("useEffect onMount");
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre key={item.id}>{JSON.stringify(items)}</pre>
      })}
    </>
  );
}

export default useEffectPage;
