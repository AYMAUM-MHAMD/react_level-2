import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebase/config';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Signin.css'


const Signin = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [hasError, sethasError] = useState(false);
  const [firebaseError, setfirebaseError] = useState("");
  const [hidepass, sethidepass] = useState("");
  const [resetPassword, setresetPassword] = useState("");
  const [ShowSendEmail, setShowSendEmail] = useState(false);

  const SigninInBTN = (eo) => {
    eo.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate("/");
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;



                sethasError(true)
                console.log(errorCode)



                switch (errorCode) {

                  case "auth/invalid-email":
                    setfirebaseError("Wrong Email")
                    break;


                  case "auth/user-not-found":
                    setfirebaseError("Wrong Email")
                    break;


                  case "auth/wrong-password":
                    setfirebaseError("Wrong Password")
                    break;


                  case "auth/too-many-requests":
                    setfirebaseError("Too many requests, please try aganin later")
                    break;


                  default:
                    setfirebaseError("Please check your email & password")
                    break;

                }


              });
  }
   
  return (
    <>
      <Helmet>
        <title>Signin</title>
      </Helmet>
      <Header />

      <main>
        <form className={`pass ${hidepass}`}>
          <div onClick={() => {
            sethidepass("")
          }
          } className="close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <input onChange={(eo) => {
            setresetPassword(eo.target.value)
          }
          } required placeholder=" E-mail : " type="email" />
          <button onClick={(eo) => {
            eo.preventDefault();
            
            sendPasswordResetEmail(auth, resetPassword)
              .then(() => {
                setShowSendEmail(true)
                console.log("Send Email!")
              })
              .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
                const errorMessage = error.message;
                // ..
              });
          }
          }>Reset email</button>


          {ShowSendEmail && <p className="check-email">Please check your email to reset your password.</p>}
        </form>




        <form>


          <input onChange={(eo) => {
            setemail(eo.target.value)
          }} required placeholder=" E-mail : " type="email" />



          <input onChange={(eo) => {
            setpassword(eo.target.value)
          }} required placeholder=" Password : " type="password" />




          <button onClick={(eo) => {
            SigninInBTN(eo)
          }}>Sign in</button>
          <p className="account">
            Don't hava an account <Link to="/signup"> Sign-up</Link>
          </p>

          <p onClick={() => {
            sethidepass("show-hide-pass")
          }
          } className="forgot-pass">Forgot Password</p>

          {hasError && <h2>{firebaseError}</h2>}

        </form>




      </main>
      <Footer />
    </>
  );
};

export default Signin;