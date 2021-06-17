/* eslint-disable eqeqeq */
import React, { useState } from "react";
import swal from 'sweetalert';

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
          if (e[0].role !== 3) {
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
  const [userToUpdate, setUserToUpdate] = useState("");
  const [userToUpdateName, setUserToUpdateName] = useState("");
  const [userUpdateEmail, setUserUpdateEmail] = useState("");
  const [userToUpdateRole, setUserToUpdateRole] = useState("");

  async function onDelete() {
    setUpdate(false);
    setDeleted(true);
  }

  function onUpdate() {
    setDeleted(false);
    setUpdate(true);
  }

  function sendItToUpdate() {
    const id = parseInt(userToUpdate);
    if (isNaN(id)) {
      swal("Oops!", "You have inserted an element,which is not a number!", "error");
    } else {
      fetch("http://localhost:8050/user", {
        method: "PATCH",
        body: JSON.stringify({
          id: id,
          email: userUpdateEmail,
          name: userToUpdateName,
          role: userToUpdateRole,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          if (response.status === 200) {
            window.location.href = "http://localhost:3000/Admin";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function sendItToDelete() {
    const id = parseInt(userToDelete);
    if (isNaN(id)) {
      swal("Oops!", "You have inserted an element,which is not a number!", "error");
    } else {
      fetch("http://localhost:8050/user/" + id, {
        method: "DELETE",
      })
        .then((res) => console.log(res.text()))
        .then((res) => console.log(res));
        swal("YEAH!", "User deleted!", "success");
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
                  className="uk-input uk-form uk-margin-bottom"
                  placeholder="id"
                  onChange={(e) => setUserToUpdate(e.target.value)}
                ></input>
                <input
                  className="uk-input uk-form uk-margin-bottom"
                  placeholder="name"
                  onChange={(e) => setUserToUpdateName(e.target.value)}
                ></input>
                <input
                  className="uk-input uk-form uk-margin-bottom"
                  placeholder="email"
                  onChange={(e) => setUserUpdateEmail(e.target.value)}
                ></input>

                <div className="uk-margin uk-width-1-2">
                  <div uk-form-custom="target: > * > span:first-child">
                    <select onChange={(e)=>setUserToUpdateRole(e.target.value)}>
                      <option value="">Please select...</option>
                      <option value="10">Admin</option>
                      <option value="11">Standard</option>
                      <option value="12">Premium</option>
                      <option value="13">Banned</option>
                    </select>
                    <button
                      className="uk-button uk-button-default"
                      type="button"
                    >
                      <span></span>
                      <span uk-icon="icon: chevron-down"></span>
                    </button>
                  </div>
                </div>
                <br></br>
                <input
                  type="button"
                  value="update"
                  className="uk-button uk-button-secondary"
                  onClick={sendItToUpdate}
                ></input>
              </div>
            );
          } else if (deleted) {
            return (
              <div>
                <input
                  className="uk-input uk-form uk-margin-bottom"
                  placeholder="delete"
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
