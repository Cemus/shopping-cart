export default function generateArticle(array, Component) {
  return (
    <>
      {array.map((item) => (
        <Component
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </>
  );
}
