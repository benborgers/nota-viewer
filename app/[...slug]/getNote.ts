import { marked } from "marked";

// Takes in slug as provided by the router (an array of strings).
export default async function getNote(slug: string[]) {
  const path = slug.join("/");

  const res = await fetch(
    `https://api.github.com/repos/benborgers/nota/contents/${path}.md`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.raw",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Not found");
  }

  let text = await res.text();

  if (!text.includes("#public")) {
    throw new Error("Note is not public");
  }

  text = text.replace(/#public/g, "");

  return {
    title: decodeURIComponent(slug[slug.length - 1]),
    html: marked.parse(text).replace(/==(.+)==/g, "<mark>$1</mark>"),
  };
}
