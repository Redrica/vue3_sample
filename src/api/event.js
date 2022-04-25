const getEventCount = (value) => {
  const array = ['котик', 'ластик', 'головастик', 'ужастик', 'олово', 'отит', 'жаба'];
  return array.filter((item) => item.includes(value)).length;
}
export default { getEventCount };
