import { useState } from 'react'
import AdminHeader from '../components/AdminHeader.jsx'
import AdminNavigation from '../components/AdminNavigation.jsx'
import AdminTableView from '../components/AdminTableView.jsx'
import { ADMIN_TABLES } from '../data/adminTables.js'
import './Home.css'

function Home({ onLogout }) {
    const [activeTableId, setActiveTableId] = useState('usuarios')
    const [records, setRecords] = useState(() =>
        Object.fromEntries(ADMIN_TABLES.map((table) => [table.id, table.rows.map((row) => ({ ...row }))])),
    )
    const activeTable = ADMIN_TABLES.find((table) => table.id === activeTableId) || ADMIN_TABLES[0]
    const activeUsers = records.usuarios.filter((user) => user.estado === 'Activo').length
    const openStores = records.tiendas.filter((store) => store.estado === 'Activa').length
    const lowStock = records.inventario.filter((item) => Number(item.stock) <= Number(item.minimo)).length

    function createRecord(tableId, record) {
        const newRecord = { ...record }
        if (tableId === 'inventario') {
            newRecord.estado = Number(record.stock) <= Number(record.minimo) ? 'Stock bajo' : 'Disponible'
        }
        if (tableId === 'bitacora') {
            newRecord.fecha = new Intl.DateTimeFormat('es-MX', {
                dateStyle: 'short',
                timeStyle: 'short',
            }).format(new Date())
        }
        setRecords((current) => ({ ...current, [tableId]: [newRecord, ...current[tableId]] }))
    }

    function updateRecord(tableId, updatedRecord) {
        setRecords((current) => ({
            ...current,
            [tableId]: current[tableId].map((record) => {
                if (record.id !== updatedRecord.id) return record
                const mergedRecord = { ...record, ...updatedRecord }
                if (tableId === 'inventario') {
                    mergedRecord.estado = Number(mergedRecord.stock) <= Number(mergedRecord.minimo)
                        ? 'Stock bajo'
                        : 'Disponible'
                }
                return mergedRecord
            }),
        }))
    }

    function deleteRecord(tableId, recordId) {
        setRecords((current) => ({
            ...current,
            [tableId]: current[tableId].filter((record) => record.id !== recordId),
        }))
    }

    return (
        <div className="HomeApp" id="inicio">
            <AdminHeader onLogout={onLogout} />
            <main className="HomeMain">
                <section className="HomeIntro">
                    <div>
                        <p className="HomeIntro__Eyebrow">PANEL DE CONTROL <span>/</span> {activeTable.label.toUpperCase()}</p>
                        <h1>{activeTable.title}</h1>
                        <p className="HomeIntro__Description">{activeTable.description}</p>
                    </div>
                    <div className="HomeIntro__Stamp">
                        <span>ENTORNO</span>
                        <strong>LOCAL / DEMO</strong>
                    </div>
                </section>

                <section className="HomeMetrics" aria-label="Resumen de administración">
                    <div className="HomeMetric">
                        <span>USUARIOS ACTIVOS</span>
                        <strong>{String(activeUsers).padStart(2, '0')}</strong>
                    </div>
                    <div className="HomeMetric">
                        <span>SUCURSALES ACTIVAS</span>
                        <strong>{String(openStores).padStart(2, '0')}</strong>
                    </div>
                    <div className="HomeMetric HomeMetric--alert">
                        <span>ALERTAS DE INVENTARIO</span>
                        <strong>{String(lowStock).padStart(2, '0')}</strong>
                    </div>
                    <p className="HomeMetrics__Caption">RESUMEN DE OPERACIÓN <span>·</span> TIENDAS 4B</p>
                </section>

                <AdminTableView
                    key={activeTable.id}
                    onCreate={(record) => createRecord(activeTable.id, record)}
                    onDelete={(recordId) => deleteRecord(activeTable.id, recordId)}
                    onUpdate={(record) => updateRecord(activeTable.id, record)}
                    rows={records[activeTable.id]}
                    table={activeTable}
                />
            </main>
            <AdminNavigation
                activeTableId={activeTable.id}
                onSelect={setActiveTableId}
                tables={ADMIN_TABLES}
            />
        </div>
    )
}

export default Home