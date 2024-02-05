"use client";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import MediaRow from "../media-row";
import Navbar from '../Navbar';
import Banner from "../banner";

function CommonLayout({ mediaData }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Head>
        {" "}
        <title>Netflix Clone</title>{" "}
        {/* to do -> to add all other properties */}
      </Head>
      <>
        <Navbar />
        <div className="relative pl-4 pb-24 lg:space-y-24 mt-20">
          <Banner
            medias={mediaData && mediaData.length ? mediaData[0].medias : []}
          />
          <section className="md:space-y-16">
            {mediaData && mediaData.length
              ? mediaData.map((item) => (
                  <MediaRow
                    key={item}
                    title={item.title}
                    medias={item.medias}
                  />
                ))
              : null}
          </section>
        </div>
      </>
    </motion.div>
  );
}

export default CommonLayout;