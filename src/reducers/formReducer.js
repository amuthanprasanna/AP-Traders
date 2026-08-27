export default function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_USERID":
      return { ...state, userId: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    case "SUCCESS":
      return { ...state, success: action.payload };
    default:
      return state;
  }
}
