## Agregar Google AdSense

**Cambio único** en `index.html`:

Insertar en el `<head>` (después de las meta tags de SEO y antes del cierre `</head>`):

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9997143828696678"
     crossorigin="anonymous"></script>
```

### Notas
- Es el snippet oficial de AdSense Auto Ads / verificación de sitio.
- No requiere variables de entorno (el client ID es público).
- Después de implementar, hay que **publicar** para que llegue a `conferencistasfamosos.com` y luego en AdSense pulsar "Verificar".
- Los anuncios reales aparecerán cuando Google apruebe el sitio (puede tardar días).

¿Procedo?