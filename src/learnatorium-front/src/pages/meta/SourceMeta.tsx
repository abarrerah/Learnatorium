import React, { useState } from "react";
import swal from "sweetalert";

function SourceMeta() {
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
  const [updated, setUpdated] = useState(false);
  const [validated, setValidated] = useState(false);
  const [created, setCreated] = useState(false);
  const [source, setSource] = useState("");
  const [isbn, setIsbn] = useState("");
  const [validation, setValidation] = useState("");

  const changeToCreate = () => {
    setDeleted(false);
    setUpdated(false);
    setValidated(false);
    setCreated(true);
  };
  const changeToUpdate = () => {
    setDeleted(false);
    setUpdated(true);
    setValidated(false);
    setCreated(false);
  };
  const changeToValidate = () => {
    setDeleted(false);
    setUpdated(false);
    setValidated(true);
    setCreated(false);
  };
  const changeToDelete = () => {
    setDeleted(true);
    setUpdated(false);
    setValidated(false);
    setCreated(false);
  };

  const submitCreate = async () => {
    let regexIsbn: RegExp = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
    if (!regexIsbn.test(isbn)) {
      swal(
        "Oops!",
        "You have inserted an element,which is not a number!",
        "error"
      );
    } else {
      await fetch("http://localhost:8050/source/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          isbn: isbn,
        }),
      }).then((res) => {
        if (res.status === 201) {
          swal("YEIAAH!", "Element created succesfully!.", "success");
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

  const submitUpdate = async () => {
    const id = parseInt(source);
    if (isNaN(id)) {
      swal(
        "Oops!",
        "You have inserted an element,which is not a number!",
        "error"
      );
    } else {
      await fetch("http://localhost:8050/source/update", {
        method: "PATCH",
        body: JSON.stringify({
          id: id,
          isbn: isbn,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          if (res.status === 200) {
            window.location.href = "http://localhost:3000/Admin";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const submitValidate = async () => {
    const id = parseInt(source);
    if (isNaN(id)) {
      swal(
        "Oops!",
        "You have inserted an element,which is not a number!",
        "error"
      );
    } else {
      await fetch("http://localhost:8050/source/validate", {
        method: "put",
        body: JSON.stringify({
          id: id,
          validation: validation,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          if (res.status === 200) {
            window.location.href = "http://localhost:3000/Admin";
          }else{
            swal(
                "Oops!",
                "Something went wrong.",
                "error"
              );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const submitDelete = async () => {
    const id = parseInt(source);
    if (isNaN(id)) {
      swal(
        "Oops!",
        "You have inserted an element,which is not a number!",
        "error"
      );
    } else {
      await fetch("http://localhost:8050/source/" + id, {
        method: "DELETE",
      }).then((res) => {
        if (res.status === 200) {
          swal("YEAH!", "Source deleted!", "success");
        } else {
          swal(
            "Oops!",
            "The id you have introduced doesn´t belong to any source.",
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
          onClick={changeToValidate}
        >
          validate
        </h3>
        <h3
          className="uk-card-title uk-margin-remove-top uk-margin-right"
          onClick={changeToDelete}
        >
          Delete
        </h3>
      </section>

      {(() => {
        if (updated) {
          return (
            <div>
              <input
                className="uk-input uk-form uk-margin-bottom"
                placeholder="id"
                onChange={(e) => setSource(e.target.value)}
              ></input>
              <input
                className="uk-input uk-form uk-margin-bottom"
                placeholder="isbn"
                onChange={(e) => setIsbn(e.target.value)}
              ></input>
              <input
                type="button"
                value="update"
                className="uk-button uk-button-secondary"
                onClick={submitUpdate}
              ></input>
            </div>
          );
        } else if (deleted) {
          return (
            <div>
              <input
                className="uk-input uk-form uk-margin-bottom"
                placeholder="id"
                onChange={(e) => setSource(e.target.value)}
              ></input>
              <br />
              <input
                type="button"
                value="Delete it"
                className="uk-button uk-button-secondary"
                onClick={submitDelete}
              ></input>
            </div>
          );
        } else if (created) {
          return (
            <div>
              <input
                className="uk-input uk-form uk-margin-bottom"
                placeholder="isbn"
                onChange={(e) => setIsbn(e.target.value)}
              ></input>
              <input
                type="button"
                value="delete"
                className="uk-button uk-button-secondary"
                onClick={submitCreate}
              ></input>
            </div>
          );
        } else if (validated) {
          return (
            <div>
              <input
                className="uk-input uk-form uk-margin-bottom"
                placeholder="id"
                onChange={(e) => setSource(e.target.value)}
              ></input>
              <input
                className="uk-input uk-form uk-margin-bottom"
                placeholder="validation"
                type="date"
                onChange={(e) => setValidation(e.target.value)}
              ></input>
              <input
                type="button"
                value="validate"
                className="uk-button uk-button-secondary"
                onClick={submitValidate}
              ></input>
            </div>
          );
        }
      })()}
    </div>
  );
}

export default SourceMeta;
