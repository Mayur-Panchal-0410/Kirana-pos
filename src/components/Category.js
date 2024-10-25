// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Toast from 'react-bootstrap/Toast';
// import { Row, Col, Container } from 'react-bootstrap';
// import { useFormik } from 'formik';
// import { CategorySchema } from '../schemas';
// import axios from 'axios';
// import './Category.css';

// function Category() {
//     const [showToast, setShowToast] = useState(false);
//     const [toastMessage, setToastMessage] = useState("");
//     const [toastColor, setToastColor] = useState("success");

//     const initialValues = {
//         category_name: ""
//     };

//     const { values, errors, touched, handleChange, handleSubmit } = useFormik({
//         initialValues: initialValues,
//         validationSchema: CategorySchema,
//         onSubmit: async (values, actions) => {
//             await addCategory(values);
//             actions.resetForm();
//         }
//     });

//     const addCategory = async (values) => {
//         try {
//             const response = await axios.post('http://localhost:9000/createcategory', {
//                 category_name: values.category_name
//             });
//             setToastMessage("Category added successfully!");
//             setToastColor("success"); // Green color for success
//             setShowToast(true); // Show the toast
//         } catch (error) {
//             setToastMessage("Failed to add category.");
//             setToastColor("danger"); // Red color for error
//             setShowToast(true); // Show the toast
//         }
//     };

//     return (
//         <>
//             <Container className='py-2 px-3 my-3 maincontainer'>
//                 <h1 className='d-flex justify-content-center'>ADD TYPE OF PRODUCTS</h1>
//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group className="mb-3">
//                         <Form.Control
//                             type="text"
//                             name="category_name"
//                             value={values.category_name}
//                             onChange={handleChange}
//                             placeholder="Enter category name"
//                         />
//                         {touched.category_name && errors.category_name ? (
//                             <p className="form-error">{errors.category_name}</p>
//                         ) : null}
//                     </Form.Group>
//                     <Row className="mb-3 d-flex justify-content-center">
//                         <Col xs="auto">
//                             <Button variant="outline-primary" type="submit">
//                                 Submit
//                             </Button>
//                         </Col>
//                     </Row>
//                 </Form>

//                 {/* Toast Message */}
//                 <Toast
//                     onClose={() => setShowToast(false)}
//                     show={showToast}
//                     delay={3000} // Auto-hide after 3 seconds
//                     autohide
//                     style={{
//                         position: 'fixed',
//                         bottom: '20px',
//                         right: '20px',
//                         minWidth: '200px',
//                         backgroundColor: toastColor === 'success' ? '#d4edda' : '#f8d7da',
//                         color: toastColor === 'success' ? '#155724' : '#721c24',
//                         border: toastColor === 'success' ? '1px solid #c3e6cb' : '1px solid #f5c6cb',
//                     }}
//                 >
//                     <Toast.Body>{toastMessage}</Toast.Body>
//                 </Toast>
//             </Container>
//         </>
//     );
// }

// export default Category;

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col, Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import { CategorySchema } from '../schemas';
import axios from 'axios';
import './Category.css';

function Category() {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalColor, setModalColor] = useState("success");

    const initialValues = {
        category_name: ""
    };

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: CategorySchema,
        onSubmit: async (values, actions) => {
            await addCategory(values);
            actions.resetForm();
        }
    });

    const addCategory = async (values) => {
        try {
            const response = await axios.post('http://localhost:9000/createcategory', {
                category_name: values.category_name
            });
            setModalMessage("Category added successfully!");
            setModalColor("success");
            setShowModal(true);

            // Auto-close the modal after 3 seconds
            setTimeout(() => {
                setShowModal(false);
            }, 3000);
        } catch (error) {
            setModalMessage("Failed to add category.");
            setModalColor("danger");
            setShowModal(true);

            // Auto-close the modal after 3 seconds
            setTimeout(() => {
                setShowModal(false);
            }, 3000);
        }
    };

    return (
        <>
            <Container className='py-2 px-3 my-3 maincontainer'>
                <h1 className='d-flex justify-content-center'>ADD TYPE OF PRODUCTS</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            name="category_name"
                            value={values.category_name}
                            onChange={handleChange}
                            placeholder="Enter category name"
                        />
                        {touched.category_name && errors.category_name ? (
                            <p className="form-error">{errors.category_name}</p>
                        ) : null}
                    </Form.Group>
                    <Row className="mb-3 d-flex justify-content-center">
                        <Col xs="auto">
                            <Button variant="outline-primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>

                {/* Modal for Success/Error Message */}
                <Modal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton style={{ backgroundColor: modalColor === 'success' ? '#d4edda' : '#f8d7da' }}>
                        <Modal.Title style={{ color: modalColor === 'success' ? '#155724' : '#721c24' }}>
                            {modalColor === 'success' ? "Success" : "Error"}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ color: modalColor === 'success' ? '#155724' : '#721c24' }}>
                        {modalMessage}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    );
}

export default Category;

