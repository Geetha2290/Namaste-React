import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <>
    <h1>OOPS!!!</h1>
    <h2>There is an error {error.status} - {error.statusText} </h2>
    </>
  )
}

export default Error;