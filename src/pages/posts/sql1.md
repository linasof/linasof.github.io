---
layout: "../../layouts/PostLayout.astro"
title: "SQL: INNER JOIN, LEFT JOIN y RIGHT JOIN"
categoria: "sql"
image:
  url: "/sql.png"
descripcion: " SQL: INNER JOIN, LEFT JOIN y RIGHT JOIN"
imagenes:
  - url: "/1.jpg"
    nombre: "traer el nombre y el departamento de los empleados, inner join traer informacion de 2 tablas relacionadas "
  - url: "/2.png"
    nombre: "Muéstrame el nombre de cada empleado y la región del mundo donde trabaja."
  - url: "/4.png"
    nombre: "traer el nombre de todos los empleados y el nombre del departamento que les corresponde (LEFT JOIN)"
  - url: "/5.png"
    nombre: "Muestra: los empleados y los departamentos pero conservando TODOS los departamentos, aunque no tengan empleados."
  - url: "/6.png"
    nombre: "Combina: cada empleado con cada departamento aunque no tengan relación entre sí."
  - url: "/7.png"
    nombre: "une empleados con departamentos cuando coinciden, conserva empleados sin departamento, conserva departamentos sin empleados"
  - url: "/8.png"
    nombre: "aparecerán todos los empleados pero DEPARTMENT_NAME saldrá siempre NULL, Une solo si el department_id coincideY además department_id es NULL"
---