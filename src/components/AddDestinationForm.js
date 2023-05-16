import React, { useState } from "react";

function AddDestinationForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content_data = {
      data: {
        type: "node--destination",
        attributes: {
          title: title,
          body: {
            value: body,
            format: "plain_text",
          },
        },
      },
    };
    const res = await fetch(
      "http://localhost/travel_destinations/web/jsonapi/node/destination",
      {
        mode: "cors",
        method: "POST",
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          Authorization: "Basic cmFwdG9yOmFkbWlu",
        },
        body: JSON.stringify(content_data),
      }
    );

    const json_data = await res.json();
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Destination Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>About Destination</label>
          <input
            type="textbox"
            className="form-control"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Create Article
        </button>
      </form>
    </div>
  );
}
export default AddDestinationForm;
