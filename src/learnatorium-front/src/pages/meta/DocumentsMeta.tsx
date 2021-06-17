import React, { useState } from "react";
import swal from 'sweetalert';

function DocumentsMeta() {
    const [documentToDelete, setDocumentToDelete] = useState("");

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
    const submit=async()=>{

        const id=parseInt(documentToDelete);
        if(isNaN(id)){
          swal("Oops!", "Something went wrong!", "error");
        }else{
            await fetch("http://localhost:8050/document/"+ id,{
                method:"DELETE",
            })
            .then((res)=>{
                if(res.status === 200){
                  swal("YEAH!", "Document deleted!", "success");
                }else if(res.status=== 404){
                  swal("Oops!", "You have introduced a wrong id!", "error");
                }
            })
            .catch((error)=>{
                console.log(error);
               
            });
        }
    }

  return (
    <div>
      <div>
        <div className="uk-card uk-card-primary uk-card-body uk-width-1-2 uk-position-center">
          <section className="uk-flex ">
            <h3 className="uk-card-title">Delete</h3>
          </section>
          <input
            className="uk-input uk-form-width-large uk-margin-right "
            placeholder="id"
            type="text"
            onChange={(e) =>setDocumentToDelete(e.target.value)}
          />
          <input
            type="button"
            value="Delete it"
            className="uk-button uk-button-secondary"
            onClick={submit}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default DocumentsMeta;
