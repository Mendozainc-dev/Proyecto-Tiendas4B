# Caso de uso: Sistema local de inventario y ventas "Tiendas 4B"

> Nota: el escenario descrito es ficticio y se elaboró con fines académicos para la materia de Seguridad Informática.

| Dato | Detalle |
|---|---|
| Proyecto | Tiendas 4B, sistema web de inventario y ventas |
| Materia | Seguridad Informática |
| Tipo de entrega | Práctica escolar en equipo |
| Modalidad de despliegue | 100 % local (sin Internet) |
| Tecnologías | React (frontend), Express.js (backend), base de datos relacional |

---

## 1. Contexto

Tiendas 4B es una pequeña cadena de tiendas de abarrotes y artículos del hogar con tres sucursales en la misma ciudad. Hasta ahora la empresa ha llevado el control de sus productos y ventas en cuadernos y hojas de cálculo sueltas, que cada sucursal maneja por separado.

Esta forma de trabajar ha provocado varios problemas:

- Los inventarios de las sucursales no coinciden con las existencias reales.
- No hay forma de saber quién registró o modificó una venta.
- Las hojas de cálculo circulan por memorias USB y correos personales, sin ningún control de acceso.
- Se han perdido registros por fallas de equipos, sin respaldos.
- Los gerentes tardan días en armar un reporte consolidado de ventas.

## 2. Planteamiento del problema

La dirección de Tiendas 4B solicitó a nuestro equipo el diseño e implementación de un sistema web que centralice el inventario y las ventas de todas las sucursales. Por política interna, **la información de la empresa no debe salir a Internet ni alojarse en servicios de terceros**. Por ello, el sistema debe instalarse en un servidor propio, dentro de la red local de la empresa, y ser accesible únicamente desde los equipos autorizados conectados por cable (Ethernet).

El proyecto tiene además un objetivo académico: aplicar buenas prácticas de seguridad informática en todas las capas (red, servidor, aplicación y datos).

## 3. Objetivos

### Objetivo general

Desarrollar e implementar un sistema web local para la gestión de inventario y ventas de Tiendas 4B, aplicando medidas de seguridad en la red, el servidor, la aplicación y la base de datos.

### Objetivos específicos

1. Diseñar una base de datos relacional que modele tiendas, usuarios, productos, inventario, clientes y ventas.
2. Desarrollar una API con Express.js y una interfaz con React.
3. Instalar el sistema en un servidor con Windows Server 2012 dentro de una red local segmentada.
4. Restringir el acceso por rangos de direcciones IP y por roles de usuario.
5. Registrar en una bitácora las acciones relevantes para auditoría.
6. Documentar la arquitectura, las medidas de seguridad y los riesgos identificados.

## 4. Alcance

### Dentro del alcance

- Inicio de sesión con roles (administrador, gerente y cajero).
- Gestión de tiendas, usuarios, categorías, proveedores y productos.
- Control de inventario por tienda, con alerta de stock mínimo.
- Registro de ventas con su detalle.
- Gestión básica de clientes.
- Reportes de ventas por tienda y por fecha.
- Bitácora de auditoría.
- Instalación en servidor local y configuración de red y seguridad.

### Fuera del alcance

- Pagos en línea o integración con bancos.
- Acceso desde Internet o desde dispositivos móviles fuera de la red local.
- Facturación electrónica.
- Tienda en línea para clientes.

## 5. Actores del sistema

| Actor | Descripción | Permisos principales |
|---|---|---|
| Administrador | Personal de sistemas de la empresa | Todo el sistema: usuarios, tiendas, catálogos, reportes globales y bitácora |
| Gerente | Responsable de una sucursal | Inventario y ventas de su tienda, reportes de su tienda, alta de productos |
| Cajero | Personal de mostrador | Registrar ventas y consultar productos y existencias de su tienda |

## 6. Casos de uso

