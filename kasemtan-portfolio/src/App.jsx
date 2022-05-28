import AppRouter from "./AppRouter";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeContext>
      <AppRouter />
    </ThemeContext>
  );
};

export default App;
