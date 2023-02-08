import { createContext, useState } from 'react';
import axios from 'axios';
import { useDisclosure, useToast } from '@chakra-ui/react';
export const GlobalContext = createContext();

export default function Wrapper({ children }) {
  const [oders, setOders] = useState([]);
  const [oder, setOder] = useState({});
  const [errors, setErrors] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const FetchOders = () => {
    axios
      .get('/api/oders')
      .then((res) => {
        setOders(res.data);
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  };

  const Search = (query) => {
    axios
      .post(`/api/oders/search?key=${query}`)
      .then((res) => {
        setOders(res.data);
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  };

  const Delete = (id) => {
    axios
      .delete(`/api/oders/${id}`)
      .then((res) => {
        setOders(oders.filter((u) => u._id != id));
        toast({
          title: 'Oder Deleted',
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  };

  const Add = (form, setForm) => {
    axios
      .post('/api/oders', form)
      .then((res) => {
        setOders([...oders, res.data]);
        toast({
          title: 'Oder Added',
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
        setErrors({});
        setForm({});
        onClose();
      })
      .catch((err) => {
        setErrors(err.response.data.error);
      });
  };

  const FindOne = async (id) => {
    await axios
      .get(`/api/oders/${id}`)
      .then((res) => {
        setOder(res.data);
      })
      .catch((err) => {
        setErrors(err.response.data.error);
      });
  };

  const Update = (form, setForm, id) => {
    axios
      .put(`/api/oders/${id}`, form)
      .then((res) => {
        toast({
          title: 'oder Updated',
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
        setErrors({});
        setForm({});
        onClose();
        FetchOders();
      })
      .catch((err) => {
        setErrors(err.response.data.error);
      });
  };
  return (
    <GlobalContext.Provider
      value={{
        FetchOders,
        Search,
        Delete,
        Add,
        FindOne,
        Update,
        oders,
        onOpen,
        isOpen,
        onClose,
        errors,
        setErrors,
        oder,
        setOder,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
