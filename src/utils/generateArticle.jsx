export default function generateArticle(array, Component) {
  return (
    <div>
      {array.map((item) => (
        <Component
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}
