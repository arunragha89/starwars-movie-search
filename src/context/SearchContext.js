import createDataContext from "./createDataContext";

const searchReducer = (state, action) => {
  switch (action.type) {
    case "store_search_key":
      return action.payload;
    default:
      return state;
  }
};

const storeSearchKey = (dispatch) => async (searchKey) => {
  dispatch({ type: "store_search_key", payload: searchKey });
};

export const { Provider, Context } = createDataContext(
  searchReducer,
  { storeSearchKey },
  ""
);
