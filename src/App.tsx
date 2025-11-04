import { useState } from "react";
import CrtIntro from "./components/CrtBootIntro3D";
import PortfolioMain from "./components/PortfolioMain";

export default function PortfolioHomepage() {
  const [booting, setBooting] = useState(true);
  return (
    <div className="min-h-screen bg-[#e8e3d8]">
      {booting ? (
        <CrtIntro onFinish={() => setBooting(false)} />
      ) : (
        <PortfolioMain />
      )}
    </div>
  );
}
