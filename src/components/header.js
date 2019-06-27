import React from 'react';

const Header = (props) => (
    <div className="Header">
        <div className="visits">Visitas: {props.visits}</div>
        <img src="/logo.png" alt="Manofacturing" className="logo" />
        <div className="title">
            Somos una empresa comprometida con nuestros clientes
        </div>
        <div className="subtitle">
            En la  expansión y planeación de su modelo de negocio, brindando el soporte y confianza necesarias para el crecimiento óptimo de sus empresas.
        </div>
    </div>
)
export default Header;