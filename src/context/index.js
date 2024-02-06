// 'use client'

// import CircleLoader from "@/components/circle-loader/circle-loader";
// import { useSession } from "next-auth/react";
// const { createContext, useState, useEffect } = require("react");
// import { useRouter, usePathname } from "next/navigation";
// import { useParams } from "next/navigation";

// export const GlobalContext = createContext(null)

// const initialFormData = { name: "", pin: "" };

// export default function GlobalState({ children }) {

//     const [LoggedIn, setLoggedIn] = useState(null);
//     const [accounts, setAccounts] = useState([]);
//     const [pageLoader, setPageLoader] = useState(true);
//     const [loggedInAccount, setLoggedInAccount] = useState(null);
//     const [mediaData, setMediaData] = useState([]);
//     const [searchResults, setSearchResults] = useState([]);
//     const [currentMediaInfoIdAndType, setCurrentMediaInfoIdAndType] = useState(null);
//     const [showDetailsPopup, setShowDetailsPopup] = useState(false);
//     const [mediaDetails, setMediaDetails] = useState(null);
//     const [similarMedias, setSimilarMedias] = useState([]);
//     const [favorites, setFavorites] = useState([]);
//     const [key, setKey] = useState("");
//     const { data: session } = useSession();
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [showSearchBar, setShowSearchBar] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [showAccountPopup, setShowAccountPopup] = useState(false);
//     const [showCurrentAns, setShowCurrentAns] = useState(null);
//     const [showAccountForm, setShowAccountForm] = useState(false);
//     const [formData, setFormData] = useState(initialFormData);
//     const [showDeleteIcon, setShowDeleteIcon] = useState(false);
//     const [pin, setPin] = useState("");
//     const [pinError, setPinError] = useState(false);
//     const [showPinContainer, setShowPinContainer] = useState({ show: false, account: null, });


//     const router = useRouter();
//     const pathName = usePathname();
//     const params = useParams();


//     const baseUrl = "https://image.tmdb.org/t/p/original";
//     const baseUrlmediaItem = "https://image.tmdb.org/t/p/w500";

//     useEffect(() => {
//         setLoggedInAccount(JSON.parse(sessionStorage.getItem("loggedInAccount")));
//     }, []);

//     //unauth page questions
//     const questions = [
//         {
//             ques: "What is Netflix?",
//             ans: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
//         },
//         {
//             ques: "How much does Netflix cost",
//             ans: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.`,
//         },
//         {
//             ques: "What can I watch on Netflix?",
//             ans: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
      
//           You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
//         },
//         {
//             ques: "How do I cancel?",
//             ans: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
//         },
//         {
//             ques: "What can I watch on Netflix?",
//             ans: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
//         },
//         {
//             ques: "Is Netflix good for kids?",
//             ans: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
      
//       Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
//         },
//     ];

//     if (session === undefined) return <CircleLoader />

//     return (
//         <GlobalContext.Provider value={{ LoggedIn, setLoggedIn, accounts, setAccounts, pageLoader, setPageLoader, loggedInAccount, setLoggedInAccount, mediaData, setMediaData, searchResults, setSearchResults, currentMediaInfoIdAndType, setCurrentMediaInfoIdAndType, showDetailsPopup, setShowDetailsPopup, mediaDetails, setMediaDetails, similarMedias, setSimilarMedias, favorites, setFavorites, key, setKey, router, data: session, pathName, data: session, isScrolled, setIsScrolled, showSearchBar, setShowSearchBar, searchQuery, setSearchQuery, showAccountPopup, setShowAccountPopup, baseUrl, baseUrlmediaItem, params, questions, showCurrentAns, setShowCurrentAns, initialFormData, showAccountForm, setShowAccountForm, formData, setFormData, showDeleteIcon, setShowDeleteIcon, pin, setPin, pinError, setPinError, showPinContainer, setShowPinContainer }}>
//             {children}
//         </GlobalContext.Provider>
//     )
// }



'use client'

import CircleLoader from "@/components/circle-loader/circle-loader";
import { useSession } from "next-auth/react";
const { createContext, useState, useEffect } = require("react");
import { useRouter, usePathname } from "next/navigation";
import { useParams } from "next/navigation";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

    const [LoggedIn, setLoggedIn] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [pageLoader, setPageLoader] = useState(true);
    const [loggedInAccount, setLoggedInAccount] = useState(null);
    const [mediaData, setMediaData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [currentMediaInfoIdAndType, setCurrentMediaInfoIdAndType] = useState(null);
    const [showDetailsPopup, setShowDetailsPopup] = useState(false);
    const [mediaDetails, setMediaDetails] = useState(null);
    const [similarMedias, setSimilarMedias] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [key, setKey] = useState("");
    const { data: session } = useSession();
    const [isScrolled, setIsScrolled] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const router = useRouter();
    const pathName = usePathname();
    const params = useParams();

    const baseUrl = "https://image.tmdb.org/t/p/original";
    const baseUrlmediaItem = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        setLoggedInAccount(JSON.parse(sessionStorage.getItem("loggedInAccount")));
    }, []);

    //unauth page questions
    const questions = [
        {
            ques: "What is Netflix?",
            ans: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
        },
        {
            ques: "How much does Netflix cost",
            ans: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.`,
        },
        {
            ques: "What can I watch on Netflix?",
            ans: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
      
          You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
        },
        {
            ques: "How do I cancel?",
            ans: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
        },
        {
            ques: "What can I watch on Netflix?",
            ans: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
        },
        {
            ques: "Is Netflix good for kids?",
            ans: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
      
      Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
        },
    ];

    if (session === undefined) return <CircleLoader />

    return (
        <GlobalContext.Provider value={{ LoggedIn, setLoggedIn, accounts, setAccounts, pageLoader, setPageLoader, loggedInAccount, setLoggedInAccount, mediaData, setMediaData, searchResults, setSearchResults, currentMediaInfoIdAndType, setCurrentMediaInfoIdAndType, showDetailsPopup, setShowDetailsPopup, mediaDetails, setMediaDetails, similarMedias, setSimilarMedias, favorites, setFavorites, key, setKey, router, data: session, pathName, data: session, isScrolled, setIsScrolled, showSearchBar, setShowSearchBar, searchQuery, setSearchQuery, showAccountPopup, setShowAccountPopup, baseUrl, baseUrlmediaItem, params, questions, showCurrentAns, setShowCurrentAns, initialFormData }}>
            {children}
        </GlobalContext.Provider>
    )
}
