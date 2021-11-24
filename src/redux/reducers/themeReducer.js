export default function themeReducer(state = "light", action) {
    switch (action.type) {
        case "changeTheme":
            return action.payload;
        default:
            return state;
    }
}