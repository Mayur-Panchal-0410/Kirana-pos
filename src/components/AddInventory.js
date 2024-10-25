// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { useFormik } from 'formik';
// import { AddInventorySchema } from '../schemas'; // Adjust the path as necessary
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Container, Modal } from 'react-bootstrap';
// import './AddInventory.css';
// import axios from 'axios';

// const initialValues = {
//     barcode: "",
//     product_name: "",
//     category_id: "",
//     weight: "",
//     quantity: "",
//     mrp: "",
//     cost_price: "",
//     selling_price: "",
//     unit_id: "",  // Added unit_id
// };

// function AddInventory() {
//     const [showModal, setShowModal] = useState(false);
//     const [modalMessage, setModalMessage] = useState("");
//     const [modalVariant, setModalVariant] = useState("success"); // success or error

//     const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
//         initialValues: initialValues,
//         validationSchema: AddInventorySchema,
//         onSubmit: (values, actions) => {
//             addProducts(values);  // Call the function with the form values
//             actions.resetForm();
//         }
//     });

//     const addProducts = (productData) => {
//         axios.post('http://localhost:9000/createproducts', productData)
//             .then(response => {
//                 console.log('Product added successfully:', response.data);
//                 // Show success modal
//                 setModalMessage("Product added successfully!");
//                 setModalVariant("success");
//                 setShowModal(true);
//                 setTimeout(() => setShowModal(false), 3000); // Hide modal after 3 seconds
//             })
//             .catch(error => {
//                 console.error('There was an error adding the product!', error);
//                 // Show error modal
//                 setModalMessage("There was an error adding the product!");
//                 setModalVariant("error");
//                 setShowModal(true);
//                 setTimeout(() => setShowModal(false), 3000); // Hide modal after 3 seconds
//             });
//     };

//     return (
//         <>
//             <Container className='py-2 px-3 my-3 maincontainer'>
//                 <h1 className='d-flex justify-content-center'>Add Your Products</h1>
//                 <Form onSubmit={handleSubmit}>
//                     <Row className="mb-3">
//                         <Form.Group as={Col} controlId="formGridBarcode">
//                             <Form.Label>Barcode</Form.Label>
//                             <Form.Control
//                                 name='barcode'
//                                 type="text"
//                                 value={values.barcode}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 placeholder="Enter Barcode"
//                             />
//                             {touched.barcode && errors.barcode ? (
//                                 <p className="form-error">{errors.barcode}</p>
//                             ) : null}
//                         </Form.Group>

//                         <Form.Group as={Col} controlId="formGridProductName">
//                             <Form.Label>Product Name</Form.Label>
//                             <Form.Control
//                                 name='product_name'
//                                 type="text"
//                                 value={values.product_name}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 placeholder="Enter Product Name"
//                             />
//                             {touched.product_name && errors.product_name ? (
//                                 <p className="form-error">{errors.product_name}</p>
//                             ) : null}
//                         </Form.Group>
//                     </Row>

//                     <Row className="mb-3">
//                         <Form.Group as={Col}>
//                             <Form.Label>Category</Form.Label>
//                             <Form.Select
//                                 name="category_id"
//                                 value={values.category_id}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                             >
//                                 <option value="">Select Category</option>
//                                 <option value="1">Fruits</option>
//                                 <option value="2">Vegetables</option>
//                                 <option value="3">Dairy</option>
//                                 <option value="4">Meat</option>
//                                 <option value="5">Grains</option>
//                                 <option value="6">Snacks</option>
//                             </Form.Select>
//                         </Form.Group>
//                     </Row>

//                     <Row className="mb-3">
//                         <Form.Group as={Col} controlId="formGridWeight">
//                             <Form.Label>Weight</Form.Label>
//                             <Form.Control
//                                 name='weight'
//                                 type="number"
//                                 value={values.weight}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 placeholder="Enter Weight"
//                             />
//                             {touched.weight && errors.weight ? (
//                                 <p className="form-error">{errors.weight}</p>
//                             ) : null}
//                         </Form.Group>

//                         <Form.Group as={Col} controlId="formGridUnit">
//                             <Form.Label>Unit</Form.Label>
//                             <Form.Select
//                                 name="unit_id"
//                                 value={values.unit_id}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                             >
//                                 <option value="">Select Unit</option>
//                                 <option value="1">Kg</option>
//                                 <option value="2">Litre</option>
//                                 <option value="3">Pcs</option>
//                                 <option value="4">Dozen</option>
//                             </Form.Select>
//                             {touched.unit_id && errors.unit_id ? (
//                                 <p className="form-error">{errors.unit_id}</p>
//                             ) : null}
//                         </Form.Group>
//                     </Row>

//                     <Row className="mb-3">
//                         <Form.Group as={Col} controlId="formGridQuantity">
//                             <Form.Label>Quantity</Form.Label>
//                             <Form.Control
//                                 name='quantity'
//                                 type="number"
//                                 value={values.quantity}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 placeholder="Enter Quantity"
//                             />
//                             {touched.quantity && errors.quantity ? (
//                                 <p className="form-error">{errors.quantity}</p>
//                             ) : null}
//                         </Form.Group>

//                         <Form.Group as={Col} controlId="formGridMRP">
//                             <Form.Label>MRP</Form.Label>
//                             <Form.Control
//                                 name='mrp'
//                                 type="number"
//                                 value={values.mrp}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 placeholder="Enter MRP"
//                             />
//                             {touched.mrp && errors.mrp ? (
//                                 <p className="form-error">{errors.mrp}</p>
//                             ) : null}
//                         </Form.Group>
//                     </Row>

