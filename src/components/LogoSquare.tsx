import type { ECHLTeamType } from "../types/types";
import ADK from "../assets/ADK-S.png";
import ADK2 from "../assets/ADK-A.png";
import ALN from "../assets/ALN_S.png";
import ATL from "../assets/ATL_S.png";
import BLM from "../assets/BLM-S.png";
import CIN from "../assets/CIN_S.png";
import FLA from "../assets/FLA_S.png";
import FWK from "../assets/FWK_S.png";
import GSO from "../assets/GSO-S.png";
import GSO2 from "../assets/GSO_A.png";
import GVL from "../assets/GVL_S.png";
import IDH from "../assets/IDH_S.png";
import IND from "../assets/IND_S.png";
import JAX from "../assets/JAX_S.png";
import KAL from "../assets/KAL_S.png";
import KCM from "../assets/KCM_S.png";
import MNE from "../assets/MNE_S.png";
import MNE2 from "../assets/MNE_A.png";
import NMG from "../assets/NMG_S.png";
import NOR from "../assets/NOR_S.png";
import ORL from "../assets/ORL_S.png";
import RCR from "../assets/RCR_S.png";
import REA from "../assets/REA_S.png";
import SAV from "../assets/SAV_S.png";
import SCS from "../assets/SCS_S.png";
import SCS2 from "../assets/SCS_A.png";
import TAH from "../assets/TAH_S.png";
import TOL from "../assets/TOL_S.png";
import TRE from "../assets/TRE_S.png";
import TRL from "../assets/TRL_S.png";
import TUL from "../assets/TUL_S.png";
import WHL from "../assets/WHL_S.png";
import WIC from "../assets/WIC_S.png";
import WOR from "../assets/WOR_S.png";

interface LogoSquareProps {
  team: ECHLTeamType;
  size: "S" | "L";
  className?: string;
}

const LogoSquare: React.FC<LogoSquareProps> = (props: LogoSquareProps) => {
  const { className, team, size } = props;
  let src = "";
  switch (team) {
    case "ADK":
      src = size === "L" ? ADK2 : ADK;
      break;
    case "ALN":
      src = ALN;
      break;
    case "ATL":
      src = ATL;
      break;
    case "BLM":
      src = BLM;
      break;
    case "CIN":
      src = CIN;
      break;
    case "FLA":
      src = FLA;
      break;
    case "FWK":
      src = FWK;
      break;
    case "GSO":
      src = size === "L" ? GSO2 : GSO;
      break;
    case "GVL":
      src = GVL;
      break;
    case "IDH":
      src = IDH;
      break;
    case "IND":
      src = IND;
      break;
    case "JAX":
      src = JAX;
      break;
    case "KAL":
      src = KAL;
      break;
    case "KCM":
      src = KCM;
      break;
    case "MNE":
      src = size === "L" ? MNE2 : MNE;
      break;
    case "NMG":
      src = NMG;
      break;
    case "NOR":
      src = NOR;
      break;
    case "ORL":
      src = ORL;
      break;
    case "RCR":
      src = RCR;
      break;
    case "REA":
      src = REA;
      break;
    case "SAV":
      src = SAV;
      break;
    case "SCS":
      src = size === "L" ? SCS2 : SCS;
      break;
    case "TAH":
      src = TAH;
      break;
    case "TOL":
      src = TOL;
      break;
    case "TRE":
      src = TRE;
      break;
    case "TRL":
      src = TRL;
      break;
    case "TUL":
      src = TUL;
      break;
    case "WHL":
      src = WHL;
      break;
    case "WIC":
      src = WIC;
      break;
    case "WOR":
      src = WOR;
      break;
  }

  return <img src={src} alt="" className={className ?? ""} />;
};

export default LogoSquare;
