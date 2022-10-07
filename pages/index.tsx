import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Gallery from "../components/Gallery";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-auto flex flex-col justify-center items-center font-serif">
      <Head>
        <title>Artfolio</title>
      </Head>

      <Header />
      <Profile />
      <p className="hidden md:inline-flex md:text-4xl p-6">GALLERY</p>
      <Gallery />
    </div>
  );
};

export default Home;
