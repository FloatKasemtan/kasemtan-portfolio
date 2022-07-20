import AppRouter from "./AppRouter";
import ThemeContext from "./context/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeContext>
      <AppRouter />
    </ThemeContext>
  );
};

export default App;
