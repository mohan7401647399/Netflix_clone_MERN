'use client'

import UnauthPage from "@/components/unauth-page";
import { getAllfavorites, getTVorMoviesByGenre } from "@/utils";
import { GlobalContext } from "@/context";
import { useContext, useEffect } from "react";
import ManageAccount from "@/components/manage-accounts";
import CommonLayout from "@/components/common~layout";
import CircleLoader from "@/components/circle-loader/circle-loader";

export default function Movies() {
    const { loggedInAccount, mediaData, pageLoader, data: session, setMediaData, setPageLoader } = useContext(GlobalContext);

    useEffect(() => {
        async function getAllMedias() {
            const action = await getTVorMoviesByGenre("movie", 28);
            const adventure = await getTVorMoviesByGenre("movie", 12);
            const crime = await getTVorMoviesByGenre("movie", 80);
            const comedy = await getTVorMoviesByGenre("movie", 35);
            const family = await getTVorMoviesByGenre("movie", 10751);
            const mystery = await getTVorMoviesByGenre("movie", 9648);
            const romance = await getTVorMoviesByGenre("movie", 10749);
            const scifiAndFantasy = await getTVorMoviesByGenre("movie", 878);
            const war = await getTVorMoviesByGenre("movie", 10752);
            const history = await getTVorMoviesByGenre("movie", 36);
            const drama = await getTVorMoviesByGenre("movie", 18);
            const thriller = await getTVorMoviesByGenre("movie", 53);
            const horror = await getTVorMoviesByGenre("movie", 27);
            const allFavorites = await getAllfavorites(
                session?.user?.uid,
                loggedInAccount?._id
            );
            // console.log(allFavorites, 'allFavorites');
            setMediaData(
                [
                    {
                        title: "Action",
                        medias: action,
                    },
                    {
                        title: "Adventure",
                        medias: adventure,
                    },
                    {
                        title: "Crime",
                        medias: crime,
                    },
                    {
                        title: "Comedy",
                        medias: comedy,
                    },
                    {
                        title: "Family",
                        medias: family,
                    },
                    {
                        title: "Mystery",
                        medias: mystery,
                    },
                    {
                        title: "Horror",
                        medias: horror,
                    },
                    {
                        title: "History",
                        medias: history,
                    },
                    {
                        title: "Romance",
                        medias: romance,
                    },
                    {
                        title: "Sci-Fi and Fantasy",
                        medias: scifiAndFantasy,
                    },
                    {
                        title: "Thriller",
                        medias: thriller,
                    },
                    {
                        title: "War",
                        medias: war,
                    },
                    {
                        title: "Dramas",
                        medias: drama,
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
                }))
            );
            setPageLoader(false);
        }

        getAllMedias();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedInAccount]);

    if (session === null) return <UnauthPage />
    if (loggedInAccount === null) return <ManageAccount />
    if (pageLoader) return <CircleLoader />;

    return (
        <main className="flex min-h-screen flex-col">
            <CommonLayout mediaData={mediaData} />
        </main>
    )
}