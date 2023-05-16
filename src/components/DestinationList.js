import React from "react";

import DestinationItem from "./DestinationItem";

async function createContent(title, body_content) {
  const url =
    "http://localhost/travel_destinations/web/jsonapi/node/destination/";
  const body = JSON.stringify({
    data: {
      type: "node--destination",
      attributes: {
        title,
        body: {
          value: body_content,
          format: "plain_text",
        },
      },
    },
  });

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/vnd.api+json",
    },
    body,
  });

  const json = await res.json();

  return json.data;
}

function DestinationList({ data }) {
  // console.log("DestinationList: props", data)

  // ADDS NEW
  const handleOnSubmit = async (e) => {
    e.preventDefault();
  };

  /**
   * Passing props to child component - 'DestinationItem'
   *
   */
  return (
    <div>
      <h1>Here are recommended travel destinations</h1>
      <hr></hr>
      {data !== null && data !== undefined && data.length > 0 ? (
        data.map((item) => <DestinationItem destination={item} />)
      ) : (
        <div>No destinations found</div>
      )}
      <div>
        <form onSubmit={handleOnSubmit}>
          <button type="submit">Add new content</button>
        </form>
      </div>
    </div>
  );
}
export default DestinationList;
