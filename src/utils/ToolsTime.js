module.exports = {
  getHour: () => {
    return new Date().toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
    });
  },
};
