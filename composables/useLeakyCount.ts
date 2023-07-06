// this state survives across requests on the server
const count = ref(0);

export const useLeakyCount = () => {
  count.value += 1;
  return count;
};
