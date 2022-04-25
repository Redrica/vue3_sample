const array = ['котик', 'ластик', 'головастик', 'ужастик', 'олово', 'отит', 'жаба'];

const getEventCount = (value) => {
  return array.filter((item) => item.includes(value)).length;
}

// дла асинхронного вызова
const getEventCountAsync = (value) => {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    const result = array.filter((item) => item.includes(value)).length;
    setTimeout(() => {
      resolve(result);
    }, 3000);
  })
}

export default { getEventCount, getEventCountAsync };
