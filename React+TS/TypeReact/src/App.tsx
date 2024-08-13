interface Prop {
  items: { id: number, name: string, price: string }[];
};


function App() {
  const myitems = [
    { id: 1, name:"phone" , price:"12$"},
    { id: 2, name:"pc" , price:"15$"},
    { id: 3, name:"TV" , price:"9$"},
  ];


  return <div className="container">
    <Items items={myitems} />
  </div>;
}




function Items({ items }: Prop) {
  return (
    items.map((el) =>
      <div className="card">
        <p>{el.id}</p>
        <p>{el.name}</p>
        <p>{el.price}</p>
    </div>
    )
   
  );
}



export default App
