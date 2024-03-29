import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { Link } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import Loading from "../comp/loading";


const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);



  const SendAgain = () => {
    sendEmailVerification(auth.currentUser)
              .then(() => {
                // "Email verification sent!"
                console.log("Email verification sent!")
                // ...
              });
  }

  if (loading) {
    return  <Loading />
  }





  if (!user) {
    return (
      <>
        <Helmet>
          <title>HOME Page</title>
          <meta name="description" content="HOMEEEEEEEEEEEE" />
        </Helmet>

        <Header />

        <main>
          <p className="pls">
            Please{" "}
            <Link style={{ fontSize: "30px" }} to="/signin">
              sign in
            </Link>{" "}
            to continue... <span><i class="fa-solid fa-heart"></i></span>
          </p>
        </main>

        <Footer />
      </>
    );
  }


  

  if (user) {
    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>HOME Page</title>
            <meta name="description" content="HOMEEEEEEEEEEEE" />
          </Helmet>

          <Header />

          <main>
            <p>
              {" "}
              Welcome: {user.displayName} <span><i class="fa-solid fa-heart"></i></span>
            </p>
          </main>

          <Footer />
        </>
      );
    }

    if (!user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>HOME Page</title>
            <meta name="description" content="HOMEEEEEEEEEEEE" />
          </Helmet>

          <Header />

          <main>
            <p>
              {" "}
              Welcome: {user.displayName} <span><i class="fa-solid fa-heart"></i></span>
            </p>

            <p>Please verify your email to continue ✋ </p>
            <button onClick={() => {
              SendAgain()
            }
            } className="delete">Send email</button>
          </main>

          <Footer />
        </>
      );
    }
  }

};

export default Home;