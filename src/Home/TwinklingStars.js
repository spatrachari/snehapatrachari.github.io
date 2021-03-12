import * as _ from "lodash";
import "./twinklingStars.scss";

export const TwinklingStars = () => (
  <div className="twinkling-stars">
    {_.times(100, (i) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const d = Math.random() * 5;
      const s = Math.random() * 2 + 1.5;

      return (
        <div
          key={`star_${i}`}
          className="star"
          style={{
            width: d,
            height: d,
            top: `${y}%`,
            left: `${x}%`,
            animationDuration: `${s}s`,
          }}
        />
      );
    })}
  </div>
);