//                     <Row className="mb-3">
//                         <Form.Group as={Col} controlId="formGridCostPrice">
//                             <Form.Label>Cost Price</Form.Label>
//                             <Form.Control
//                                 name='cost_price'
//                                 type="number"
//                                 value={values.cost_price}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 placeholder="Enter Cost Price"
//                             />
//                             {touched.cost_price && errors.cost_price ? (
//                                 <p className="form-error">{errors.cost_price}</p>
//                             ) : null}
//                         </Form.Group>

//                         <Form.Group as={Col} controlId="formGridSellingPrice">
//                             <Form.Label>Selling Price</Form.Label>
//                             <Form.Control
//                                 name='selling_price'
//                                 type="number"
//                                 value={values.selling_price}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 placeholder="Enter Selling Price"
//                             />
//                             {touched.selling_price && errors.selling_price ? (
//                                 <p className="form-error">{errors.selling_price}</p>
//                             ) : null}
//                         </Form.Group>
//                     </Row>

//                     <Row className="mb-3 d-flex justify-content-center">
//                         <Col xs="auto">
//                             <Button variant="outline-primary" type="submit">
//                                 Submit
//                             </Button>
//                         </Col>
//                     </Row>
//                 </Form>
//             </Container>

//             {/* Modal for success/error messages */}
//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{modalVariant === "success" ? "Success" : "Error"}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body className={modalVariant === "success" ? "text-success" : "text-danger"}>
//                     {modalMessage}
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowModal(false)}>
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }

// export default AddInventory;
// ---------------------------------
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import { AddInventorySchema } from '../schemas'; // Adjust the path as necessary
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Modal } from 'react-bootstrap';
import './AddInventory.css';
import axios from 'axios';

const initialValues = {
    barcode: "",
    product_name: "",
    category_id: "",
    weight: "",
    quantity: "",
    mrp: "",
    cost_price: "",
    selling_price: "",
    unit_id: "",
};

function AddInventory() {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalVariant, setModalVariant] = useState("success");

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: AddInventorySchema,
        onSubmit: (values, actions) => {
            addProducts(values);
            actions.resetForm();
        }
    });

    const addProducts = async (productData) => {
        try {
            const response = await axios.post('http://localhost:9000/createproducts', productData);
            console.log('Product added successfully:', response.data);
            showModalMessage("Product added successfully!", "success");
        } catch (error) {
            console.error('Error adding the product!', error);
            showModalMessage("There was an error adding the product!", "error");
        }
    };

    const showModalMessage = (message, variant) => {
        setModalMessage(message);
        setModalVariant(variant);
        setShowModal(true);
        setTimeout(() => setShowModal(false), 3000);
    };

    return (
        <>
            <Container className='py-2 px-3 my-3 maincontainer'>
                <h1 className='text-center'>Add Your Products</h1>
                <Form onSubmit={formik.handleSubmit}>
                    {renderFormGroup(formik)}
                    <Row className="mb-3 d-flex justify-content-center">
                        <Col xs="auto">
                            <Button variant="outline-primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalVariant === "success" ? "Success" : "Error"}</Modal.Title>
                </Modal.Header>
                <Modal.Body className={modalVariant === "success" ? "text-success" : "text-danger"}>
                    {modalMessage}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const renderFormGroup = (formik) => (
    <>
        <Row className="mb-3">
            {renderInputField(formik, "barcode", "Barcode", "text")}
            {renderInputField(formik, "product_name", "Product Name", "text")}
        </Row>

        <Row className="mb-3">
            <Form.Group as={Col}>
                <Form.Label>Category</Form.Label>
                <Form.Select
                    name="category_id"
                    value={formik.values.category_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    <option value="">Select Category</option>
                    <option value="1">Fruits</option>
                    <option value="2">Vegetables</option>
                    <option value="3">Dairy</option>
                    <option value="4">Meat</option>
                    <option value="5">Grains</option>
                    <option value="6">Snacks</option>
                </Form.Select>
            </Form.Group>
        </Row>

        <Row className="mb-3">
            {renderInputField(formik, "weight", "Weight", "number")}
            {renderSelectField(formik, "unit_id", "Unit", ["Kg", "Litre", "Pcs", "Dozen"])}
        </Row>

        <Row className="mb-3">
            {renderInputField(formik, "quantity", "Quantity", "number")}
            {renderInputField(formik, "mrp", "MRP", "number")}
        </Row>

        <Row className="mb-3">
            {renderInputField(formik, "cost_price", "Cost Price", "number")}
            {renderInputField(formik, "selling_price", "Selling Price", "number")}
        </Row>
    </>
);

const renderInputField = (formik, name, label, type) => (
    <Form.Group as={Col} controlId={`formGrid${name.charAt(0).toUpperCase() + name.slice(1)}`}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
            name={name}
            type={type}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={`Enter ${label}`}
        />
        {formik.touched[name] && formik.errors[name] && (
            <p className="form-error">{formik.errors[name]}</p>
        )}
    </Form.Group>
);

const renderSelectField = (formik, name, label, options) => (
    <Form.Group as={Col}>
        <Form.Label>{label}</Form.Label>
        <Form.Select
            name={name}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        >
            <option value="">Select {label}</option>
            {options.map((option, index) => (
                <option key={index} value={index + 1}>{option}</option>
            ))}
        </Form.Select>
        {formik.touched[name] && formik.errors[name] && (
            <p className="form-error">{formik.errors[name]}</p>
        )}
    </Form.Group>
);

export default AddInventory;
