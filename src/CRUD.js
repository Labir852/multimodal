import React, {useState,useEffect,Fragment} from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const CRUD = () => {
    const empdata = [
        {
            id: 1,
            name: 'labir',
            age: 23,
            isActive: 1
        },
        {
            id: 2,
            name: 'kabir',
            age: 24,
            isActive: 1
        },
        {
            id: 3,
            name: 'jabir',
            age: 25,
            isActive: 1
        },

    ]

    const handleEdit=(id)=>{
        handleShow();
    }
    
    const handleDelete=(id)=>{
        if(window.confirm("Are you sure you want to delete this employee?") == true)
        {
            alert(id);
        }
    }


    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdate = () => {

  }

    const [Data,setData] = useState([]);
    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [IsActive, setIsActive] = useState(0);

      
    const [editId, seteditId] = useState('')
    const [editName, setEditName] = useState('');
    const [editAge, setEditAge] = useState('');
    const [editIsActive, setEditIsActive] = useState(0);



    useEffect(()=>{
        setData(empdata);
        // eslint-disable-next-line
    },[])


  return (
    <Fragment>
        <Container className="styling">
            <Row>
            <Col>
                        <input type="text" className="form-control" placeholder="Enter Name" value={Name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <input type="text" className="form-control" placeholder="Enter Age" value={Age}
                        onChange={(e) => setAge(e.target.value)}
                        />
                    </Col>
                    <Col>
                    <input type="checkbox" 
                    checked={IsActive === 1 ? true : false}
                    value={IsActive}
                    onChange={(e) => setIsActive(e)}
                    />
                    <label>&nbsp;IsActive</label>
                    </Col>
                    <Col>
                        <Button className="btn btn-primary">Add</Button>
                    </Col>
            </Row>
                
        </Container>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>isActive</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                    {
                        Data && Data.length>0 
                        ?
                        Data.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.isActive}</td>
                                    <td colSpan={2}>
                                        <button className="btn btn-primary" onClick={()=>handleEdit(item.id)}>Edit</button> &nbsp;
                                         <button className="btn btn-danger" onClick={()=>handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        'Loading ....'
                    }
            </tbody>
        </Table>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modify / Update Employee </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                
            <Row>
            <Col>
                        <input type="text" className="form-control" placeholder="Enter Name" value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <input type="text" className="form-control" placeholder="Enter Age" value={editAge}
                        onChange={(e) => setEditAge(e.target.value)}
                        />
                    </Col>
                    <Col>
                    <input type="checkbox" 
                    checked={editIsActive === 1 ? true : false}
                    onChange={(e) => setEditIsActive(e)} value={editIsActive}
                    />
                    <label>&nbsp;IsActive</label>
                    </Col>
                </Row>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleUpdate}>
                    Save Changes
                </Button>
            </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default CRUD

//https://www.youtube.com/watch?v=OrHO7UeDwZc