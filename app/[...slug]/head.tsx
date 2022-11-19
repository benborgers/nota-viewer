import getNote from "./getNote";
import BaseHead from "../BaseHead";

export default async function Head({ params }: { params: { slug: string[] } }) {
  const note = await getNote(params.slug);

  return <BaseHead title={note.title} />;
}
