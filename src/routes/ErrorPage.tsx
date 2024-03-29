import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Ошибка</h1>
      <p>
        {/* @ts-ignore */}
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}