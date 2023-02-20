import { ViewTypes } from '../../models/models';

interface Props {
  updateView: (updatedview: ViewTypes) => void;
}
function ViewToggle({ updateView }: Props) {
  const handleGridButtonClick = () => {
    updateView('grid');
  };

  const handleBoardButtonClick = () => {
    updateView('board');
  };

  return (
    <div className="flex justify-center ">
      <div className="btn-group my-6">
        <button
          type="button"
          className="btn btn-sm btn-active"
          onClick={handleBoardButtonClick}
        >
          Board
        </button>
        <button
          type="button"
          className="btn btn-sm"
          onClick={handleGridButtonClick}
        >
          Grid
        </button>
      </div>
    </div>
  );
}

export default ViewToggle;
