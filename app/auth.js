import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "@/authconfig";
import bcrypt from 'bcrypt'
import { connectToDatabase } from "./lib/database";
import User from "./lib/database/models/user.model";

const login = async (credentials) => {
  try {
    // connectToDB();
    await connectToDatabase( )
    
    const user = await User.findOne({ username: credentials.username }).lean();

    console.log(credentials.username)
    console.log(credentials.password)
    console.log(user)
    if (!user ) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong password !");

    return user; 
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          console.log(user)
          return user;
        } catch (err) {
          throw new Error("Failed to authorize");

        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
},

});