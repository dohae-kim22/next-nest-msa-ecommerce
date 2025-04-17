"use client";

import { useState } from "react";
import Image from "next/image";

import LogoPath from "@/assets/shop-logo.png";
import styles from "./Login.module.scss";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader/Loader";
import Input from "@/components/input/Input";

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
    <>
      <Loader />
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image priority src={LogoPath} alt="Logo" width={300} />
          </h1>

          <form onSubmit={signIn} className={styles.form}>
            <Input
              email
              icon="letter"
              id="email"
              name="email"
              label="ID"
              placeholder="E-mail"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              password
              icon="lock"
              id="password"
              name="password"
              label="Password"
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

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
    </>
  );
};

export default LoginClient;
