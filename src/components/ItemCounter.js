export default function ItemCounter(props) {
  return (
    <div className="itemCounter">
      <span className="itemCount">{props.count}</span>
      <button
        onClick={props.increaseFunc}
        className="itemCounterButton itemCountUp"
      >
        up
      </button>
      <button
        onClick={props.decreaseFunc}
        className="itemCounterButton itemCountDown"
      >
        down
      </button>
    </div>
  );
}
