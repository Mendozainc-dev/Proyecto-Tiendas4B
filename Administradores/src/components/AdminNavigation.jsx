function AdminNavigation({ tables, activeTableId, onSelect }) {
    return (
        <nav className="AdminNavigation" aria-label="Tablas de administración">
            <div className="AdminNavigation__Inner">
                {tables.map((table) => (
                    <button
                        aria-current={activeTableId === table.id ? 'page' : undefined}
                        className={`AdminNavigation__Link${activeTableId === table.id ? ' is-active' : ''}`}
                        key={table.id}
                        onClick={() => onSelect(table.id)}
                        type="button"
                    >
                        {table.label}
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default AdminNavigation