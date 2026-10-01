function AdminHeader({ onLogout }) {
    return (
        <header className="AdminHeader">
            <div className="AdminHeader__Inner">
                <a className="AdminHeader__Brand" href="#inicio" aria-label="Tiendas 4B administración">
                    <span className="AdminHeader__Mark" aria-hidden="true">4B</span>
                    <span className="AdminHeader__BrandText">
                        <strong>TIENDAS 4B</strong>
                        <small>ADMINISTRACIÓN</small>
                    </span>
                </a>
                <div className="AdminHeader__Session">
                    <span className="AdminHeader__SessionDot" aria-hidden="true" />
                    <span className="AdminHeader__SessionName">Mariana López <small>ADMINISTRADORA</small></span>
                    <button className="AdminHeader__Logout" onClick={onLogout} type="button">Salir</button>
                </div>
            </div>
        </header>
    )
}

export default AdminHeader