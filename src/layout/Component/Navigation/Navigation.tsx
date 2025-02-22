import {
    SignInButton,
    // SignOutButton,
    UserButton,
    SignedIn,
    SignedOut,
  } from "@clerk/nextjs";
  // import Link from "next/link";
  export const Navigation = () => {
    return (
      <nav >
        <div >
          <div >
            <div >
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700">
                    Sign In
                  </button>
                </SignInButton>
                {/* <SignUpButton>
                  <button className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700">
                    Sign Up
                  </button>
                </SignUpButton> */}
              </SignedOut>
              <SignedIn>
                {/* <Link href="/user-profile">Profile</Link> */}
                {/* <SignOutButton /> */}
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>
    );
  };