import { NewsList } from "Components/News/NewsList";
import { useNews } from "./useNews";
import { NewsFilters } from "Components/News/NewsFilters";

export const News = () => {
  const { news, status, term, toggleTags, tags,isSelected,handleSetTerm,handleSubmit } = useNews();

  return (
    <>
      <NewsList news={news} status={status} isSelected={isSelected}/>
      <NewsFilters
        tags={tags}
        term={term}
        onSetTerm={handleSetTerm}
        toggleTags={toggleTags}
        isSelected={isSelected}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
