export default {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    { name: "title", title: "SEO Title", type: "string" },
    { name: "description", title: "SEO Description", type: "text" },
    { name: "heroEyebrow", title: "Hero Eyebrow", type: "string" },
    { name: "heroTitle", title: "Hero Title", type: "string" },
    { name: "heroText", title: "Hero Text", type: "text" },
    { name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } },
  ],
};
