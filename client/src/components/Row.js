import { Box, Button, Td, Tr } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { GlobalContext } from '../context/GlobalWrapper';

const Row = ({
  index,
  id,
  brand,
  transactionType,
  totalOrders,
  totalOrderValue,
  grossMarginPercentage,
}) => {
  const { Delete, onOpen, FindOne } = useContext(GlobalContext);
  return (
    <Tr>
      <Td>{index + 1}</Td>
      <Td>{brand}</Td>
      <Td>{transactionType}</Td>
      <Td>{totalOrders}</Td>
      <Td>{totalOrderValue}</Td>
      <Td>{grossMarginPercentage}</Td>
      <Td>
        <Box display="flex" gap="1">
          <Button colorScheme={'blue'}>
            <AiFillEdit
              onClick={() => {
                onOpen();
                FindOne(id);
              }}
            />
          </Button>
          <Button colorScheme={'red'} onClick={() => Delete(id)}>
            <AiFillDelete />
          </Button>
        </Box>
      </Td>
    </Tr>
  );
};

export default Row;
