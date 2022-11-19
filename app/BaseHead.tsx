export default function BaseHead({ title }: { title: string }) {
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="https://emojicdn.elk.sh/🐙" />
    </>
  );
}
