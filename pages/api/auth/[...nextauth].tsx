import NextAuth from "next-auth"
import GoogleLogin from "next-auth/providers/github"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleLogin({
      clientId: process.env.google_client_id,
      clientSecret: process.env.google_client_secret,
    }),
    // ...add more providers here
  ],
})