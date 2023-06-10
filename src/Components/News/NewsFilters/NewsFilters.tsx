import { ChangeEvent, FormEvent } from "react";
import { TextInput } from "Components/SellCar";

import "./newsFilters.scss";

interface NewsFiltersProps {
  tags: string[];
  term: string;
  onSetTerm: (e: ChangeEvent<HTMLInputElement>) => void;
  toggleTags: (tag: string) => void;
  isSelected: (tag: string) => boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const NewsFilters = ({
  tags,
  term,
  toggleTags,
  isSelected,
  onSetTerm,
  handleSubmit,
}: NewsFiltersProps) => {
  const tagsList = tags.map((t, i) => (
    <button
      key={i}
      className={isSelected(t) ? "selected" : "news_tag"}
      onClick={() => toggleTags(t)}
    >
      {t}
    </button>
  ));

  return (
    <div className="news_filters">
      <div className="wrapper">
        <form name="news_filter" onSubmit={handleSubmit}>
          <TextInput
            id={"filter_term"}
            value={term}
            className="filter_term"
            label={"Search"}
            onChange={onSetTerm}
            max={10}
          />
        </form>

        <div className="filter_tags">{tagsList}</div>
      </div>
    </div>
  );
};
