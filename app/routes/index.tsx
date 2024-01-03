import { invariantResponse } from "@epic-web/invariant";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { formatDistance, subDays } from "date-fns";
import { getLastCounter } from "~/models/counter.server";
export async function loader() {
  const data = await getLastCounter();

  invariantResponse(data, "Not Found", {
    status: 404,
    statusText:
      "Something wrong with the database. Please forgive developer, he is still learning 😌",
  });

  return json(data);
}
export default function Index() {
  const { count, createdAt } = useLoaderData<typeof loader>();

  return (
    <section className="mx-auto flex flex-col items-center justify-center gap-12">
      <p className="font-mono text-9xl">{count}</p>
      <p className="font-mono text-lg">
        {`updated `}
        <span className="text-muted-foreground">
          {formatDistance(subDays(createdAt, 0), new Date(), {
            addSuffix: true,
          })}
        </span>
      </p>
    </section>
  );
}
