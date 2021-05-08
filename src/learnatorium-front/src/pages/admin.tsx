/* eslint-disable react-hooks/rules-of-hooks */
// @ts-ignore: Object is possibly 'null'.
import * as React from "react";
import { useState } from "react";
import axios from "axios";
import "../style/pages/admin.css";

function admin() {
  const [adminRedirect, setAdminRedirect] = useState("");

  function redirect(number: any) {
    let result;
    for (var i in number) {
      result = number[i];
    }
    switch (result) {
      case 1:
        window.location.href = "http://localhost:3000/Admin-User-Zone";
        break;
      case 2:
        window.location.href = "http://localhost:3000/Admin-Documents-Zone";
        break;
      case 3:
        window.location.href = "http://localhost:3000";
        break;
      case 4:
        window.location.href = "http://localhost:3000/Admin-Theme-Zone";

        break;
      case 5:
        window.location.href = "http://localhost:3000/Admin-Categories-Zone";
        break;
      case 6:
        window.location.href = "http://localhost:3000/Admin-Source-Zone";
        break;
      case 7:
        window.location.href = "http://localhost:3000/Admin-Chapter-Zone";
        break;
    }
  }

  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [docu, setDocu] = useState("");
  const [theme, setTheme] = useState("");
  const [cat, setCat] = useState("");
  const [chap, setChap] = useState("");

  function getDocuments() {
    axios.get("http://localhost:8000/documents").then((res) => {
      setDocu(res.data);
      setAdminRedirect("Document panel");
    });
  }

  function getSources() {
    axios.get("http://localhost:8000/source/all").then((res) => {
      setName(res.data);
      setAdminRedirect("Source panel");
    });
  }

  function getUsers() {
    axios.get("http://localhost:8000/users").then((res) => {
      setAdminRedirect("User panel");
      setUser(res.data);
    });
  }
  function getTheme() {
    axios.get("http://localhost:8000/theme").then((res) => {
      setAdminRedirect("Theme panel");
      setTheme(res.data);
    });
  }

  function getCategory() {
    axios.get("http://localhost:8000/category/all").then((res) => {
      setAdminRedirect("Category panel");
      setCat(res.data);
    });
  }

  function getChapter() {
    axios.get("http://localhost:8000/chapter").then((res) => {
      setAdminRedirect("Chapter panel");
      setChap(res.data);
    });
  }
  const [mia, setMia] = useState(0);

  function users(e: { preventDefault: () => void }) {
    getUsers();
    setMia(1);
  }
  function documents(e: { preventDefault: () => void }) {
    getDocuments();
    setMia(2);
  }
  function Test(e: { preventDefault: () => void }) {
    setMia(3);
  }
  function Theme(e: { preventDefault: () => void }) {
    getTheme();
    setMia(4);
  }
  function Categories(e: { preventDefault: () => void }) {
    getCategory();
    setMia(5);
  }
  function Source(e: { preventDefault: () => void }) {
    getSources();
    setMia(6);
  }
  function Chapter(e: { preventDefault: () => void }) {
    getChapter();
    setMia(7);
  }
  let menu;

  switch (mia) {
    case 1:
      menu =
        "<div><table><tr><th>ID</th><th>NAME</th><th>EMAIL</th><th>ROLE</th></tr>";
      for (let i = 0; i < user.length; i++) {
        const element = JSON.parse(JSON.stringify(user[i]));

        switch (element.role) {
          case 1:
            menu +=
              "<tr><td>" +
              element.id +
              "</td><td>" +
              element.name +
              "</td><td>" +
              element.email +
              "</td><td>Standard User</td></tr>";
            break;
          case 2:
            menu +=
              "<tr><td>" +
              element.id +
              "</td><td>" +
              element.name +
              "</td><td>" +
              element.email +
              "</td><td>Premium User</td></tr>";
            break;
          case 3:
            menu +=
              "<tr><td>" +
              element.id +
              "</td><td>" +
              element.name +
              "</td><td>" +
              element.email +
              "</td><td>Admin User</td></tr>";
            break;
          case 4:
            menu +=
              "<tr><td>" +
              element.id +
              "</td><td>" +
              element.name +
              "</td><td>" +
              element.email +
              "</td><td>Banned User</td></tr>";
            break;
        }
      }
      menu += "</table></div>";
      const output2 = document.getElementById("mostrar");
      if (output2) output2.innerHTML = menu.toString();
      break;
    case 2:
      menu =
        "<div><table><tr><th>ID</th><th>Name</th><th>Content</th><th>CreationDate</th></tr>";
      for (let i = 0; i < docu.length; i++) {
        const element = JSON.parse(JSON.stringify(docu[i]));
        menu +=
          "<tr><td>" +
          element.id +
          "</td><td>" +
          element.name +
          "</td><td>" +
          element.content +
          "</td><td>" +
          element.creationDate
            .toString()
            .slice(0, 19)
            .replace("T00:00:00", " ") +
          "</td></tr>";
      }
      menu += "</table></div>";
      const output3 = document.getElementById("mostrar");
      if (output3) output3.innerHTML = menu.toString();
      break;
    case 3:
      menu = <div>test</div>;
      console.log("Test");
      break;
    case 4:
      menu = "<div><table><tr><th>ID</th><th>Name</th><th>Style</th></tr>";
      console.log(theme);
      for (let i = 0; i < theme.length; i++) {
        const element = JSON.parse(JSON.stringify(theme[i]));
        menu +=
          "<tr><td>" +
          element.id +
          "</td><td>" +
          element.name +
          "</td><td>" +
          element.style +
          "</td></tr>";
      }
      menu += "</table></div>";
      const output4 = document.getElementById("mostrar");
      if (output4) output4.innerHTML = menu.toString();
      break;

    case 5:
      menu = "<div><table><tr><th>ID</th><th>Name</th></tr>";
      console.log(cat);
      for (let i = 0; i < cat.length; i++) {
        const element = JSON.parse(JSON.stringify(cat[i]));
        menu +=
          "<tr><td>" + element.id + "</td><td>" + element.name + "</td></tr>";
      }
      menu += "</table></div>";
      const output5 = document.getElementById("mostrar");
      if (output5) output5.innerHTML = menu.toString();
      break;
    case 6:
      menu =
        "<div><table><tr><th>ID</th><th>ISBN</th><th>Creation Date</th><th>Validation Date</th></tr>";
      for (let i = 0; i < name.length; i++) {
        const element = JSON.parse(JSON.stringify(name[i]));

        menu +=
          "<tr><td>" +
          element.id +
          "</td><td>" +
          element.ISBN +
          "</td><td>" +
          element.Creation.toString().slice(0, 19).replace("T00:00:00", " ") +
          "</td><td>" +
          element.Validation.toString().slice(0, 19).replace("T00:00:00", " ") +
          "</td></tr>";
      }
      menu += "</table></div>";
      const output = document.getElementById("mostrar");
      if (output) output.innerHTML = menu.toString();

      break;
    case 7:
      menu =
        "<div><table><tr><th>ID</th><th>groupName</th><th>Author</th><th>lastRevision</th></tr>";
      for (let i = 0; i < chap.length; i++) {
        const element = JSON.parse(JSON.stringify(chap[i]));

        menu +=
          "<tr><td>" +
          element.id +
          "</td><td>" +
          element.groupName +
          "</td><td>" +
          element.Author +
          "</td><td>" +
          element.lastRevision.toString().slice(0, 19).replace("T", " ") +
          "</td></tr>";
      }
      const output7 = document.getElementById("mostrar");
      if (output7) output7.innerHTML = menu.toString();
      break;
  }
  return (
    <div>
      <div className="headerAdmin uk-heading-small uk-text-bold uk-text-muted">
        Admin panel
      </div>
      <button
        className="uk-margin-left uk-margin-right uk-button-primary adminButton"
        value={mia}
        onClick={users}
      >
        Users
      </button>
      <button
        className="uk-margin-left uk-margin-right uk-button-primary adminButton"
        value={mia}
        onClick={documents}
      >
        Documents
      </button>
      <button
        className="uk-margin-left uk-margin-right uk-button-primary adminButton"
        value={mia}
        onClick={Test}
      >
        Test
      </button>
      <button
        className="uk-margin-left uk-margin-right uk-button-primary adminButton"
        value={mia}
        onClick={Theme}
      >
        Theme
      </button>
      <button
        className="uk-margin-left uk-margin-right uk-button-primary adminButton"
        value={mia}
        onClick={Categories}
      >
        Categories
      </button>
      <button
        className="uk-margin-left uk-margin-right uk-button-primary adminButton"
        value={mia}
        onClick={Source}
      >
        Source
      </button>
      <button
        className="uk-margin-left uk-margin-right uk-button-primary adminButton"
        value={mia}
        onClick={Chapter}
      >
        Chapter
      </button>
      <section className="show">
        <button
          className="uk-button-danger uk-margin-left uk-padding-small"
          onClick={() => redirect({ mia })}
        >
          Redirect to {adminRedirect}
        </button>
        <section id="mostrar"></section>
      </section>
    </div>
  );
}

export default admin;