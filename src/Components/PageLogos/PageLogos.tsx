import { Logo } from "types/logo";

import "./pageLogos.scss";

interface PageLogosProps {
  logos: Logo[];
  onSetFilter: (filter: string) => void;
}

export const PageLogos = ({ logos, onSetFilter }: PageLogosProps) => {
  return (
    <div className="logos">
      <h2>Brands</h2>
      <div className="logo_wrapper">
        {logos.map((l) => (
          <button
            className="logo"
            key={l.id}
            onClick={() => onSetFilter(l.filter)}
          >
            <img src={l.logo} alt={l.filter} />
          </button>
        ))}
      </div>
    </div>
  );
};
