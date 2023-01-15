import {useEffect, useState} from 'react';
import ApiClient from '../api/client';
import {httpStatus} from '../constants';
import {getUUID} from '../utils/keychain';

const useAccount = () => {
  const [data, setData] = useState({account: null, locale: null});
  const [error, setError] = useState(null);
  const [fetched, setFetched] = useState(null);

  useEffect(() => {
    const fetchAccount = async deviceUUID => {
      try {
        const response = await ApiClient.get(`/account/${deviceUUID}`);
        if (response && response.data && response.status === httpStatus.OK) {
          setData({
            account: response.data,
            locale: response.data.locale.split('-')[0],
          });
          setFetched(true);
        }
      } catch (e) {
        setError(e);
        setFetched(true);
      }
    };
    getUUID().then(deviceUUID => fetchAccount(deviceUUID));
  }, []);

  return {fetched, data, error};
};

export default useAccount;
