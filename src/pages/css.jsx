import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/config";

const Css = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user]);
  return (
    <>
      <Helmet>
        <title>CSS Page</title>
        <meta name="description" content="csssssssssssssssssssss" />
      </Helmet>

      <Header />

      <MainContent pageName="CSS Page" />

      <Footer />
    </>
  );
};

export default Css;
