"use client";

import UnauthPage from "@/components/unauth-page";
import CircleLoader from "@/components/circle-loader/circle-loader";
import CommonLayout from "@/components/common~layout";
import ManageAccounts from "@/components/manage-accounts";
import { GlobalContext } from "@/context";
import { useContext, useEffect } from "react";
import { getAllfavorites, getPopularMedias, getTopratedMedias, getTrendingMedias, getTVorMoviesByGenre, getTVorMovieSearchResults } from "@/utils";

export default function Browse() {
  const { loggedInAccount, mediaData, pageLoader, data: session, setMediaData, setPageLoader } = useContext(GlobalContext);
  useEffect(() => {
    async function getAllMedias() {
      const trendingTvShows = await getTrendingMedias("tv");
      const popularTvShows = await getPopularMedias("tv");
      const topratedTvShows = await getTopratedMedias("tv");

      const trendingMovieShows = await getTrendingMedias("movie");
      const popularMovieShows = await getPopularMedias("movie");
      const topratedMovieShows = await getTopratedMedias("movie");
      const allFavorites = await getAllfavorites(session?.user?.uid, loggedInAccount?._id);
      setMediaData([
        ...[
          {
            title: "Trending TV Shows",
            medias: trendingTvShows,
          },
          {
            title: "Popular TV Shows",
            medias: popularTvShows,
          },
          {
            title: "Top rated TV Shows",
            medias: topratedTvShows,
          },
        ].map((item) => ({
          ...item,
          medias: item.medias.map((mediaItem) => ({
            ...mediaItem,
            type: "tv",
            addedToFavorites:
              allFavorites && allFavorites.length
                ? allFavorites.map((fav) => fav.movieID).indexOf(mediaItem.id) >
                -1
                : false,
          })),
        })),
        ...[
          {
            title: "Trending Movies",
            medias: trendingMovieShows,
          },
          {
            title: "Popular Movies",
            medias: popularMovieShows,
          },
          {
            title: "Top rated Movies",
            medias: topratedMovieShows,
          },
        ].map((item) => ({
          ...item,
          medias: item.medias.map((mediaItem) => ({
            ...mediaItem,
            type: "movie",
            addedToFavorites:
              allFavorites && allFavorites.length
                ? allFavorites.map((fav) => fav.movieID).indexOf(mediaItem.id) >
                -1
                : false,
          })),
        })),
      ]);

      setPageLoader(false);
    }
    getAllMedias();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (session === null) return <UnauthPage />;
  if (loggedInAccount === null) return <ManageAccounts />;
  if (pageLoader) return <CircleLoader />;

  return (
    <main className="flex min-h-screen flex-col">
      <CommonLayout mediaData={mediaData} />
    </main>
  );
}





