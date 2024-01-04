import lol from  "../";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedOut,
} from "@clerk/nextjs";
import { AppProps } from "next/app";
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <SignedOut>
        <div>You are signed Out</div>
      </SignedOut>
      <div>Always visible</div>
    </ClerkProvider>
  );
}
 
export default MyApp;