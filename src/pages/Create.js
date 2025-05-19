import React from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/profile");
  }, [navigate]);
  return null;
};

export default Create;
