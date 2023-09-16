import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../../components/FormInput/FormInput";
import LoaderElement from "../../components/Loader/LoaderElement";
import { logger } from "../../redux/reducers/User/querries";
import { FormContainer, LoginButton, LoginContainer } from "./login.style";

const Login = ({ loading, setLoading }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });

  const setCredentials = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    logger(user, dispatch, setLoading);
  };
  return (
    <main>
      <LoginContainer>
        <h2>Connexion</h2>
        {loading ? (
          <LoaderElement />
        ) : (
          <FormContainer onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              label="e-mail"
              value={user.email}
              handleChange={setCredentials}
              required
            />
            <FormInput
              type="password"
              name="password"
              label="mot de passe"
              value={user.password}
              handleChange={setCredentials}
              required
            />
            <LoginButton
              disabled={!user.password || !user.email || loading}
              type="submit"
            >
              Se Connecter
            </LoginButton>
          </FormContainer>
        )}
      </LoginContainer>
    </main>
  );
};

export default Login;
