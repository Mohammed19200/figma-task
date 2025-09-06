import "./Login.css";
import "./LoginMediaQuery.css";
import { PiShoppingBag } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import logoTitle from "../assets/logo.png";
export default function LoginPage() {
  return (
    <main className="hero-section col-12">
      <div className="div-circle-TopRight"></div>
      <div className="div-circle-BottomRight"></div>
      <div className="div-circle-BottomLeft"></div>
      <div className="div-circle-TopLeft"></div>
      
      <section className="form-section col-12 col-md-11 col-lg-4 col-xl-4">
        <h1>Welcome back</h1>
        <p>
          Step into our shopping metaverse for an unforgettable shopping
          experience
        </p>
        <form className="form-style" action="">
          <div className="input-group mb-3">
            <span className="input-group-text">
              <PiShoppingBag />
            </span>
            <input type="email" className="form-control" placeholder="Email" />
          </div>

          <div className="input-group mb-4">
            <span className="input-group-text">
              <CiLock />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          <p className="text-center mt-3 text-signup">
            Don't have an account? <span>Sign up</span>
          </p>
        </form>
      </section>

      <section className=" col-12 col-md-11 col-lg-6 col-xl-7 images-container">
        <div className="image-section col-12"></div>
        <img className="logo-title" src={logoTitle} alt="logo-title" />
      </section>
    </main>
  );
}
