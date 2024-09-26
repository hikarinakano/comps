function Accordion ({ items }) {
  const renderedItems = items.map(({label, content, id}) => {
    return (
      <div key={id}>
        <div>{label}</div>
        <div>{content}</div>
      </div>
    )
  })
  return <div>
          {renderedItems}
        </div>
}

export default Accordion;