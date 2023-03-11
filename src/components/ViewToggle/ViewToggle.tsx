import { useContext } from 'react';
import AppContext from '../../store/AppContext/app-context';

function ViewToggle() {
  const { view, updateView } = useContext(AppContext);

  const handleGridButtonClick = () => {
    updateView('grid');
  };

  const handleBoardButtonClick = () => {
    updateView('board');
  };

  return (
    <div className="flex justify-center my-6 ">
      <div className="btn-group my-6">
        <button
          type="button"
          className={`btn  ${view === 'board' && 'btn-active'}`}
          onClick={handleBoardButtonClick}>
          board
        </button>
        <button
          type="button"
          className={`btn  ${view === 'grid' && 'btn-active'}`}
          onClick={handleGridButtonClick}>
          grid
        </button>
      </div>
    </div>
  );
}

export default ViewToggle;
