const key = Symbol('count');

export const useInitCount = (initialValue: number) => {
  const count = useState('count', () => initialValue);
  count.value += 1;
};

export const useCountState = () => {
  return useState('count');
}

