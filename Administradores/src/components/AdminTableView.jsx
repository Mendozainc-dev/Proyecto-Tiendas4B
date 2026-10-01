import { useState } from 'react'

function AdminTableView({ table, rows, onCreate, onUpdate, onDelete }) {
    const [search, setSearch] = useState('')
    const [editingId, setEditingId] = useState(null)
    const [values, setValues] = useState({})
    const filteredRows = rows.filter((row) =>
        table.columns.some((column) =>
            String(row[column.key] ?? '').toLowerCase().includes(search.toLowerCase()),
        ),
    )

    function handleSubmit(event) {
        event.preventDefault()
        const record = Object.fromEntries(new FormData(event.currentTarget).entries())

        if (editingId !== null) {
            onUpdate({ ...record, id: editingId })
        } else {
            onCreate({ ...record, id: `${table.id.slice(0, 3).toUpperCase()}-${Date.now()}` })
        }

        setEditingId(null)
        setValues({})
    }

    function startEditing(row) {
        setEditingId(row.id)
        setValues(Object.fromEntries(table.fields.map((field) => [field.name, row[field.name] ?? ''])))
    }

    function cancelEditing() {
        setEditingId(null)
        setValues({})
    }

    function removeRow(row) {
        const description = row[table.fields[0].name] || row.id
        const action = table.deactivateValue ? 'desactivar' : 'eliminar'
        if (window.confirm(`¿${action} el registro "${description}" de ${table.label}?`)) {
            if (table.deactivateValue) {
                onUpdate({ ...row, estado: table.deactivateValue })
            } else {
                onDelete(row.id)
            }
            if (editingId === row.id) cancelEditing()
        }
    }

    return (
        <section className="AdminWorkspace" aria-label={`Administrar ${table.title}`}>
            <div className="AdminFormPanel">
                <div className="AdminPanelHeading">
                    <span className="AdminPanelHeading__Index">01 / CAPTURA</span>
                    <h2>{editingId === null ? 'Nuevo registro' : 'Editar registro'}</h2>
                </div>
                <form className="AdminForm" onSubmit={handleSubmit}>
                    {table.fields.map((field) => (
                        <label className={`AdminForm__Field${field.type === 'textarea' ? ' is-wide' : ''}`} key={field.name}>
                            <span>{field.label}</span>
                            {field.type === 'select' ? (
                                <select
                                    name={field.name}
                                    onChange={(event) => setValues({ ...values, [field.name]: event.target.value })}
                                    required={field.required}
                                    value={values[field.name] ?? ''}
                                >
                                    <option value="">Seleccionar</option>
                                    {field.options.map((option) => <option key={option} value={option}>{option}</option>)}
                                </select>
                            ) : field.type === 'textarea' ? (
                                <textarea
                                    name={field.name}
                                    onChange={(event) => setValues({ ...values, [field.name]: event.target.value })}
                                    required={field.required}
                                    rows="3"
                                    value={values[field.name] ?? ''}
                                />
                            ) : (
                                <input
                                    max={field.max}
                                    min={field.min}
                                    name={field.name}
                                    onChange={(event) => setValues({ ...values, [field.name]: event.target.value })}
                                    required={field.required}
                                    step={field.step}
                                    type={field.type || 'text'}
                                    value={values[field.name] ?? ''}
                                />
                            )}
                        </label>
                    ))}
                    <div className="AdminForm__Actions">
                        <button className="AdminButton AdminButton--primary" type="submit">
                            {editingId === null ? 'Guardar registro' : 'Actualizar registro'}
                        </button>
                        {editingId !== null && (
                            <button className="AdminButton AdminButton--quiet" onClick={cancelEditing} type="button">
                                Cancelar
                            </button>
                        )}
                    </div>
                    <p className="AdminForm__Note">Cambios de demostración · solo en esta sesión</p>
                </form>
            </div>

            <div className="AdminDataPanel">
                <div className="AdminPanelHeading AdminPanelHeading--table">
                    <div>
                        <span className="AdminPanelHeading__Index">02 / REGISTROS</span>
                        <h2>Tabla {table.label}</h2>
                    </div>
                    <label className="AdminSearch">
                        <span className="visually-hidden">Buscar en {table.label}</span>
                        <input
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Buscar registro"
                            type="search"
                            value={search}
                        />
                    </label>
                </div>
                <div className="AdminTable__Scroll">
                    <table className="AdminTable">
                        <thead>
                            <tr>
                                {table.columns.map((column) => <th key={column.key} scope="col">{column.label}</th>)}
                                {!table.appendOnly && <th scope="col">Acciones</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRows.map((row) => (
                                <tr key={row.id}>
                                    {table.columns.map((column) => <td key={column.key}>{row[column.key] || '—'}</td>)}
                                    {!table.appendOnly && (
                                        <td className="AdminTable__Actions">
                                            <button onClick={() => startEditing(row)} type="button">Editar</button>
                                            <button onClick={() => removeRow(row)} type="button">
                                                {table.deactivateValue ? 'Desactivar' : 'Eliminar'}
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                            {filteredRows.length === 0 && (
                                <tr>
                                    <td className="AdminTable__Empty" colSpan={table.columns.length + (table.appendOnly ? 0 : 1)}>
                                        No hay registros que coincidan con la búsqueda.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="AdminDataPanel__Foot">
                    <span>{filteredRows.length} {filteredRows.length === 1 ? 'registro' : 'registros'}</span>
                    <span>DATOS DE MUESTRA</span>
                </div>
            </div>
        </section>
    )
}

export default AdminTableView