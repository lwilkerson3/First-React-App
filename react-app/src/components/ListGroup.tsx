// Notes:
// Can either use <Fragment> or <> to wrap multiple components without
// creating additional components in the DOM.
// ".map" allows us to iterate through a list in typescript using HTML to
// dynamically populate a list.
// Line 15 hard to explain, see 38:20 for good explanation

function ListGroup() {
  let items = ["New York", "Corona", "Arcata", "Eastvale"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
