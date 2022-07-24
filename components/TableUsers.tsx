import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {Table,Thead,Tbody,Tr,Th,Td,TableContainer,Avatar,AvatarGroup,Button,Link} from '@chakra-ui/react'


export default function TableUsers(props){
  const {data} = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;
      
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);      

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };      
  
  return (
    <>
      <div>
        {/* USERS LIST */}
        <TableContainer border='1px' borderColor='gray.200' boxShadow='md' p='6' rounded='md' bg='white'>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>User</Th>
                <Th>Full Name</Th>
                <Th>Email </Th>
                <Th>Profile</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentItems.map(users=>{
                return(
                  <Tr key={users.id}>
                    <Td><AvatarGroup spacing='1rem'><Avatar size='md' name='User Name' src={users.avatar} /></AvatarGroup></Td>
                    <Td>{users.name}</Td>
                    <Td>{users.email}</Td>
                    <Td><Button colorScheme='teal' size='sm'><Link href="/users/user?id=1">View Profile</Link></Button></Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      {/* PAGINATION USERS LIST */}
      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation example" className="mt-3">
          <ul className="pagination">
            <ReactPaginate
              breakLabel="..."
              nextLabel="next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="previous"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageClassName="page-item"
              previousClassName="page-link"
              nextClassName="page-link"
              activeClassName="active"
              pageLinkClassName="page-link"
            />
          </ul>
        </nav>
      </div>
    </>
  )
}
