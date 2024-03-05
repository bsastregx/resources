## SQL Queries

`SELECT *
FROM wp_posts
WHERE post_type = 'post';`

## override production with staging:

https://wordpress.com/support/how-to-create-a-staging-site/#synchronize-staging-to-production

# ACF

- wp_posts
  guarda los fields -> post_type: acf-field-group
  guarda los field groups -> post-type: acf-field
- wp_postmeta
  guarda el valor de cada instancia de los fields, donde el meta_key coincide con el post_excerpt en la tabla wp_posts

Para remover los ACF values:
DELETE FROM wp_postmeta WHERE wp_postmeta.meta_key = "custom_field_name" OR wp_postmeta.meta_key = "\_custom_field_name"
