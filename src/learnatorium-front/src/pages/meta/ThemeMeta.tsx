/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import swal from "sweetalert";

function ThemeMeta() {
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
  const [updated, setUpdated] = useState(false);
  const [created, setCreated] = useState(false);
  const [name, setName] = useState("");
  const [style, setStyle] = useState("");
  const [theme, setTheme] = useState("");

  const changeToDelete = () => {
    setDeleted(true);
    setUpdated(false);
    setCreated(false);
  };

  const changeToUpdate = () => {
    setDeleted(false);
    setUpdated(true);
    setCreated(false);
  };

  const changeToCreate = () => {
    setDeleted(false);
    setUpdated(false);
    setCreated(true);
  };

  const toDelete = async () => {
    const id = parseInt(theme);
    if (isNaN(id)) {
      swal(
        "Oops!",
        "You have inserted an element,which is not a number!",
        "error"
      );
    } else {
      await fetch("http://localhost:8050/theme/" + id, {
        method: "DELETE",
      }).then((res) => {
        if (res.status === 200) {
          swal("YEAH!", "User deleted!", "success");
        } else {
          swal(
            "Oops!",
            "The id you have introduced doesn´t belong to any user.",
            "error"
          );
        }
      });
    }
  };

  const toUpdate = async () => {
    const id= parseInt(theme);
    let regex:RegExp = /.\.css$/;

    if(isNaN(id)){
      swal(
        "Oops!",
        "The element you have introduced as id, is not a number.",
        "error"
      );
    }else{
      if(regex.test(style)){
        await fetch("http://localhost:8050/theme/update", {
          method: "PUT",
          body: JSON.stringify({
            id: id,
            name:name,
            style:style
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
      }else{
        swal(
          "Wrong style.",
          " Must include the extension.",
          "error"
        );
      }
    }
  };

  const toCreate=async()=>{
    let regex:RegExp = /.\.css$/;
    if(regex.test(style)){
      await fetch("http://localhost:8050/theme/create", {
        method:"POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body:JSON.stringify({
          name:name,
          style:style
        })
      })
      .then((res)=>{
        if(res.status === 201){
          swal(
            "OMG",
            " YOUR THEME HAVE BEEN ADDED. HURRAYYY!!!",
            "success"
          );
        }
        else{
          swal(
            "Something went wrong",
            "We have trying to fix it.",
            "warning"
          );
        }
      })
    }
  }

  return (
    <div>
      <div>
        <div className="uk-card uk-card-primary uk-card-body uk-width-1-2 uk-position-center">
          <section className="uk-flex uk-flex-around">
            <h3
              className="uk-card-title uk-margin-right"
              onClick={changeToDelete}
            >
              Delete
            </h3>
            <h3
              className="uk-card-title uk-margin-remove-top uk-margin-right"
              onClick={changeToUpdate}
            >
              Update
            </h3>
            <h3
              className="uk-card-title uk-margin-remove-top"
              onClick={changeToCreate}
            >
              Create
            </h3>
          </section>

          {(() => {
            if (updated) {
              return (
                <div>
                  <input
                    className="uk-input uk-form uk-margin-bottom"
                    placeholder="id"
                    onChange={(e) => setTheme(e.target.value)}
                  ></input>
                  <input
                    className="uk-input uk-form uk-margin-bottom"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                  <input
                    className="uk-input uk-form uk-margin-bottom"
                    placeholder="style"
                    onChange={(e) => setStyle(e.target.value)}
                  ></input>
                  <input
                    type="button"
                    value="update"
                    className="uk-button uk-button-secondary"
                    onClick={toUpdate}
                  ></input>
                </div>
              );
            } else if (deleted) {
              return (
                <div>
                  <input
                    className="uk-input uk-form uk-margin-bottom"
                    placeholder="delete"
                    onChange={(e) => setTheme(e.target.value)}
                  ></input>

                  <br />

                  <input
                    type="button"
                    value="Delete it"
                    className="uk-button uk-button-secondary"
                    onClick={toDelete}
                  ></input>
                </div>
              );
            } else if (created) {
              return (
                <div>
                <input
                  className="uk-input uk-form uk-margin-bottom"
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                  className="uk-input uk-form uk-margin-bottom"
                  placeholder="style"
                  onChange={(e) => setStyle(e.target.value)}
                ></input>
                <input
                  type="button"
                  value="Create"
                  className="uk-button uk-button-secondary"
                  onClick={toCreate}
                ></input>
              </div>
              )
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default ThemeMeta;
