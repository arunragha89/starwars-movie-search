import { useContext, useState } from "react";

import { Context as SearchContext } from "../context/SearchContext";

const useAutoComplete = (autoCompleteSuggestions) => {
  const { storeSearchKey } = useContext(SearchContext);

  const [autoCompleteState, setAutoCompleteState] = useState({
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: "",
  });

  const handleOnChange = (e) => {
    const userInput = e.target.value;
    const filteredOptions = autoCompleteSuggestions.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setAutoCompleteState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.target.value,
    });
  };

  const handleOnClick = (e) => {
    setAutoCompleteState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
    });

    storeSearchKey(e.currentTarget.innerText);
  };

  const handleOnBlur = (e) => {
    setAutoCompleteState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
    });
  };

  const onKeyDown = (e) => {
    const { activeOption, filteredOptions } = autoCompleteState;

    if (e.keyCode === 13) {
      e.preventDefault();
      setAutoCompleteState({
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
        userInput: filteredOptions[activeOption],
      });
      storeSearchKey(filteredOptions[activeOption]);
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      setAutoCompleteState({
        ...autoCompleteState,
        activeOption: activeOption - 1,
      });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        return;
      }
      setAutoCompleteState({
        ...autoCompleteState,
        activeOption: activeOption + 1,
      });
    }
  };

  const renderSuggestions = () => {
    return (
      <ul className="absolute bg-gray-200 w-full top-14 left-0 border border-black shadow-md border-t-0">
        {autoCompleteState.filteredOptions.map((optionName, index) => {
          let className;
          if (index === autoCompleteState.activeOption) {
            className = "bg-gray-400";
          }
          return (
            <li
              className={`${className} p-4 hover:bg-gray-400 cursor-pointer`}
              key={optionName}
              onClick={handleOnClick}
            >
              {optionName}
            </li>
          );
        })}
      </ul>
    );
  };

  return {
    handleOnChange,
    handleOnBlur,
    onKeyDown,
    renderSuggestions,
    autoCompleteState,
  };
};

export default useAutoComplete;
