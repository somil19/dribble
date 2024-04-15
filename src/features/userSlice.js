import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [
    {
      name: "John",
      username: "john123",
      email: "Xh9gI@example.com",
      password: "password123",
      avatar: "",
      userChoices: [],
    },
  ],
  currentUserEmail: localStorage.getItem("currentUserEmail") || "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users)); // Save updated users array in local storage
    },
    userAvatar: (state, action) => {
      const { email, avatar } = action.payload;
      const user = state.users.find((user) => user.email === email);
      if (user) {
        user.avatar = avatar;
      }
    },
    setCurrentUserEmail: (state, action) => {
      state.currentUserEmail = action.payload;
      localStorage.setItem("currentUserEmail", action.payload);
    },
    updateUserChoices: (state, action) => {
      const { isChecked, title } = action.payload;
      // console.log(isChecked, title);
      const currentUserEmail = state.currentUserEmail;
      const currentUser = state.users.find(
        (user) => user.email === currentUserEmail
      );

      if (currentUser) {
        if (isChecked) {
          // If the option is checked, add it to the user's choices
          currentUser.usersChoices.push(title);
        } else {
          // If the option is unchecked, remove it from the user's choices
          currentUser.usersChoices = currentUser.usersChoices.filter(
            (choice) => choice !== title
          );
        }
      }
    },
    handleDeleteUser: (state) => {
      // Remove the last user from the users array
      state.users.pop();

      // Update local storage with the modified users array
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});

export const {
  addUser,
  userAvatar,
  setCurrentUserEmail,
  handleDeleteUser,
  updateUserChoices,
} = userSlice.actions;

export default userSlice.reducer;
