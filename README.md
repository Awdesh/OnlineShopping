# OnlineShopping
MEAN stack app for online shopping like application.

Mongoose is a ODM for mongoDB and node.js

A schema is set of rules that defines what fields must be inserted in a document.

A connection is an object representing one or more sockets that are connected to mongoDB server.

A model is a wrapper around single MongoDB colleciton and use its associated schema's constraints.

A document inside a collection is an instantiation of a model.

In words of Linus Trovalds, "if your API endpoints has multiple joins you're screwed anyway". Thus it's a good practice to have
an APi endpoint load documents from a single colleciton.

Schema design principle-:

1) Since MongoDB doesn't have joins so you must "STORE what you query for". i.e. schema should match with
what you want to display on the screen.

2) principle of least cardinality. If you're certain that you're going to store only certain number of
documents inside a colleciton then having an array where you can store is a good idea. If array is going togrow 
out of boounds i.e. you don't have control number of items inside an array then it's a good idea to use
a mapping collection like mapping table inside a sql.

// dependency injection.
A general idea of dependency injection is to separate out initialization code from the business logic so that
business logic code doesn't have to worry about initializing models.


