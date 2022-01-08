import Head from 'next/head';
import Navigation from '../components/navBar'
import Button from 'react-bootstrap/Button'
export default function Home({profile}){
  return (
    <>
      <Head>
      </Head>
      <Navigation title = "WAT" page1 = "Tree" />
      <Button> I like trains</Button>
      <img src={profile} className ="profilepic" ></img>
    </>
  )
}

export async function getServerSideProps() {
  var imageURLs = [
    "/images/external-content.duckduckgo.com.jpeg"
    , "/images/jack.jpeg"
    , "/images/jack2.jpeg",
    "/images/jackcard.jpeg",
    "/images/jacklayton.jpeg",
    "/images/jackskull.jpeg",
    "/images/jackblack.jpeg"
    ];
    var img;
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    img = imageURLs[randomIndex];
  return {
    props:{
      profile:img,
    }
  }
}
