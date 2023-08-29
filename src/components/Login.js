import React, { useEffect, useState } from "react";
import imgg from "../assests/linked.png";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { authlogin, googleauth } from "../redux/features/AuthSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { GoogleOAuthProvider ,GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const HandleRegister = () => {
    navigate("/Register");
  };
  const { isAuthenticated } = useSelector((state) => ({ ...state.auth }));
  console.log(isAuthenticated);
  useEffect(() => {
    if (isAuthenticated != false) {
      navigate("/");
    }
  }, []);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [ldata, setldata] = useState({
    email: "",
    Password: "",
  });
  const [dec , setdec] = useState(null);

  const [gdata,setgdata] = useState({
    email:'',
    image:''
  })

  useEffect(()=>{
    setgdata({...gdata,email:(dec?.email)?(dec?.email):"" , image:(dec?.picture)?(dec?.picture):""});
  },[dec])

  console.log(gdata);

  useEffect(()=>{
    if(gdata.email != '' && gdata.image != ""){
      dispatch(googleauth({gdata,navigate}));
    }
  },[gdata])

  const CustomToast = ({ message }) => (
    <div style={{ backgroundColor: "#333", color: "#fff", padding: "10px" }}>
      {message}
    </div>
  );

  const handleChange = (e) => {
    setldata({ ...ldata, [e.target.name]: e.target.value });
  };
  console.log(ldata);
  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handlelogin = async (e) => {
    e.preventDefault();
    if (ldata.email == "" || ldata.Password == "") {
      toast(<CustomToast message="Please fill the details" />, {
        position: "top-center",
      });
      return;
    }
    const emailIsValid = isValidEmail(ldata.email);

    if (!emailIsValid) {
      toast(<CustomToast message="Invalid email" />, {
        position: "top-center",
      });
      return;
    }

    setEmail(ldata.email);

    await dispatch(authlogin({ ldata, navigate }));
  };
  return (
    <div className="h-screen w-full pt-16 flex font-serif">
      <div className="w-2/4 flex flex-col ml-28 mt-16">
        <h1 className="font-text mb-10">Find jobs through your community</h1>
        <div className=" w-full hei">
          <div className="flex flex-col w-2/4">
            <label htmlFor="" className="">
              Email
            </label>
            <input
              type="text"
              className="inputt"
              value={ldata.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="flex flex-col w-2/4 mt-5">
            <label htmlFor="">Password</label>
            <input
              type="text"
              className="inputt1"
              value={ldata.Password}
              onChange={handleChange}
              name="Password"
            />
          </div>
          <button
            className="h-12 mt-10 rounded-lg w-96 bg-blue-500 text-white text-lg"
            onClick={handlelogin}
          >
            Sign In
          </button>
          <div className="flex mt-5  items-center">
            <hr className="hrw h-0.5 text-black" />
            or
            <hr className="hrw h-0.5 text-black" />
          </div>
          <GoogleOAuthProvider clientId="515280682344-0iirk2cmibrjjcrtimgc9jh3n10bgsoe.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                  var decoded = jwt_decode(credentialResponse.credential);
                  console.log(decoded);           
                  setdec(decoded);       
                }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
          <button
            className="h-12 mt-5 mb-10 rounded-lg w-96 border-2 border-slate-500 text-md text-black"
            onClick={HandleRegister}
          >
            New To Linkedin? Join Now
          </button>
        </div>
      </div>
      <div>
        <img src={imgg} className="mt-20" alt="" />
      </div>
    </div>
  );
};

export default Login;
