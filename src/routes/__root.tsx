import {
  createRootRoute,
  useLocation,
  useRouter,
} from "@tanstack/react-router";
import { useCookies } from "react-cookie";

const RootComponent = () => {
  const router = useRouter();
  const location = useLocation();
  const [cookie, setCookie] = useCookies(["test"]);

  const handleClick = (value: string) => {
    setCookie("test", value);
    router.history.replace(location.pathname);
  };

  return (
    <>
      <div onClick={() => handleClick("1")}>set 'test' cookie to 1</div>
      <div onClick={() => handleClick("2")}>set 'test' cookie to 2</div>
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
