import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import Moment from 'react-moment';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "firebase/auth";
import Loading from "../comp/loading";


const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
    }
      
    if (user) {
      if (!user.emailVerified) {
        navigate("/");
      }
    }
  
  })

  if (loading) {
    return  <Loading />
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (user) {
    return (
      <>
        <Helmet>
          <title>Profile Page</title>
          <style type="text/css">{`
          main{
            flex-direction: column;
            display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
    margin: auto;
          }
  
          .delete{
            margin-top: 35px;
            background-color: #cd3545;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: 0.25rem;
            border-color: #cd3545;
            
          }
          `}</style>
        </Helmet>
  
        <Header />
  
        <main className="mm">
          <h6> Email : {user.email}</h6>
          <h6> UserName : {user.displayName}</h6>
          <h6> Lest Sign-in : <Moment fromNow date={user.metadata.lastSignInTime}  /></h6>
          <h6> Account Created : <Moment fromNow date={user.metadata.creationTime}  /></h6>
          <button onClick={() => {
            deleteUser(user).then(() => {
              console.log("User deleted")
            }).catch((error) => {
              console.log(error.message);
            });
            
          }
          } className="delete">Delete Account</button>
  
          
        </main>
  
        <Footer />
      </>
    );
  }
};
export default Profile;
