import getNote from "./getNote";

export default async function Note({ params }: { params: { slug: string[] } }) {
  const note = await getNote(params.slug);

  return (
    <div
      className="prose prose-stone max-w-none [&_mark]:bg-amber-100"
      dangerouslySetInnerHTML={{ __html: note.html }}
    />
  );
}
