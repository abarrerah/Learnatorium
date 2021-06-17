import React, { useState } from "react";
import swal from "sweetalert";

function CategoriesMeta() {
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
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const changeToDelete = () => {
    setDeleted(true);
    setUpdated(false);
  };

  const changeToUpdate = () => {
    setDeleted(false);
    setUpdated(true);
  };

  const toDelete = async () => {
    const id = parseInt(category);
    if (isNaN(id)) {
      swal(
        "Oops!",
        "You have inserted an element,which is not a number!",
        "error"
      );
    } else {
      await fetch("http://localhost:8050/category/" + id, {
        method: "DELETE",
      }).then((res) => {
        if (res.status === 200) {
          swal("YEAH!", "Category deleted!", "success");
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
    const id = parseInt(category);
    if (isNaN(id)) {
      swal(
        "Oops!",
        "You have inserted an element,which is not a number!",
        "error"
      );
    } else {
      await fetch("http://localhost:8050/category/alter", {
        method: "PUT",
        body: JSON.stringify({
            id:category,
            name:name,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
      }).then((res)=>{
          if(res.status===200){
            swal(
                "Let´s Do it!",
                "Category updated!",
                "success"
              );
          }else{
            swal(
                "Oops!",
                "Something is wrong. We are working to fix it.",
                "error"
              );
          }
      })
    }
  };

  return (
    <div className="uk-card uk-card-primary uk-card-body uk-width-1-2 uk-position-center">
      <section className="uk-flex uk-flex-around">
        <h3
          className="uk-card-title uk-margin-remove-top uk-margin-right"
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
      </section>
      {(() => {
        if (updated) {
          return (
            <div>
              <input
                className="uk-input uk-form uk-margin-bottom"
                placeholder="id"
                onChange={(e) => setCategory(e.target.value)}
              ></input>
              <input
                className="uk-input uk-form uk-margin-bottom"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
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
                placeholder="id"
                onChange={(e) => setCategory(e.target.value)}
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
        }
      })()}
    </div>
  );
}

export default CategoriesMeta;
