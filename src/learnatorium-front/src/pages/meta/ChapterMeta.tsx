import React, { useState } from "react";
import swal from "sweetalert";

function ChapterMeta() {
  const [deleted, setDeleted] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [revisioned, setRevisioned] = useState(false);
  const [created, setCreated] = useState(false);

  const [chapter, setChapter] = useState("");
  const [group, setGroup] = useState("");
  const [author, setAuthor] = useState("");

  const changeToCreate = () => {
    setDeleted(false);
    setUpdated(false);
    setRevisioned(false);
    setCreated(true);
  };
  const changeToUpdate = () => {
    setDeleted(false);
    setUpdated(true);
    setRevisioned(false);
    setCreated(false);
  };
  const changeToRevision = () => {
    setDeleted(false);
    setUpdated(false);
    setRevisioned(true);
    setCreated(false);
  };
  const changeToDelete = () => {
    setDeleted(true);
    setUpdated(false);
    setRevisioned(false);
    setCreated(false);
  };

  const submitCreate = async () => {
    await fetch("http://localhost:8050/chapter/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        author: author,
        group_name: group,
      }),
    }).then((res) => {
      if (res.status === 201) {
        swal("YEIAAH!", "Element created succesfully!.", "success");
      } else {
        swal("Oops!", "Something is wrong. We are trying to fix it.", "error");
      }
    });
  };

  const submitUpdate = async () => {
    const id = parseInt(chapter);
    if (isNaN(id)) {
      swal(
        "Oops!",
        "You have inserted an element,which is not a number!",
        "error"
      );
    } else {
      await fetch("http://localhost:8050/chapter/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          id: chapter,
          author: author,
          group_name: group,
        }),
      }).then((res) => {
        if (res.status === 200) {
          swal("YEIAAH!", "Element was updated succesfully!.", "success");
        } else {
          swal(
            "Oops!",
            "Something is wrong. We are trying to fix it.",
            "error"
          );
        }
      });
    }
  };

  const submitRevision = async () => {
    const id = parseInt(chapter);
    if (isNaN(id)) {
      swal(
        "Oops!",
        "You have inserted an element,which is not a number!",
        "error"
      );
    } else {
      await fetch("http://localhost:8050/chapter/update-revision", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          id: chapter,
        }),
      }).then((res) => {
        if (res.status === 200) {
          swal("YEIAAH!", "Element was updated succesfully!.", "success");
        } else {
          swal(
            "Oops!",
            "Something is wrong. We are trying to fix it.",
            "error"
          );
        }
      });
    }
  };

  const submitDelete = async () => {
    const id = parseInt(chapter);
    alert(isNaN(id));
    if (isNaN(id)) {
      swal(
        "Oops!",
        "You have inserted an element,which is not a number!",
        "error"
      );
    } else {
      await fetch("http://localhost:8050/chapter/delete/" + id, {
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
  return (
    <div className="uk-card uk-card-primary uk-card-body uk-position-center">
      <section className="uk-flex uk-flex-around">
        <h3
          className="uk-card-title uk-margin-remove-top uk-margin-right"
          onClick={changeToCreate}
        >
          Create
        </h3>
        <h3
          className="uk-card-title uk-margin-remove-top uk-margin-right"
          onClick={changeToUpdate}
        >
          Update
        </h3>
        <h3
          className="uk-card-title uk-margin-remove-top uk-margin-right"
          onClick={changeToRevision}
        >
          Revision
        </h3>
        <h3
          className="uk-card-title uk-margin-remove-top uk-margin-right"
          onClick={changeToDelete}
        >
          Delete
        </h3>
      </section>
      {(() => {
        if (created) {
          return (
            <div>
              <input
                className="uk-input uk-form uk-margin-bottom"
                placeholder="group"
                onChange={(e) => setGroup(e.target.value)}
              ></input>
              <input
                className="uk-input uk-form uk-margin-bottom"
                placeholder="Author"
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
              <input
                type="button"
                value="Create"
                className="uk-button uk-button-secondary"
                onClick={submitCreate}
              ></input>
            </div>
          );
        }
        if (updated) {
          return (
            <div>
              <input
                className="uk-input uk-form uk-margin-bottom"
                placeholder="id"
                onChange={(e) => setChapter(e.target.value)}
              ></input>

              <input
                className="uk-input uk-form uk-margin-bottom"
                placeholder="group"
                onChange={(e) => setGroup(e.target.value)}
              ></input>
              <input
                className="uk-input uk-form uk-margin-bottom"
                placeholder="Author"
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
              <input
                type="button"
                value="Update"
                className="uk-button uk-button-secondary"
                onClick={submitUpdate}
              ></input>
            </div>
          );
        }
        if (revisioned) {
          return (
            <div>
              <input
                className="uk-input uk-form uk-margin-bottom"
                placeholder="id"
                onChange={(e) => setChapter(e.target.value)}
              ></input>
              <input
                type="button"
                value="Revision"
                className="uk-button uk-button-secondary"
                onClick={submitRevision}
              ></input>
            </div>
          );
        }
        if (deleted) {
          return (
            <div>
              <input
                className="uk-input uk-form uk-margin-bottom"
                placeholder="id"
                onChange={(e) => setChapter(e.target.value)}
              ></input>
              <input
                type="button"
                value="Delete"
                className="uk-button uk-button-secondary"
                onClick={submitDelete}
              ></input>
            </div>
          );
        }
      })()}
    </div>
  );
}

export default ChapterMeta;
