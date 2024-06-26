import { useEffect, useState } from "react"
import { fetchElements, User } from "../services/apiService";

const useData = () => {
  const [users, setUsers] = useState<User[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  useEffect((): void => {
    const loadData = async (): Promise<void> => {
      try {
        const elements = await fetchElements();
        setUsers(elements);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);
  return { users, loading, error };
}

export default useData
