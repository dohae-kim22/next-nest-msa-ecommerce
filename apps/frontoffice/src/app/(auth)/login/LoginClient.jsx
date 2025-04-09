"use client";

import React, { useState } from "react";
import Image from "next/image";

import LogoPath from "@/assets/shop-logo.png";
import styles from "./Login.module.scss";
import { useRouter } from "next/navigation";

const LoginClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAutoLogin, setIsAutoLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const redirectToHome = () => {
    router.push("/");
  };

  const signIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const signInWithGoogle = () => {
    setIsLoading(true);
  };

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Image priority src={LogoPath} alt="Logo" width={300} />
        </h1>

        <form onSubmit={signIn} className={styles.form}>
          <input type="email" />
          <input type="password" />

          <div className={styles.group}>
            <input type="checkbox" name="autoLogin" />
            <label htmlFor="autoLogin">Keep me signed in</label>
            <a href="">Forgot Password</a>
          </div>

          <div className={styles.buttonGroup}>
            <button>Sign In</button>
            <button>Create Account</button>
            <div>
              <button>Sign In with Google</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginClient;
