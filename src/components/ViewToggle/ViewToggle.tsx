/* eslint-disable react/button-has-type */

function ViewToggle() {
  return (
    <div className="flex justify-center ">
      <div className="btn-group my-6">
        <button className="btn btn-sm btn-active">Board</button>
        <button className="btn btn-sm">Grid</button>
      </div>
    </div>
  );
}

export default ViewToggle;
