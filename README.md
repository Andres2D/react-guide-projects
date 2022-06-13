## Work in progress
```npm i -D react-error-overlay@6.0.9```

## Ways to wrap JSX content
1. use ```<div></div>```
2. use your own ```<Wrapper>``` element returning props.children
3. use ```<Fragment></Fragment>``` elements 
4. use short fragement element ```<></>```

## Functional components
```
const Product = () => {
  return <h2>A product!</h2>
}
```

## class-based components
```
class Product extends Component {
  render() {
    return <h2>A product!</h2> 
  }
}
```