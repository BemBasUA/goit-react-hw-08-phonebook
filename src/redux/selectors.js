export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectEmail = state => state.auth.user.email;
