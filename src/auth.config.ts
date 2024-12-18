import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { loginScheema } from "./lib/scheemas/loginScheema";
import { getUserByEmail } from "./app/actions/authActions";
import { compare } from "bcryptjs";

export default {
  providers: [
    Credentials({
      name: "Credentials",
      async authorize(credentials) {
        const validated = loginScheema.safeParse(credentials);

        if (validated.success) {
          const { email, password } = validated.data;

          const user = await getUserByEmail(email);

          if (
            !user ||
            !user.password ||
            !(await compare(password, user.password))
          ) {
            return null;
          }

          return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
