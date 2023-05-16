import React, { useState } from "react";

function Articles() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content_data = {
      data: {
        type: "node--article",
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
      "http://localhost/travel_destinations/web/jsonapi/node/article",
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
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Body:
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
      </label>
      <button type="submit">Create Article</button>
    </form>
  );
}
export default Articles;
