import { ClerkLoading, SignIn, useUser } from '@clerk/nextjs';


export default function Home() {

  const { user, isLoaded } = useUser();

  return (
    <div>
      <ClerkLoading>
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-blue-500" />
        </div>
      </ClerkLoading>
      <SignIn
        routing="virtual"
      />
      {isLoaded && user ? (
        <div style={{border: '5px solid green'}}>
          <h1>Welcome back, {user.fullName}</h1>
        </div>
      ): <div style={{border: '5px solid red'}}>
      <h1>User not logged in</h1>
    </div>}
    </div>

  );
}
