import { doc, getFirestore, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

// Custom hook to read auth record and users doc
export function useUserData() {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  const [permissions, setPermissions] = useState({});
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      const ref = doc(getFirestore(), 'users', user.uid);
      unsubscribe = onSnapshot(ref, (doc) => {
        setPermissions(doc.data()?.permissions);
        setUsername(doc.data()?.username);
      });
    } else {
      setPermissions({});
      setUsername(null);
    }

    setLoading(false);

    return unsubscribe;
  }, [user]);

  return { loading, permissions, user, username };
}
