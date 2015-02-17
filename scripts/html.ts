# HTML Transformations go here

$("/html") {
  add_canonical_tag()
  rewrite_links()
  #absolutize_srcs()
  clean_mobile_meta_tags()
  remove_all_styles()
  remove_html_comments()

  absolutize()
  rewrite_aspnet_scripts()

  add_assets()


  @import "sections/header.ts"
  @import "sections/footer.ts"

  @import "mappings.ts"

}
