export const initState = () => ({
  user: JSON.parse(localStorage.getItem('userData')) || null,
  loader: false,
  worker: null,
  chart: [],
  review: [],
});

export default initState;
