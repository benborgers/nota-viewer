"use client";

export default function Error({ error }: { error: Error }) {
  return <div>{JSON.stringify(error)}</div>;
}
