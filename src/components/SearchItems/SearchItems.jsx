import { StyledSearchItems } from "./styles";

const SearchItems = () => {
  return (
    <StyledSearchItems>
      <input
        type="text"
        placeholder="Buscar amigos"
        //value={query}
        //onChange={(e) => setQuery(e.target.value)}
      />
      {/*<ButtonContainer
        padding="0"
        active={true}
        size="3em"
        borderRadius="1.1em"
      >
        <a href="#">
          <BiReset fill="#fff" size={"1.5em"}></BiReset>
        </a>
      </ButtonContainer>*/}
    </StyledSearchItems>
  );
};

export default SearchItems;
