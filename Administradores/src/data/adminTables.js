export const ADMIN_TABLES = [
    {
        id: 'usuarios', label: 'usuarios', title: 'Usuarios',
        description: 'Cuentas, roles y acceso al sistema.',
        deactivateValue: 'Inactivo',
        fields: [
            { name: 'nombre', label: 'Nombre completo', required: true },
            { name: 'email', label: 'Correo', type: 'email', required: true },
            { name: 'rol', label: 'Rol', type: 'select', options: ['Administrador', 'Gerente', 'Cajero'] },
            { name: 'tienda', label: 'Tienda asignada', type: 'select', options: ['Sin asignar', 'Centro', 'Norte', 'Sur'] },
            { name: 'estado', label: 'Estado', type: 'select', options: ['Activo', 'Inactivo'] },
        ],
        columns: [
            { key: 'id', label: 'ID' }, { key: 'nombre', label: 'Nombre' },
            { key: 'email', label: 'Correo' }, { key: 'rol', label: 'Rol' },
            { key: 'tienda', label: 'Tienda' }, { key: 'estado', label: 'Estado' },
        ],
        rows: [
            { id: 'USR-001', nombre: 'Mariana López', email: 'mariana@tiendas4b.local', rol: 'Administrador', tienda: 'Sin asignar', estado: 'Activo' },
            { id: 'USR-002', nombre: 'Jorge Ramírez', email: 'jorge@tiendas4b.local', rol: 'Gerente', tienda: 'Centro', estado: 'Activo' },
            { id: 'USR-003', nombre: 'Lucía Torres', email: 'lucia@tiendas4b.local', rol: 'Cajero', tienda: 'Norte', estado: 'Activo' },
        ],
    },
    {
        id: 'tiendas', label: 'tiendas', title: 'Tiendas',
        description: 'Sucursales y datos de contacto.',
        deactivateValue: 'Inactiva',
        fields: [
            { name: 'nombre', label: 'Nombre de la tienda', required: true },
            { name: 'direccion', label: 'Dirección', required: true },
            { name: 'telefono', label: 'Teléfono', type: 'tel' },
            { name: 'estado', label: 'Estado', type: 'select', options: ['Activa', 'Inactiva'] },
        ],
        columns: [
            { key: 'id', label: 'ID' }, { key: 'nombre', label: 'Tienda' },
            { key: 'direccion', label: 'Dirección' }, { key: 'telefono', label: 'Teléfono' },
            { key: 'estado', label: 'Estado' },
        ],
        rows: [
            { id: 'T-001', nombre: 'Tiendas 4B Centro', direccion: 'Calle Principal 100', telefono: '555-0101', estado: 'Activa' },
            { id: 'T-002', nombre: 'Tiendas 4B Norte', direccion: 'Av. Norte 250', telefono: '555-0102', estado: 'Activa' },
            { id: 'T-003', nombre: 'Tiendas 4B Sur', direccion: 'Av. Sur 75', telefono: '555-0103', estado: 'Activa' },
        ],
    },
    {
        id: 'roles', label: 'roles', title: 'Roles',
        description: 'Perfiles de acceso y responsabilidades.',
        fields: [
            { name: 'nombre', label: 'Nombre del rol', required: true },
            { name: 'descripcion', label: 'Descripción', type: 'textarea', required: true },
            { name: 'permisos', label: 'Permisos principales', type: 'textarea', required: true },
        ],
        columns: [
            { key: 'id', label: 'ID' }, { key: 'nombre', label: 'Rol' },
            { key: 'descripcion', label: 'Descripción' }, { key: 'permisos', label: 'Permisos' },
        ],
        rows: [
            { id: 'R-001', nombre: 'Administrador', descripcion: 'Control general del sistema.', permisos: 'Usuarios, tiendas, catálogos y reportes' },
            { id: 'R-002', nombre: 'Gerente', descripcion: 'Operación de una sucursal.', permisos: 'Productos, inventario y ventas' },
            { id: 'R-003', nombre: 'Cajero', descripcion: 'Atención en punto de venta.', permisos: 'Ventas y consulta de existencias' },
        ],
    },
    {
        id: 'categorias', label: 'categorias', title: 'Categorías',
        description: 'Clasificación del catálogo de productos.',
        deactivateValue: 'Inactiva',
        fields: [
            { name: 'nombre', label: 'Nombre', required: true },
            { name: 'descripcion', label: 'Descripción' },
            { name: 'estado', label: 'Estado', type: 'select', options: ['Activa', 'Inactiva'] },
        ],
        columns: [
            { key: 'id', label: 'ID' }, { key: 'nombre', label: 'Categoría' },
            { key: 'descripcion', label: 'Descripción' }, { key: 'estado', label: 'Estado' },
        ],
        rows: [
            { id: 'CAT-01', nombre: 'Abarrotes', descripcion: 'Alimentos y productos básicos.', estado: 'Activa' },
            { id: 'CAT-02', nombre: 'Bebidas', descripcion: 'Bebidas frías y de anaquel.', estado: 'Activa' },
            { id: 'CAT-03', nombre: 'Limpieza', descripcion: 'Limpieza del hogar y cuidado personal.', estado: 'Activa' },
        ],
    },
    {
        id: 'proveedores', label: 'proveedores', title: 'Proveedores',
        description: 'Directorio de abastecimiento y contacto.',
        fields: [
            { name: 'nombre', label: 'Empresa', required: true },
            { name: 'telefono', label: 'Teléfono', type: 'tel' },
            { name: 'email', label: 'Correo', type: 'email' },
            { name: 'contacto', label: 'Persona de contacto' },
        ],
        columns: [
            { key: 'id', label: 'ID' }, { key: 'nombre', label: 'Proveedor' },
            { key: 'contacto', label: 'Contacto' }, { key: 'telefono', label: 'Teléfono' },
            { key: 'email', label: 'Correo' },
        ],
        rows: [
            { id: 'PRO-01', nombre: 'Distribuidora del Centro', contacto: 'Ana Pérez', telefono: '555-0201', email: 'ventas@distribuidora.local' },
            { id: 'PRO-02', nombre: 'Abarrotes Nacionales', contacto: 'Luis García', telefono: '555-0202', email: 'pedidos@abarrotes.local' },
        ],
    },
    {
        id: 'productos', label: 'productos', title: 'Productos',
        description: 'Catálogo, precios y disponibilidad comercial.',
        deactivateValue: 'Inactivo',
        fields: [
            { name: 'codigo', label: 'Código', required: true },
            { name: 'nombre', label: 'Nombre del producto', required: true },
            { name: 'categoria', label: 'Categoría', type: 'select', options: ['Abarrotes', 'Bebidas', 'Limpieza', 'Hogar'] },
            { name: 'proveedor', label: 'Proveedor', type: 'select', options: ['Distribuidora del Centro', 'Abarrotes Nacionales'] },
            { name: 'compra', label: 'Precio de compra', type: 'number', min: '0', step: '0.01' },
            { name: 'venta', label: 'Precio de venta', type: 'number', min: '0', step: '0.01', required: true },
            { name: 'estado', label: 'Estado', type: 'select', options: ['Activo', 'Inactivo'] },
        ],
        columns: [
            { key: 'codigo', label: 'Código' }, { key: 'nombre', label: 'Producto' },
            { key: 'categoria', label: 'Categoría' }, { key: 'proveedor', label: 'Proveedor' },
            { key: 'venta', label: 'Precio' }, { key: 'estado', label: 'Estado' },
        ],
        rows: [
            { id: 'P-001', codigo: 'ABA-001', nombre: 'Arroz 1 kg', categoria: 'Abarrotes', proveedor: 'Distribuidora del Centro', compra: '18.00', venta: '25.00', estado: 'Activo' },
            { id: 'P-002', codigo: 'BEB-001', nombre: 'Agua 1.5 L', categoria: 'Bebidas', proveedor: 'Abarrotes Nacionales', compra: '9.00', venta: '14.00', estado: 'Activo' },
            { id: 'P-003', codigo: 'LIM-001', nombre: 'Detergente 1 kg', categoria: 'Limpieza', proveedor: 'Distribuidora del Centro', compra: '30.00', venta: '42.00', estado: 'Activo' },
        ],
    },
    {
        id: 'inventario', label: 'inventario', title: 'Inventario',
        description: 'Existencias separadas por producto y sucursal.',
        fields: [
            { name: 'producto', label: 'Producto', type: 'select', options: ['Arroz 1 kg', 'Agua 1.5 L', 'Detergente 1 kg'] },
            { name: 'tienda', label: 'Tienda', type: 'select', options: ['Centro', 'Norte', 'Sur'] },
            { name: 'stock', label: 'Existencias', type: 'number', min: '0', required: true },
            { name: 'minimo', label: 'Stock mínimo', type: 'number', min: '0', required: true },
        ],
        columns: [
            { key: 'id', label: 'ID' }, { key: 'producto', label: 'Producto' },
            { key: 'tienda', label: 'Tienda' }, { key: 'stock', label: 'Existencias' },
            { key: 'minimo', label: 'Mínimo' }, { key: 'estado', label: 'Estado' },
        ],
        rows: [
            { id: 'INV-01', producto: 'Arroz 1 kg', tienda: 'Centro', stock: '50', minimo: '10', estado: 'Disponible' },
            { id: 'INV-02', producto: 'Agua 1.5 L', tienda: 'Centro', stock: '8', minimo: '20', estado: 'Stock bajo' },
            { id: 'INV-03', producto: 'Detergente 1 kg', tienda: 'Norte', stock: '25', minimo: '8', estado: 'Disponible' },
        ],
    },
    {
        id: 'clientes', label: 'clientes', title: 'Clientes',
        description: 'Datos de contacto para ventas asociadas.',
        fields: [
            { name: 'nombre', label: 'Nombre completo', required: true },
            { name: 'telefono', label: 'Teléfono', type: 'tel' },
            { name: 'email', label: 'Correo', type: 'email' },
        ],
        columns: [
            { key: 'id', label: 'ID' }, { key: 'nombre', label: 'Cliente' },
            { key: 'telefono', label: 'Teléfono' }, { key: 'email', label: 'Correo' },
        ],
        rows: [
            { id: 'CLI-001', nombre: 'Elena Sánchez', telefono: '555-0310', email: 'elena@correo.local' },
            { id: 'CLI-002', nombre: 'Roberto Díaz', telefono: '555-0311', email: 'roberto@correo.local' },
        ],
    },
    {
        id: 'ventas', label: 'ventas', title: 'Ventas',
        description: 'Operaciones registradas por tienda y usuario.',
        fields: [
            { name: 'tienda', label: 'Tienda', type: 'select', options: ['Centro', 'Norte', 'Sur'] },
            { name: 'usuario', label: 'Usuario', type: 'select', options: ['Lucía Torres', 'Jorge Ramírez'] },
            { name: 'fecha', label: 'Fecha', type: 'date', required: true },
            { name: 'total', label: 'Total', type: 'number', min: '0', step: '0.01', required: true },
            { name: 'pago', label: 'Método de pago', type: 'select', options: ['Efectivo', 'Tarjeta', 'Transferencia'] },
        ],
        columns: [
            { key: 'id', label: 'Folio' }, { key: 'fecha', label: 'Fecha' },
            { key: 'tienda', label: 'Tienda' }, { key: 'usuario', label: 'Usuario' },
            { key: 'total', label: 'Total' }, { key: 'pago', label: 'Pago' },
        ],
        rows: [
            { id: 'V-1001', fecha: '2026-09-30', tienda: 'Centro', usuario: 'Lucía Torres', total: '184.00', pago: 'Efectivo' },
            { id: 'V-1002', fecha: '2026-09-30', tienda: 'Norte', usuario: 'Jorge Ramírez', total: '96.50', pago: 'Tarjeta' },
        ],
    },
    {
        id: 'detalle_ventas', label: 'detalle_ventas', title: 'Detalle de ventas',
        description: 'Productos, cantidades y precios por operación.',
        fields: [
            { name: 'venta', label: 'Folio de venta', required: true },
            { name: 'producto', label: 'Producto', type: 'select', options: ['Arroz 1 kg', 'Agua 1.5 L', 'Detergente 1 kg'] },
            { name: 'cantidad', label: 'Cantidad', type: 'number', min: '1', required: true },
            { name: 'precio', label: 'Precio unitario', type: 'number', min: '0', step: '0.01', required: true },
            { name: 'subtotal', label: 'Subtotal', type: 'number', min: '0', step: '0.01', required: true },
        ],
        columns: [
            { key: 'id', label: 'ID' }, { key: 'venta', label: 'Venta' },
            { key: 'producto', label: 'Producto' }, { key: 'cantidad', label: 'Cantidad' },
            { key: 'precio', label: 'Precio unitario' }, { key: 'subtotal', label: 'Subtotal' },
        ],
        rows: [
            { id: 'DV-01', venta: 'V-1001', producto: 'Arroz 1 kg', cantidad: '2', precio: '25.00', subtotal: '50.00' },
            { id: 'DV-02', venta: 'V-1001', producto: 'Detergente 1 kg', cantidad: '1', precio: '42.00', subtotal: '42.00' },
            { id: 'DV-03', venta: 'V-1002', producto: 'Agua 1.5 L', cantidad: '3', precio: '14.00', subtotal: '42.00' },
        ],
    },
    {
        id: 'bitacora', label: 'bitacora', title: 'Bitácora',
        description: 'Eventos de acceso y actividad para auditoría.',
        appendOnly: true,
        fields: [
            { name: 'usuario', label: 'Usuario', type: 'select', options: ['Mariana López', 'Jorge Ramírez', 'Lucía Torres'] },
            { name: 'accion', label: 'Acción', type: 'select', options: ['LOGIN_OK', 'LOGIN_FALLIDO', 'USUARIO_ACTUALIZADO', 'VENTA_CREADA'] },
            { name: 'detalle', label: 'Detalle', required: true },
            { name: 'ip', label: 'IP de origen', required: true },
        ],
        columns: [
            { key: 'fecha', label: 'Fecha' }, { key: 'usuario', label: 'Usuario' },
            { key: 'accion', label: 'Acción' }, { key: 'detalle', label: 'Detalle' },
            { key: 'ip', label: 'IP de origen' },
        ],
        rows: [
            { id: 'LOG-01', fecha: '2026-09-30 08:14', usuario: 'Mariana López', accion: 'LOGIN_OK', detalle: 'Inicio de sesión correcto', ip: '192.168.20.10' },
            { id: 'LOG-02', fecha: '2026-09-30 08:42', usuario: 'Jorge Ramírez', accion: 'USUARIO_ACTUALIZADO', detalle: 'Actualizó datos de sucursal', ip: '192.168.20.12' },
            { id: 'LOG-03', fecha: '2026-09-30 09:03', usuario: 'Lucía Torres', accion: 'VENTA_CREADA', detalle: 'Venta V-1001 registrada', ip: '192.168.20.105' },
        ],
    },
]