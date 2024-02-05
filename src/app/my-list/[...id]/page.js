"use client";

import { GlobalContext } from "@/context";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import CircleLoader from "@/components/circle-loader/circle-loader";
import UnauthPage from "@/components/unauth-page";
import ManageAccount from "@/components/manage-accounts";
import Navbar from "@/components/Navbar";
import MediaItem from "@/components/media-item";
import { getAllfavorites } from "@/utils";

export default function MyList() {
  const { favorites, pageLoader, loggedInAccount, data: session, setFavorites, setPageLoader } = useContext(GlobalContext);
  useEffect(() => {
    async function extractFavorites() {
      const data = await getAllfavorites(session?.user?.uid, loggedInAccount?._id);

      if (data) {
        setFavorites(data.map(item => ({ ...item, addedToFavorites: true })));
        setPageLoader(false);
      }
    }
    extractFavorites();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInAccount]);
  if (session === null) return <UnauthPage />;
  if (loggedInAccount === null) return <ManageAccount />;
  if (pageLoader) return <CircleLoader />;

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}    >
      <Navbar />
      <div className="mt-[100px] space-y-0.5 md:space-y-2 px-4">
        <h2 className="cursor-pointer text-sm font-semibold text-[#e5e5e5] transition-colors duration-200 hover:text-white md:text-2xl">
          My List
        </h2>
        <div className="grid grid-cols-5 gap-3 items-center scrollbar-hide md:p-2">
          {favorites && favorites.length ? favorites.map((searchItem) => (
            // <MediaItem key={searchItem.id} media={searchItem} listView={true} />
            <MediaItem key={searchItem.id} media={searchItem} listView={true} />
          )) : 'No favorites added'}
        </div>
      </div>
    </motion.div>
  );
}
