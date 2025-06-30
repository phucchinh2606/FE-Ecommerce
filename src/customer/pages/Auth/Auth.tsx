import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Button } from "@mui/material";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex justify-center min-h-screen items-center p-4">
      <div className="max-w-md rounded-md shadow-lg overflow-hidden bg-white">
        <img
          className="w-full rounded-t-md"
          src="https://theme.hstatic.net/200000551679/1001345525/14/slider_1_master.jpg?v=323"
          alt=""
        />
        <div className="px-10 py-8">
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <div className="flex items-center gap-1 justify-center mt-5">
            <p>{isLogin && "Chưa"} có tài khoản?</p>
            <Button size="small" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Tạo tài khoản" : "Đăng nhập"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
