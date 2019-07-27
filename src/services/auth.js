export const user = localStorage['currentUserInvoiceNG'];

export const getCurrentUser = () => {
    if(user) return user;
    return null;
}
export const logout = () => {
    window.location = '/signin';
    localStorage.clear(user);
}