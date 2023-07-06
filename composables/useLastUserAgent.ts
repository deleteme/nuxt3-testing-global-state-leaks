export default function useLastUserAgent() {
  const userAgent = useState<string | undefined>('user-agent', () => {
    if (process.server) {
      const event = useRequestEvent();
      return event.node.req.headers['user-agent'];
    }
  });
  return userAgent;
}