| ID | Caso de uso | Actor(es) | Descripción breve |
|---|---|---|---|
| CU-01 | Iniciar sesión | Todos | El usuario se autentica con correo y contraseña. Tras varios intentos fallidos la cuenta se bloquea temporalmente. |
| CU-02 | Cerrar sesión | Todos | Finaliza la sesión activa. |
| CU-03 | Gestionar usuarios | Administrador | Crear, editar, desactivar usuarios y asignarles rol y tienda. |
| CU-04 | Gestionar tiendas | Administrador | Alta, edición y baja lógica de sucursales. |
| CU-05 | Gestionar categorías y proveedores | Administrador, Gerente | Mantener los catálogos de apoyo. |
| CU-06 | Gestionar productos | Administrador, Gerente | Alta, edición y baja lógica de productos con precios. |
| CU-07 | Controlar inventario | Gerente | Consultar y ajustar existencias de su tienda; ver productos bajo el stock mínimo. |
| CU-08 | Registrar venta | Cajero, Gerente | Seleccionar productos y cantidades, calcular total y descontar inventario. |
| CU-09 | Gestionar clientes | Cajero, Gerente | Registrar y consultar clientes (opcional en la venta). |
| CU-10 | Consultar reportes | Gerente, Administrador | Ventas por fecha, por tienda y por producto. |
| CU-11 | Consultar bitácora | Administrador | Revisar accesos, cambios y eventos de seguridad. |

### Flujo principal del CU-08 "Registrar venta"

1. El cajero inicia sesión.
2. El sistema muestra el punto de venta de su tienda.
3. El cajero busca productos por código o nombre y agrega cantidades.
4. El sistema valida que exista stock suficiente en la tienda.
5. El cajero elige el método de pago y, si se desea, asocia un cliente.
6. El sistema guarda la venta y su detalle en una sola transacción y descuenta el inventario.
7. El sistema registra el evento en la bitácora y muestra el resumen de la venta.

**Flujos alternos**

- 4a. No hay stock suficiente: el sistema muestra un aviso y no permite agregar esa cantidad.
- 6a. Ocurre un error al guardar: se revierte la transacción y no se modifica el inventario.

## 7. Requisitos

### 7.1 Funcionales

- RF-01. El sistema debe autenticar usuarios y limitar sus funciones según su rol.
- RF-02. El sistema debe mantener el inventario separado por tienda.
- RF-03. Cada venta debe descontar automáticamente el stock de la tienda donde se realizó.
- RF-04. El sistema debe avisar cuando un producto esté por debajo de su stock mínimo.
- RF-05. El sistema debe permitir consultar reportes de ventas por rango de fechas.
- RF-06. El sistema debe registrar en bitácora el inicio de sesión, los intentos fallidos y los cambios importantes.

### 7.2 No funcionales y de seguridad

- RNF-01. El sistema debe funcionar íntegramente en la red local, sin dependencias de Internet.
- RNF-02. El acceso debe estar limitado a los rangos IP autorizados.
- RNF-03. Las contraseñas deben almacenarse con hash (bcrypt) y nunca en texto plano.
- RNF-04. Toda comunicación entre cliente y servidor debe cifrarse con HTTPS.
- RNF-05. La base de datos no debe ser accesible desde la red, solo desde el propio servidor.
- RNF-06. Debe existir un respaldo programado de la base de datos.
- RNF-07. El sistema debe responder en menos de 3 segundos en operaciones normales con hasta 20 usuarios simultáneos.

## 8. Reglas de negocio

- Un cajero o gerente pertenece a una sola tienda; el administrador no está ligado a ninguna.
- Un producto puede existir en varias tiendas, con existencias independientes.
- No se pueden eliminar productos, usuarios ni tiendas con historial; se desactivan (baja lógica).
- El precio de venta se guarda en cada renglón de la venta para conservar el historial aunque el precio cambie después.
- Las entradas de la bitácora no se pueden modificar ni eliminar desde la aplicación.

## 9. Restricciones

- Servidor: equipo con Windows Server 2012.
- Red: un router y un switch, con rangos de IP definidos y usuarios conectados por Ethernet.
- Sin acceso a Internet para los equipos de usuarios.
- Frontend en React y backend en Express.js.
- El proyecto debe desarrollarse en equipo, con control de versiones.

## 10. Criterios de aceptación

1. Un usuario fuera de los rangos de IP autorizados no puede abrir el sistema.
2. Un cajero no puede acceder a las pantallas de administración, ni siquiera escribiendo la URL.
3. Tras 5 intentos fallidos de inicio de sesión, la cuenta queda bloqueada por un tiempo.
4. Una venta descuenta el inventario correcto y queda registrada con su usuario, tienda y fecha.
5. En la base de datos no existen contraseñas legibles.
6. El sistema se abre por HTTPS desde un equipo de la VLAN de usuarios.
7. El equipo puede restaurar la base de datos a partir de un respaldo.
