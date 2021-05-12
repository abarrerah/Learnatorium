/* eslint-disable eqeqeq */
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
  const [userToDelete, setUserToDelete] = useState("");

  async function onDelete() {
    setUpdate(false);
    setDeleted(true);
  }
  function onUpdate() {
    setDeleted(false);
    setUpdate(true);
  }

  function sendItToUpdate() {
    alert("hi");
  }
  function sendItToDelete() {
    const id= parseInt(userToDelete);
    if(isNaN(id)){
      alert("You have introduced a string, not a number.");

    }else{
      fetch("http://localhost:8050/user/" + id, {
      method: "DELETE",
    })

      .then((res) => console.log(res.text())) 
      .then((res) => console.log(res));
    }

  }

  return (
    <div>
      <div className="uk-card uk-card-primary uk-card-body uk-width-1-3 uk-margin-left uk-position-center">
        <div className="uk-flex">
          <p className="uk-text-muted" onClick={onDelete}>
            delete
          </p>
          <p className="uk-margin-remove-top uk-text-muted" onClick={onUpdate}>
            Update
          </p>
        </div>
        {(() => {
          if (update) {
            return (
              <div>
                <input
                  type="button"
                  value="update"
                  onClick={sendItToUpdate}
                  onChange={(e) => setUserToDelete(e.target.value)}
                ></input>
              </div>
            );
          } else if (deleted) {
            return (
              <div>
                <input
                  className="uk-input uk-form uk-margin-bottom"
                  onChange={(e) => setUserToDelete(e.target.value)}
                ></input>

                <br />

                <input
                  type="button"
                  value="Delete it"
                  className="uk-button uk-button-secondary"
                  onClick={sendItToDelete}
                ></input>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
}

export default UserMeta;
