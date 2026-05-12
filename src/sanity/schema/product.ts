export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "tag", title: "Tag", type: "string" },
    { name: "summary", title: "Summary", type: "text" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "order", title: "Display Order", type: "number" },
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
