interface MenuItem {
  name: string;
  winery: string;
  location: string;
  price: string;
}

const MenuItem: React.FC<MenuItem> = ({ name, winery, location, price }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{winery}</div>
      <div>({location})</div>
      <div>{price}</div>
    </div>
  );
};

export default MenuItem;
