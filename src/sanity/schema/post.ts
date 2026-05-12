export default {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }] },
  ],
};
