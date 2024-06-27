export const getToken = () => {
    const currentUsername = localStorage.getItem('currentUsername');
    const userTokens = JSON.parse(localStorage.getItem('UserTokens')) || {};
    return userTokens[currentUsername] || null;
  };
  