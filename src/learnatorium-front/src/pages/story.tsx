/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";
import { match, useParams } from "react-router-dom";

function story({ match }: { match: any }) {
  return (
    <div>
      <h3>  {match.params.id}</h3>
    </div>
  );
}

export default story;
