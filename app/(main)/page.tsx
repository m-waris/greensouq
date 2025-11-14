import HomePageListings from "../components/home-page-listings";
import Newsletter from "../components/newsletter";

export default async function Home() {

  return (
    <main className="min-h-screen">

        <HomePageListings/>
        <Newsletter/>

    </main>
  );
}