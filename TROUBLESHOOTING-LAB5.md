# LAB 5 - Troubleshooting self-hosted runners

## Objetivo

Documentar los problemas encontrados durante la configuración y ejecución de un self-hosted runner en GitHub Actions, indicando el síntoma, la causa y la solución aplicada.

---

## Runner configurado

- Tipo: self-hosted runner
- Sistema operativo: Windows
- Nombre del runner: WIN11
- Estado esperado: Online / Idle
- Labels automáticas:
  - self-hosted
  - Windows
  - X64
- Labels personalizadas:
  - lab5
  - node
  - enterprise

---

## Workflow usado

Archivo:

```text
.github/workflows/self-hosted-hybrid.yml
