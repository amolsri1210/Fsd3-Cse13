C-create/add/insert
R-retrive/view/get
u-update,edit
d-delete/remove
fs(node js module)-file system,node library that does not communicate with the browser interact directly with os.
it directs connnect with client os rather than the browser
major task of fs module 
-reading and writing files
-readfile()
-writefile()
-appendfile()
-directory management
-mkdir()
rmdir()
-rmdir()-depricated
-rm()
readdir()
-metadata/information
-stat()
-lsstat()
fsstat()
-watching for changes
-watch()
-watchfile()
-unwatchfile()
-streaming large file
-createreadstream()
-createwritestream()
-file operations
-rnmae()
-truncate()
-unlink()
-link()
-syslink()
each item ,name,price,qty
1-add to cart
2-slow cart
3-remove from cart
required files
crud.js
product.json
## item
id,name,price,qty
## operations
add to cart
show cart
remove item from cart
update quantity from cart
checkout
note:All items will be stored in hard disk ,so after termination of program we can retrieve cart details.
##reuired file
1 crud.js-it contains all the methods and entry point
2 products.json-it contains the product details in array form


