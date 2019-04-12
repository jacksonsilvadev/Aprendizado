import HomeComponent from '../components/home/HomeComponent'
import ProductComponent from '../components/products/ProductComponent'
import CreateProductComponent from '../components/products/CreateProductComponent'
import EditProductComponent from '../components/products/EditProductComponent'
export default [{
    path: '/',
    component: HomeComponent
  },
  {
    path: '/products',
    component: ProductComponent
  },
  {
    path: '/products/create',
    component: CreateProductComponent
  },
  {
    path: '/products/:id/edit',
    component: EditProductComponent,
    name: 'product.edit',
    props:true
  }

]
