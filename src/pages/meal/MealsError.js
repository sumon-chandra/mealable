import { Link, useRouteError } from "react-router-dom";

export default function MealsError() {
  const error = useRouteError();
  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to homepage</Link>
    </div>
  );
}
