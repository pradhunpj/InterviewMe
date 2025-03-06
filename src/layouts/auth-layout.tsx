import { Outlet } from "react-router-dom";

const AuthenticationLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center relative">
      {/* Background Image */}
      <img
        src="/assets/img/bg.png"
        className="absolute w-full h-full object-cover opacity-20"
        alt="Background"
      />

      {/* Centered Content */}
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthenticationLayout;