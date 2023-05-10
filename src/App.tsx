import { Amplify, Auth } from "aws-amplify";

import "./App.css";

const config = {
  Auth: {
    region: import.meta.env.VITE_REGION,
    userPoolId: import.meta.env.VITE_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID,
    cookieStorage: {
      domain: import.meta.env.VITE_COOKIE_STORAGE_DOMAIN,
    },
    oauth: {
      domain: import.meta.env.VITE_OAUTH_DOMAIN,
      scope: ["email", "openid", "profile"],
      redirectSignIn: import.meta.env.VITE_OAUTH_REDIRECT_SIGN_IN,
      redirectSignOut: import.meta.env.VITE_OAUTH_REDIRECT_SIGN_OUT,
      responseType: "code",
    },
  },
};

Amplify.configure(config);

function App() {
  const handleSignIn = () => {
    Auth.federatedSignIn();
  };

  const handleCurrentUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user);
  };

  const handleSignOut = () => {
    Auth.signOut();
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignOut}>Sign Out</button>
        <button onClick={handleCurrentUser}>Current User</button>
      </div>
    </>
  );
}

export default App;
