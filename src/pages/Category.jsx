import Drawer from "../Components/Drawer";
import { ProductsList } from "../Store/Services/ProductsList";
const Category = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { products=[], loading }= useSelector(store => store?.productsListReducer)
  const drawerOpen = {
    drawerAction: "",
    data:{},
    pageName: "",
    title: "",
  }
  const drawerClose = {
    drawerAction: "",
    data:{},
    pageName: "",
    title: "",
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductsList({collectiontype: "categories"}));
  }, []);
  let head = ["Name","Description","Action"];
  let productList = [];
  let actions = []
  productList = products.length > 0 && products.map(pro => {
    let cellData = [pro?.pic_url,pro?.productname,pro?.mrp,pro?.sellprice,[pro._id]]
    return Object.assign({},pro,{"cellData": cellData})
  }); 

  const pageInfo = {
    pageTableTitle: "Category Listing",
    pageTableDec: "all categoried listed",
    pageName: "Category",
    RbuttonName: "Add Category",
     collectionName: "categories"

  }

  return (
    <>
      <ListingPage  
        productTableData={ productList }
        tblHead={ head }
        list={ products }
        drawerClose
        drawerOpen
        {...pageInfo }
      />

    </>
  );
};
export default Category;
