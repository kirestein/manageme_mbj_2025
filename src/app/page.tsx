import { auth, signOut } from "@/auth";
import { Button } from "@nextui-org/react";

export default async function Home() {
  const session = await auth()
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center">
        Hello, World! 👋
      </h1>
      <h3 className="text-2xl font-semibold">User session data</h3>
      {
        session ? (
          <div>
            <pre>
              {JSON.stringify(session, null, 2)}
            </pre>
            <form action={async () => {
              'use server';
              await signOut()
            }}>
              <Button
                type="submit"
                color="primary"
                variant="bordered">
                Sign Out
              </Button>
            </form>
          </div>
        )
          :
          (
            <div>
              <p>Not logged in</p>
            </div>
          )
      }
    </div>
  );
}
