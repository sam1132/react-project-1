import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  // function checkInput(value) {
  //   return /^\d+$/.test(value);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    // if (!checkInput(query)) {
    //   setError("Enter a valid id ");
    //   return;
    // }
    // setError("")
    navigate(`/order/${query}`);
    setQuery("");
  }
  function handleChange(e){
    const value = e.target.value
    setQuery(value)

    // if(error && checkInput(value))
    //     setError("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search for order... "
        value={query}
        onChange={handleChange}
      />
      {/* {error && <p style={{ color: "red", marginTop: "4px" }}>{error}</p>}{" "} */}
    </form>
  );
};

export default SearchOrder;
