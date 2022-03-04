import { useSelector } from 'react-redux';

const useUser = () => useSelector(state => state.user);
export default useUser;
