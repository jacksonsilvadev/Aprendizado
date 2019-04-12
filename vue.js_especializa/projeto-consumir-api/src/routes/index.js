import HomeComponent from '../components/home/HomeComponent'
import ProductComponent from '../components/products/ProductComponent'
import CreateProductComponent from '../components/products/CreateProductComponent'
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
  }

]
