import { useRouteError } from "react-router-dom";

export default (props) => {
  const error = useRouteError();
  console.log(error.error)
  return <div>error 了</div>
}