import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Stack,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalWrapper';
import InputsGroup from './InputsGroup';

export default function DrawerExample() {
  const { onOpen, isOpen, onClose, Add, errors, setErrors, oder, Update } =
    useContext(GlobalContext);
  const [form, setForm] = useState({});
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onAdd = () => {
    Add(form, setForm);
  };

  const onUpdate = () => {
    Update(form, setForm, form._id);
  };

  useEffect(() => {
    setForm(oder);
  }, [oder]);
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            onClick={() => {
              onClose();
              setErrors({});
              setForm({});
            }}
          />
          <DrawerHeader>Create / Update Product</DrawerHeader>

          <DrawerBody>
            <Stack spacing={'24px'}>
              <InputsGroup
                name="brand"
                onChangeHandler={onChangeHandler}
                value={form?.brand}
                errors={errors?.brand}
              />
              <InputsGroup
                name="transactionType"
                onChangeHandler={onChangeHandler}
                value={form?.transactionType}
                errors={errors?.transactionType}
              />
              <InputsGroup
                name="totalOrders"
                onChangeHandler={onChangeHandler}
                value={form?.totalOrders}
                errors={errors?.totalOrders}
              />
              <InputsGroup
                name="totalOrderValue"
                onChangeHandler={onChangeHandler}
                value={form?.totalOrderValue}
                errors={errors?.totalOrderValue}
              />

              <InputsGroup
                name="grossMarginPercentage"
                onChangeHandler={onChangeHandler}
                value={form?.grossMarginPercentage}
                errors={errors?.grossMarginPercentage}
              />
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                onClose();
                setErrors({});
                setForm({});
              }}
            >
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => (form._id ? onUpdate() : onAdd())}
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
