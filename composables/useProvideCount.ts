const key = Symbol('count');

export const useProvideCount = (initialValue: number) => {
  //const count = useState('count', () => initialValue);
  const count = ref(initialValue);
  count.value += 1;
  return provide('count', count);
};

export const useInjectCount = () => {
  return inject('count');
}

