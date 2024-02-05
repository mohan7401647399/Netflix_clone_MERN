import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github';


const authOptions = {
    providers: [
        GithubProvider({
            clientId: "3388d627c3d74ff21910",
            clientSecret: "d674229ffd2a61e8c909b8b76b62c14e54456e9e"
        })
    ],
    callbacks: {
        async session({ session, token, user }) {
            session.user.username = session?.user?.name.split(" ").join("").toLocaleLowerCase()

            session.user.uid = token.sub

            return session
        }
    },
    secret: "default_secret_key"
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }