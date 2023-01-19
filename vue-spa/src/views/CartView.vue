<template>
  <div class="row my-4">
      <div class="col-md-12">
          <div class="card">
              <div class="card-body">
                  <table class="table">
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>Image</th>
                              <th>Name</th>
                              <th>Quantity</th>
                              <th>Price</th>
                              <th>Subtotal</th>
                              <th></th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>item.id</td>
                              <td>
                                  <img src="image" 
                                  class="fluid rounded"
                                  width="60"
                                  height="60"    
                                  alt="name" />
                              </td>
                              <td>
                                  item.name
                              </td>
                              <td>
                                  <i 
                                      
                                      class="bi bi-caret-up"></i>
                                  <span class="mx-2">
                                      item.quantity
                                  </span>
                                  <i 
                                      
                                      class="bi bi-caret-down"></i>
                              </td>
                              <td>
                                  item.price
                              </td>
                              <td>
                                  item.price * item.quantity
                              </td>
                              <td>
                                  <i 
                                     
                                      class="bi bi-cart-x text-danger"></i>
                              </td>
                          </tr>
                          <tr>
                              <th colSpan="3" class="text-center">
                                  Total
                              </th>
                              <td colSpan="3" class="text-center">
                                  <span class="badge bg-danger rounded-pill">
                                  </span>
                              </td>
                          </tr>
                              
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
</template>


<style>
  i{
      cursor: pointer;
  }
</style>