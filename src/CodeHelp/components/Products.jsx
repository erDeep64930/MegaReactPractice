import { Card } from "./Card"
import { ProductItems } from "./ProductItems"


export const Products = (props) => {
  return (
    <Card >
        <ProductItems title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
        <ProductItems title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
        <ProductItems title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
        <ProductItems title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>
    </Card>
  )
}
