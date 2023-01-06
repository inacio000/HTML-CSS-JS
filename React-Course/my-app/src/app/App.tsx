import { Routes } from "./routes"
import { UserLoggedProvider } from "./shared/contexts";

export const App = () =>  {
  return (
    <UserLoggedProvider>
      <Routes />
    </UserLoggedProvider>
  );
}

