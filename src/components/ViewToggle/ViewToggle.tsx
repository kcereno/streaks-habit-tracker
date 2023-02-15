import { ViewTypes } from '../../models/models';

interface Props {
  view: ViewTypes;
  updateView: (updatedView: ViewTypes) => void;
}

function ViewToggle({ view, updateView }: Props) {
  const handleGridButtonClick = () => {
    updateView('grid');
  };

  const handleBoardButtonClick = () => {
    updateView('board');
  };
  return (
    <div className="btn-group">
      <button
        id="button-board"
        type="button"
        className={`btn ${view === 'board' ? 'btn-active' : ''}`}
        onClick={handleBoardButtonClick}
      >
        board
      </button>
      <button
        id="button-grid"
        type="button"
        className={`btn ${view === 'grid' ? 'btn-active' : ''}`}
        onClick={handleGridButtonClick}
      >
        grid
      </button>
    </div>
  );
}

export default ViewToggle;
