import {useEffect, useState} from 'react';
import ApiClient from '../api/client';
import {httpStatus} from '../constants';
import {getUUID} from '../utils/keychain';

const useSession = () => {
  const [data, setData] = useState({session: null, step: null});
  const [error, setError] = useState(null);
  const [fetched, setFetched] = useState(null);

  useEffect(() => {
    const fetchSession = async deviceUUID => {
      try {
        const response = await ApiClient.get(
          `/registration-session/${deviceUUID}`,
        );
        if (response && response.status === httpStatus.OK && response.data) {
          setData({
            session: response.data.registrationSession,
            step: response.data.registrationStep,
          });
          setFetched(true);
        }
      } catch (e) {
        setError(e);
        setFetched(true);
      }
    };
    getUUID().then(deviceUUID => fetchSession(deviceUUID));
  }, []);
  return {fetched, data, error};
};

export default useSession;
