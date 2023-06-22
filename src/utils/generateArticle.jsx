export default function generateArticle(array, Component) {
  return (
    <>
      {array.map((item, index) => (
        <Component
          key={index}
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </>
  );
}
