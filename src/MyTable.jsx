import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './mytable.css';
import dataDummy from './dataDummy';

const MyTable = (name, email, role) => {

    const [list, setList] = useState(dataDummy)

    const deleteItem = (i) => {
        // alert(`Do You Want To Delete The Index Number: ${i}`)
        var newlist = list;
        newlist.splice(i, 1);
        setList([...newlist])
    }

    return (
        <>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Role</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>

                    {
                        list.map((mydata, i) => {
                            return (

                                <Tr key={i}>
                                    <Td> {mydata.id} </Td>
                                    <Td> {mydata.name} </Td>
                                    <Td> {mydata.email} </Td>
                                    <Td> {mydata.role} </Td>
                                    <Td>
                                        <div className="buttons">
                                            <button title='Edit Item'>
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </button>
                                            <button title='Delete Item' onClick={() => deleteItem(i)}>
                                                <i className="fa-solid fa-trash-can"></i>
                                            </button>
                                        </div>
                                    </Td>
                                </Tr>
                            );
                        })
                    }

                </Tbody>
            </Table>


            {/* For Showing Array Object */}
            {JSON.stringify(list)}
            {/* For Showing Array Object */}

        </>
    )
}

export default MyTable