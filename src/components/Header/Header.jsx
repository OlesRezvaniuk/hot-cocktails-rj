import { Navigation } from "../Navigation/Navigation";
import { Auth } from "../Auth/Auth";

export const Header = () => {
  return (
    <div>
      <>logo</>
      <Navigation />
      <div>
        <button>search</button>
        <input type="text" />
      </div>
      <Auth />
    </div>
  );
};
