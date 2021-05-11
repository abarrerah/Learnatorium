import React, { useState } from "react";

function UserMeta() {
  window.addEventListener("load", async () => {
    const result = await fetch("http://localhost:8050/user", {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    result
      .json()
      .then((e) => {
        if (e.toString().length > 0) {
          if (e[0].role !== 10) {
            window.location.href = "http://localhost:3000/profile";
          }
        }
      })
      .catch((e) => {
        window.location.href = "http://localhost:3000";
      });
  });

  const [deleted, setDeleted] = useState(false);
  const [update, setUpdate] = useState(false);

  function onDelete() {
    setDeleted(true);
    console.log(deleted);
  }
  function onUpdate() {
    setUpdate(true);
    console.log(update);
  }
  let user;
  return (
    <div>
      <div className="uk-card uk-card-primary uk-card-body uk-width-1-3 uk-margin-left uk-position-center">
        <div className="uk-flex">
          <p className="uk-text-muted" onClick={onDelete}>delete</p>
          <p className="uk-margin-remove-top uk-text-muted" onClick={onUpdate}>Update</p>
        </div>

        {user}
      </div>
    </div>
  );
}

export default UserMeta;
