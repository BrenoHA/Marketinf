import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Row, Col, Button, InputGroup, FormControl, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logoBSolo from "../../../assets/LogoBrancasolo.svg";




import './anuncio.css';

export default function Anuncio() {

    
    const history = useHistory()
    const [anuncios, setAnuncios] = useState([1, 2, 3]);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    function novoAnuncio(){
        history.push('/empresa/anuncios/novo')
    }


    return (

        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/empresa">
                    <img
                        alt="."
                        src={logoBSolo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    Marketinf
                </Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="mr-auto">
                    <NavDropdown title="Perfil" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/empresa/perfil">Editar perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/empresa">Buscar influenciadores</NavDropdown.Item>
                    </NavDropdown>
                    <Button variant="outline-light" href="/" className="btn-nav-bar">Sair</Button>
                </Nav>
            </Navbar>

            <div className="content">
                <div className="">

                    <h1 className="search-marca mb-4">Meus anúncios</h1>

                    <div className="buttons-group">
                        <Button variant="primary" className="mr-5" onClick={novoAnuncio}>Criar</Button>
                        <Button variant="primary" className="mr-5">Ativos</Button>
                        <Button variant="primary" className="mr-5">Inativos</Button>
                    </div>
                </div>
                <ul>

                    {anuncios.map(anuncios => (
                        <section className="empresa-list" onClick={toggle}>

                            <div className="circle"></div>
                            <div className="empresa">



                                <Col>
                                    <div className="foto">
                                        <img src="" />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="nome">
                                        <h2 className="title">Tênis Nike Air</h2>
                                        <h3 className="description">R$50,00</h3>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="cidade">
                                        <h2 className="title">Visitas</h2>
                                        <h3 className="description">83 visulizações</h3>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="setor">
                                        <h2 className="title">Descrição</h2>
                                        <h3 className="description text-overflow">Procuro digital influencer com mais de 5 mil seguidores
                                        para divulgar meus produtos  </h3>
                                    </div>
                                </Col>

                            </div>

                            <div>

                            </div>

                        </section>
                    ))}
                </ul>
            </div >
        </div>





    );
};